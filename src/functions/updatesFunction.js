import axios from "axios";
import _ from "lodash";
export const updatesFunction = async () => {
  const url = process.env.REACT_APP_SERVER_BASE_URL;
  //scrap api data
  let scrapData = [];
  try {
    const response = await axios.get(`${url}/scrap/api`);
    scrapData = response.data;
    scrapData = _.take(scrapData, 20);
  } catch (error) {
    console.log("error in scrapData: " + error);
    return 0;
  }
  //get db data
  let dbData = [];
  let _id;
  try {
    const response = await axios.get(`${url}/get/update/db`);
    dbData = response.data.updates;
    _id = response.data._id;
  } catch (error) {
    console.log("error in db data: " + error);
    return 0;
  }
  const x = _.isEqual(dbData, scrapData)
  // console.log(x)
  //check is equal
  if (x) {
    return 0;
  }
  //update db
  try {
    const response = await axios.post(`${url}/update/db/updates`, {
      _id,
      data: scrapData,
    });
  } catch (error) {
    console.log("error in update db data: " + error);
    return 0;
  }
  //send mail
  try {
    const response = await axios.post(`${url}/send/mail`);
    // console.log(response, "mail sent successfully");
  } catch (error) {
    // console.log("error in send mail: " + error);
    return 0;
  }
  return 1;
};
