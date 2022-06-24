const nodeHtmlToImage = require("node-html-to-image");
const uuidv1 = require("uuid");
const Pages = require("./page.modal");
const fs = require("fs");
var crypto = require("crypto");


const createPage = async (pageBody) => {
  //console.log("pageBody", pageBody);
  const slug = pageBody.name.toLowerCase().split(" ").join("-");
  pageBody.slug = slug;
  const PageImgID = html_to_blank_page();
  //console.log("pageImageid", PageImgID);
  pageBody.Background_URL =
    "http://localhost:8080/BackgroundImg/" + PageImgID + ".jpeg";
  const page = await Pages.create(pageBody);
  const pageResponse = page.save();
  return pageResponse;
};
const html_to_blank_page = () => {
  var PageImgID = uuidv1.v1();
  nodeHtmlToImage({
    output: "./public/BackgroundImg/" + PageImgID + ".jpeg",
    html: `<html>
      <head>
        <style>
          body {
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body></body>
    </html>
    `,
  }).then(() => console.log("The Blank Image was created successfully!"));
  return PageImgID;
};
const html_to_image = (GiveBackUUID, Content_HTML, Content_CSS) => {
  nodeHtmlToImage({
    output: "./public/BackgroundImg/" + GiveBackUUID + ".jpeg",
    html: `<html>
    <head>
      <style>
      ${Content_CSS}
      </style>
    </head>
    <body>${Content_HTML}</body>
  </html>
  `,
  }).then(() => console.log("html to image was updated successfully!"));
};
const listPages = async () => {
  const pages = await Pages.find({});
  return pages;
};
const deletePage = async (pageId) => {};
const updatePage = async (pageId, pageBody) => {};
const pageDetails = async (pageId) => {
  const pages = await Pages.findOne({ _id: pageId });
  return pages;
};

// here
const savePageContent = async (pageId, content) => {
  const pageUpdated = await Pages.findOneAndUpdate(
    { _id: pageId },
    { content }
  );
  return pageUpdated;
};

const decodeBase64Image = async (pageContent) => {
  //const salt = await bcrypt.genSalt(10);

  var Regex_Base46 = /src="([^"]*)"/g;
  //var RegexBase46_FileType = /[^"]*image\/([^;]*);base64,[^"]*/g;
  var Macth_Regex_Base46,
    Array_Macth_Regex_Base46 = [];
  // var Match_RegexBase46_FileType,
  //   ArrayOfFileTypes = [];

  while (
    (Macth_Regex_Base46 = Regex_Base46.exec(pageContent["mycustom-html"]))
  ) {
    Array_Macth_Regex_Base46.push(Macth_Regex_Base46[1]);
  }

  try {
    for (var i = 0; i < Array_Macth_Regex_Base46.length; i++) {
      var body = Array_Macth_Regex_Base46[i];
      if (body.includes("png") || body.includes("jiff")|| body.includes("jpg")|| body.includes("jpeg")) {
        var filetype;
        if (body.includes("png")) {
          base64Data = body.replace(/^data:image\/png;base64,/, "");
          filetype = "png";
        } else if (body.includes("jiff")) {
          base64Data = body.replace(/^data:image\/jiff;base64,/, "");
          filetype = "jiff";
        } else if (body.includes("jpg")) {
          base64Data = body.replace(/^data:image\/jpg;base64,/, "");
          filetype = "jpg";
        } else {
          base64Data = body.replace(/^data:image\/jpeg;base64,/, "");
          filetype = "jpeg";
        }
        // binaryData = Buffer.from(base64Data, "base64").toString("binary");
        uid = crypto.createHash("md5").update(body).digest("hex");

        let fileName = uid + "." + filetype;
        filePath = "./public/images/" + fileName;
        try {
          fs.writeFile(filePath, base64Data, "base64", function (err, data) {
            if (err) {
              console.log("err", err);
            }
          });
        } catch (error) {
          console.log("ERROR:", error);
        }
        pageContent["mycustom-html"] = pageContent["mycustom-html"].replace(
          body,
          "http://localhost:8080/images/" + fileName
        );
        pageContent["mycustom-components"] = pageContent[
          "mycustom-components"
        ].replace(body, "http://localhost:8080/images/" + fileName);
      }
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return pageContent;
};

const findPageById = async (pageId) => {
  const page = await Pages.findById(pageId);
  return page;
};

module.exports = {
  findPageById,
  savePageContent,
  pageDetails,
  updatePage,
  deletePage,
  listPages,
  createPage,
  decodeBase64Image,
  html_to_image,
};
