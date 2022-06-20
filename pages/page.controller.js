const {  
  createPage,
  deletePage,
  listPages,
  pageDetails,
  savePageContent,
  updatePage
} = require('./page.services')

 const create = async (req, res) => {
  console.log("hi")
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
  console.log("byeee ")
  const pageContent = await savePageContent(pageId, req.body);
  res.json(pageContent);
};
 const loadContent = async (req, res) => {
  const { pageId } = req.params;
  res.header('Content-Type', 'application/json');
  const pageData = await pageDetails(pageId);
  console.log(pageData.content)
  res.json(pageData.content);
};

module.exports = {loadContent,changeContent,update,deletePageRecord,details,list,create};
