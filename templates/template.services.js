const Templates=require('./template.modal')
const Pages=require('../pages/page.modal')


 const createPage = async (pageBody) => {
  const slug = pageBody.name.toLowerCase().split(' ').join('-');
  pageBody.slug = slug;
  const page = await Pages.create(pageBody);
  const pageResponse = page.save();
  return pageResponse;
};
 const listtemplates = async () => {
  const templates = await Templates.find({});
  return templates;
};


module.exports = {listtemplates,createPage};
