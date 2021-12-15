const express = require("express");
const router = new express.Router();
//auth
const { authAddUser , authRemoveUser,authLogin} = require("../controllers/auth");
router.post("/auth/add/user", authAddUser);
// router.post("/auth/remove/user", authRemoveUser);
router.post("/auth/login",authLogin);
//add to mail list
const { addToMailList } = require("../controllers/addToMailList");
router.post("/add/mail/list", addToMailList);
//upload notes
const {
  upload2Drive,
  getNotesUrl,
  saveNotesToDB,
} = require("../controllers/upload2Drive");
router.post("/upload/notes", upload2Drive);
router.post("/get/notes/url", getNotesUrl);
router.post("/save/notes/db", saveNotesToDB);
//search notes
const {
  searchBranchNotes,
  searchAllNotes,
} = require("../controllers/searchNotes");
router.post("/search/branch/notes", searchBranchNotes);
router.post("/search/all/notes", searchAllNotes);
//scrapper api and upadtes
const {
  scrapApiController,
  getUpdateDB,
  updateDBUpdates,
} = require("../controllers/scrapApiController");
router.get("/scrap/api", scrapApiController);
router.get("/get/update/db", getUpdateDB);
router.post("/update/db/updates", updateDBUpdates);
//twillo send sms
const {twilloSendSMS} = require("../controllers/twilloSendSMS")
router.post('/send/sms',twilloSendSMS)
module.exports = router;
