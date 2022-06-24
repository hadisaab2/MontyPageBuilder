const express =require('express');
const {  
  getalltemplate,
  createpage,
} = require('./template.controller.js');


const templateRoute = express.Router();
templateRoute.post('/createpage', createpage);
templateRoute.get('/getalltemplates', getalltemplate);

module.exports = templateRoute;
