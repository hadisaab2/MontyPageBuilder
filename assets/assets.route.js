const express= require('express');
const {loadAllAssets}=require("./assets.controller")
<<<<<<< HEAD

=======
>>>>>>> 2135a5ae2e74dbc90a70792442430684dba55fac
const assetRoute = express.Router();
assetRoute.get('/', loadAllAssets);


module.exports=assetRoute

