const { google } = require("googleapis");
const fs = require("fs");
const NotesSchema = require("../model/notesSchema")

const upload2Drive = async (req, res) => {
  const file = req.files.file;
  const cid = process.env.GDRIVE_CLIENT_ID;
  const secret = process.env.GDRIVE_CLIENT_SECRET;
  const redirect = process.env.GDRIVE_REDIRECT_URL;
  const token = process.env.GDRIVE_REFRESH_TOKEN;
  const oauth2client = new google.auth.OAuth2(cid, secret, redirect);
  oauth2client.setCredentials({
    refresh_token: token,
  });
  const drive = google.drive({
    version: "v3",
    auth: oauth2client,
  });
  let parents = [];
  const branch = req.body?.branch;
  if (branch == "computer engineering")
    parents.push(process.env.GDRIVE_COMPUTER);
  else if (branch == "information technology")
    parents.push(process.env.GDRIVE_IT);
  else if (branch == "electronics and communications")
    parents.push(process.env.GDRIVE_ECE);
  else if (branch == "electrical engineering")
    parents.push(process.env.GDRIVE_EE);
  else if (branch == "mechanical engineering")
    parents.push(process.env.GDRIVE_MECH);
  else if (branch == "civil engineering")
    parents.push(process.env.GDRIVE_CIVIL);
  else if (branch == "production and industrial")
    parents.push(process.env.GDRIVE_PIE);
  drive.files
    .create({
      requestBody: {
        name: `${req.body?.subject}_${req.body?.chapter}_${req.body?.sem}_${req.body?.branch}_${req.body?.cc}_${file.name}`,
        mimeType: file.mimetype,
        parents: parents,
      },
      media: {
        body: fs.createReadStream(file.tempFilePath),
        mimeType: file.mimetype,
      },
    })
    .then((response) => {
    //   console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log("error in upload2drive", err);
      res.status(400).send("error");
    });
};

const getNotesUrl = async (req, res) => {
  try {
    const cid = process.env.GDRIVE_CLIENT_ID;
    const secret = process.env.GDRIVE_CLIENT_SECRET;
    const redirect = process.env.GDRIVE_REDIRECT_URL;
    const token = process.env.GDRIVE_REFRESH_TOKEN;
    const oauth2client = new google.auth.OAuth2(cid, secret, redirect);
    oauth2client.setCredentials({
      refresh_token: token,
    });
    const drive = google.drive({
      version: "v3",
      auth: oauth2client,
    });
    const fileId = req.body.fileId
    await drive.permissions.create({
        fileId: fileId,
        requestBody: {
            role: 'reader',
            type: 'anyone'
        }
    })
    const result = await drive.files.get({
        fileId: fileId,
        fields: 'webViewLink, webContentLink'
    })
    // console.log(result.data)
    res.status(200).json(result.data)
  } catch (error) {
      console.log("error in getNotesUrl", err);
      res.status(400).json("error");
  }
};

const saveNotesToDB = async (req, res) => {
    try {
        const data = new NotesSchema(req.body)
        await data.save()
        res.status(200).json("success");
      } catch (error) {
        // console.log("error in saving notes to db", error);
        res.status(400).json("error");
      }
}

module.exports = {
  upload2Drive,
  getNotesUrl,
  saveNotesToDB,
};
