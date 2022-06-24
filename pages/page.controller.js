const {
  createPage,
  deletePage,
  listPages,
  pageDetails,
  savePageContent,
  updatePage,
  decodeBase64Image,
  html_to_image,
} = require("./page.services");

const create = async (req, res) => {
  console.log("hi");
  const pageBody = req.body;
  const page = await createPage(pageBody);
  res.json(page);
};
const list = async (req, res) => {
  const pages = await listPages();
  res.json(pages);
};
const details = async (req, res) => {
  const { pageId } = req.params;
  const details = await pageDetails(pageId);
  res.json(details);
};
const deletePageRecord = async (req, res) => {
  const { pageId } = req.params;
  const data = await deletePage(pageId);
  res.json(data);
};
const update = async (req, res) => {
  const { pageId } = req.params;
  const pageBody = req.body;
  const page = await updatePage(pageId, pageBody);
  res.json(page);
};

const changeContent = async (req, res) => {
  const { pageId } = req.params;
    const GetId =await pageDetails (pageId);
    var Content_HTML=req.body["mycustom-html"];
    var Content_CSS=req.body["mycustom-css"];
    var GiveBackUUID = GetId['Background_URL'].split('/')[4].split(".")[0];
    html_to_image(GiveBackUUID,Content_HTML,Content_CSS); 
    var pageContent = decodeBase64Image(req.body);
    const pageResponse = await savePageContent(pageId, pageContent);
    res.json(pageResponse.content);
};

const loadContent = async (req, res) => {
  const { pageId } = req.params;
  res.header("Content-Type", "application/json");
  const pageData = await pageDetails(pageId);
  res.json(pageData.content);
};

module.exports = {
  loadContent,
  changeContent,
  update,
  deletePageRecord,
  details,
  list,
  create,
};
