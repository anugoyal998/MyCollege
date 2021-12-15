const axios = require("axios");
const cheerio = require("cheerio");
const updatesSchema = require("../model/updatesSchema");
const _ = require("lodash");

const scrapApiController = async (req, result) => {
  axios(process.env.SCRAP_SITE_URL)
    .then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      const pTags = $(".bg-white > p > a");
      const notification = [];
      pTags.each((idx, data) => {
        if (idx <= 50) {
          const aHref = data.attribs?.href;
          let n = aHref.length;
          let pdf = "";
          pdf += aHref[n - 3];
          pdf += aHref[n - 2];
          pdf += aHref[n - 1];
          if (pdf == "pdf" || pdf == "PDF") notification.push(aHref);
        }
      });
      // result.status(200).json(notification);
      return notification
    })
    .catch((err) => {
      console.log(err);
      // result.status(400).json("eeror in scrap api", err);
    });
};

const getUpdateDB = async (req, res) => {
  try {
    const data = await updatesSchema.find({})
    res.status(200).json(data[0])
  } catch (error) {
    console.log("error in getting update db", error);
    res.status(400).json(error.message);
  }
}

const updateDBUpdates = async (req, res)=> {
  try {
    const updatedData = await updatesSchema.updateOne({_id: req.body._id},{
      $set: {
        updates: req.body.data
      }
    })
    res.status(200).json(updatedData)
  } catch (error) {
    console.log("error in updates db", error)
    res.status(400).json(error.message);
  }
}

module.exports = {
  scrapApiController,
  getUpdateDB,
  updateDBUpdates
};
