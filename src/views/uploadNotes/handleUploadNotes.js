import axios from "axios";

export const handleUploadNotes = async (props) => {
  let { subject, chapter, branch, cc, sem, file, setLoading, toast } = props;
  setLoading((pre) => true);
  if (!subject || !chapter || !branch || !cc || !sem || !file) {
    toast.error("All Fields are required");
    setLoading((pre) => false);
    return;
  }
  branch = branch.toLowerCase();
  sem = sem.toLowerCase();
  const url = process.env.REACT_APP_SERVER_BASE_URL || "https://localhost:5000";
  //formdata
  const formData = new FormData();
  formData.append("subject", subject);
  formData.append("chapter", chapter);
  formData.append("sem", sem);
  formData.append("branch", branch);
  formData.append("cc", cc);
  formData.append("file", file);
  let fileId;
  try {
    const res = await axios.post(`${url}/upload/notes`, formData);
    fileId = res.data.id;
  } catch (err) {
    // console.log("error in upload ",err)
    setLoading((prev) => false);
    toast.error("An Error occurred");
    return;
  }
  let notesUrl;
  try {
    notesUrl = await axios.post(`${url}/get/notes/url`, { fileId });
  } catch (err) {
    // console.log("error in upload ",err)
    setLoading((prev) => false);
    toast.error("An Error occurred");
    return;
  }
  // console.log(notesUrl)
  if (Object.keys(notesUrl.data).length === 0) {
    // console.log("error in geeting notes url");
    setLoading((pre) => false);
    toast.error("An error occurred");
    return;
  }
  const webContentLink = notesUrl.data.webContentLink;
  const webViewLink = notesUrl.data.webViewLink;
  axios
    .post(`${url}/save/notes/db`, {
      subject,
      chapter,
      sem,
      branch,
      cc,
      fileId,
      webContentLink,
      webViewLink,
    })
    .then((saveRes) => {
      setLoading((pre) => false);
      toast.success("Notes saved successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((error) => {
      // console.log("error in saving notes frontend", error);
      setLoading((pre) => false);
      toast.error("An error occurred");
    });
};
