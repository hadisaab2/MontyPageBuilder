const express= require('express');
const {loadAllAssets}=require("./assets.controller")
const assetRoute = express.Router();
assetRoute.get('/', loadAllAssets);


module.exports=assetRoute

