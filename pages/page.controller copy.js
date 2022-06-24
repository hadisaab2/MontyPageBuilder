const {
  createPage,
  deletePage,
  listPages,
  pageDetails,
  savePageContent,
  updatePage,
} = require("./page.services");
const fs = require("fs");
const { v1: uuidv1} = require("uuid");
const decode = require("node-base64-image").decode;
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

// Save base64 image to disk

function decodeBase64Image(pageContent) {

  var Regex_Base46 = /src="([^"]*)"/g;
  var RegexBase46_FileType = /[^"]*image\/([^;]*);base64,[^"]*/g;
  var Macth_Regex_Base46,
    Array_Macth_Regex_Base46 = [];
  var Match_RegexBase46_FileType,
    ArrayOfFileTypes = [];

  while (
    (Macth_Regex_Base46 = Regex_Base46.exec(
      pageContent["mycustom-html"]
    ))
  ) {
    Array_Macth_Regex_Base46.push(Macth_Regex_Base46[1]);
  }
  try {
    for (var i = 0; i < Array_Macth_Regex_Base46.length; i++) {
      var body = Array_Macth_Regex_Base46[i];
      console.log("body ", body);
      if (body.includes("png")) {
        base64Data = body.replace(/^data:image\/png;base64,/, "");
        console.log("1st if png ",);
      } else {
        base64Data = body.replace(/^data:image\/jpeg;base64,/, "");
        console.log("2nd  if jpeg ",body);
      }
      binaryData = Buffer.from(base64Data, "base64").toString("binary");
      while ((Match_RegexBase46_FileType = RegexBase46_FileType.exec(body))) {
        ArrayOfFileTypes.push(Match_RegexBase46_FileType[1]);
      }
      console.log(ArrayOfFileTypes);
      console.log("----------------hi----------------");
      for (var j = 0; j < ArrayOfFileTypes.length; j++) {
        var uuid = uuidv1();
        console.log("each one", ArrayOfFileTypes[j]);
        let fileName = uuid + "." + ArrayOfFileTypes[j];
        console.log("fileName", fileName);
        filePath = "./public/images/" + fileName;
        
        try {
          fs.writeFileSync(filePath, binaryData,
          {encoding: "base64"},
            function (err, data) {
              if (err) {
                console.log("err", err);
              }
              console.log(data, "data");
            }
          );
        } catch (error) {
          console.log("ERROR:", error);
        }

      }
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return pageContent;
}

const changeContent = async (req, res) => {
  const { pageId } = req.params;
  console.log("byeee ");
  pageContent = decodeBase64Image(req.body);
  const pageResponse = await savePageContent(pageId, pageContent);
  console.log("pageResponse", pageResponse.content['mycustom-html']);
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
