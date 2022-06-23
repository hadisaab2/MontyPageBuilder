import React from "react";
import "../styles/main.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { HiDocumentAdd } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";


// import { CCarousel, CCarouselItem } from "@coreui/react";
// import "@coreui/coreui/dist/css/coreui.min.css";

export default function () {
  const copylink = () => {
    navigator.clipboard.writeText("www.google.com");
  };
  const CloseModal = () =>{
    var modal = document.getElementById("homemodal");
    var maindiv = document.getElementById("maindiv");
    modal.style.width = '0px';
    maindiv.style.opacity="1"

  }
  return (
    <div className="homemodal" id ="homemodal">
      <div className="modaltitlediv">
        <RiPagesFill size="25px" className="pageicon" />
        <span className="sidebartitle">Template1</span>
        <AiOutlineClose size="16px" className="closeicon" onClick={CloseModal}/>
      </div>
      <div className="backtohomediv">
        <BiArrowBack size="17px" className="backicon" />
        <span className="backtext">Back to Home </span>
      </div>
      <div className="settingsdiv" id ="settingsdiv">
        <div className="settingsnav">
          <span className="settingstext">Settings </span>
        </div>
        <span className="getpagetext">Get Page Link</span>
        <div className="copylinkdiv">
          <input type="text" className="linkinput" value="www.google.com" />
          <FaCopy size="17px" className="copyicon" onClick={copylink} />
        </div>
        <span className="renametext">Rename Page</span>
        <div className="renamediv">
          <input type="text" className="renameinput" value="Template1" />
          <button size="17px" className="renamebutton">
            Rename
          </button>
        </div>
        <span className="actionstext">Actions</span>
        <div className="actionssiv">

          <button size="17px" className="actionsbutton">
            Edit
          </button>
          <button size="17px" className="actionsbutton">
            Delete
          </button>
        </div>
      </div>
{/* 
      <div className="sidebartitlediv">
        <HiDocumentAdd size="30px" className="pageicon" />
        <span className="sidebartitle">CreatePage</span>
      </div>
      <div className="backtohomediv">
        <BiArrowBack size="17px" className="backicon" />
        <span className="backtext">Back to Home </span>
      </div>
      <div className="templatesdiv">
        <span className="templatestext">Templates </span>
        <CCarousel controls className="ccarousel">
          <CCarouselItem>
            <div className="template">Blank Document</div>
          </CCarouselItem>
          <CCarouselItem>
            <div className="template">Template 1</div>
          </CCarouselItem>
          <CCarouselItem>
            <div className="template">Template 2</div>
          </CCarouselItem>
          <CCarouselItem>
            <div className="template">Template 3</div>
          </CCarouselItem>
        </CCarousel>
      </div> */}
    </div>
  );
}
