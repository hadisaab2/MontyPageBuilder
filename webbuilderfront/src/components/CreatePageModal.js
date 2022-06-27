import React,{useState} from "react";
import "../styles/main.css";
import { BiArrowBack } from "react-icons/bi";
import { RiPagesFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { createPage } from "../redux/actions/pageAction";
import { useSelector, useDispatch } from "react-redux";



export default function CreatePageModal() {
    const [pagename,setpagename]=useState("");
    const dispatch = useDispatch();

    const OnPageNameChange = (event) =>{
        setpagename(event.target.value);
    }
  const CloseModal = () => {
    var modal = document.getElementById("createpagemodal");
    var maindiv = document.getElementById("maindiv");
    modal.style.width = "0px";
    maindiv.style.opacity = "1";
  };
  const CreatePageHandler = async () => {
    const page=createPage(pagename)(dispatch);
    console.log(page)
    var modal = document.getElementById("createpagemodal");
    var maindiv = document.getElementById("maindiv");
    modal.style.width = "0px";
    maindiv.style.opacity = "1";

  };
  return (
    <div className="createpagemodal" id="createpagemodal">
      <div className="modaltitlediv">
        <IoIosAddCircle size="30px" className="pageicon" />
        <span className="sidebartitle">Create Page</span>
        <AiOutlineClose
          size="16px"
          className="closeicon"
          onClick={CloseModal}
        />
      </div>
      <div className="inputnamediv">
        <input type="text" className="pagenameinput" value={pagename} onChange={OnPageNameChange} placeholder="Enter Page Name " />
        <button  className="createpagebutton" onClick={CreatePageHandler} >Create</button>
      </div>
    </div>
  );
}
