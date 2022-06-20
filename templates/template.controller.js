const {  
    createPage,
    listtemplates,
  } = require('./template.services')
  
   const createpage = async (req, res) => {
    const pageBody = req.body;
    const page = await createPage(pageBody);
    res.json(page);
  };
   const getalltemplate = async (req, res) => {
    const templates = await listtemplates();
    res.json(templates);
  };

  
  module.exports = {createpage,getalltemplate};
  