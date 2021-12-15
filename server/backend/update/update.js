const axios = require("axios");
const cheerio = require("cheerio");
const _ = require("lodash");
const updatesSchema = require("../model/updatesSchema")
const https = require("https");

const update = async () => {
  var scrapData = [];
  //scarp site
  try {
    const res = await axios(process.env.SCRAP_SITE_URL);
    const html = res.data;
    const $ = cheerio.load(html);
    const pTags = $(".bg-white > p > a");
    pTags.each((idx, data) => {
      if (idx <= 50) {
        const aHref = data.attribs?.href;
        let n = aHref.length;
        let pdf = "";
        pdf += aHref[n - 3];
        pdf += aHref[n - 2];
        pdf += aHref[n - 1];
        if (pdf == "pdf" || pdf == "PDF") scrapData.push(aHref);
      }
    });
  } catch (error) {
    console.log("error in scrap ", error);
    return;
  }
  scrapData = _.take(scrapData,20)
  //get db data
  var dbData = []
  var _id;
  try {
      const data = await updatesSchema.find({})
      dbData = data[0]?.updates
      _id = data[0]?._id
  } catch (error) {
      console.log("error in db Data",error)
      return
  }
  const x = _.isEqual(dbData,scrapData)
  if(x){
      console.log(x)
      return 0;
  }
  //update db
  try {
      await updatesSchema.updateOne({_id: _id},{
          $set: {
              updates: scrapData
          }
      })
  } catch (error) {
      console.log("error in update db",error)
      return
  }
  //send push notification
  let s = scrapData[1]
  let y = s.substr(0, 5);
  if (y === "https") {
    s = s.substr(26);
  } else {
    s = s.substr(25);
  }
  s = s.substr(0, s.length - 4);
  var message = {
    app_id: process.env.ONESIGNAL_APP_ID,
    contents: {"en": `${s}`},
    included_segments: ["Subscribed Users"],
    url: scrapData[1]
  }
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Basic ${process.env.ONESIGNAL_API_KEY}`,
  };
  const options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  var request = https.request(options, function(result) {  
    result.on('data', function(data) {
    //   console.log("Response:");
    //   console.log(JSON.parse(data));
    });
  });
  request.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
    res.staus(400).json(e);
    return
  });
  request.write(JSON.stringify(message));
  request.end();
  console.log("success")
  return 1
};


module.exports = {
  update,
};
