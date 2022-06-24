//
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// import path from 'path';
const pageRoute = require("./pages/page.route");
const templateRoute = require("./templates/templates.route");
const assetRoute = require("./assets/assets.route");

// import projectRoute from './project/project.route';
// import renderHtml from './render/render.controller';
//Initialize App
const app = express();
// app.use(express.json());

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
// app.use(express.json({limit: '100mb'}));
// app.use(express.urlencoded({limit: '100mb'}));

corsOptions.credentials = true;
app.use(cors(corsOptions));
// //HTML and Static file
// app.use('/resources', express.static(path.join(__dirname, 'public')));
// app.set('views', `views`);
// app.set('view engine', 'hbs');

const mongoUri =
  "mongodb+srv://MontyWebBuilder:webbuildermonty@cluster0.vjci7.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(
  mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);
// app.use('/api/projects', projectRoute);
app.use("/api/pages", pageRoute);
app.use("/api/assets", assetRoute);
app.use("/api/templates", templateRoute);

app.use(express.static('public')); 
app.use('/images', express.static('images'));

// app.use('/api/', uiRoute);
// app.get('/:pageId?', renderHtml);

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
