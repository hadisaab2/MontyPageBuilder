import React, { useState } from "react";
import "../styles/main.css";
import { MdEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";
// import * as htmlToImage from 'html-to-image';
// import {toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


export default function Page(props) {
  const [hover, sethover] = useState(false);
  let history = useHistory();

  const EditPage = ()=>{
    history.push(`/editor/${props.id}`);

  }
  const divhoverenter = () => {
    sethover(true);
  };
  const divhoverleave = () => {
    sethover(false);
  };
  const ModalView = () => {
    document.getElementById("homemodal").style.width = "300px";
    document.getElementById("maindiv").style.opacity = "0.2";

    // console.log(document.getElementById("homemodal"));

  }
  return (
    <div className="pagediv" onMouseEnter={divhoverenter} onMouseLeave={divhoverleave} onClick={ModalView}>
      {hover ? (
        <div className="pagecircle" onClick={EditPage}>
          <MdEdit className="editicon" size={"50px"} />
        </div>
      ) : (
        <></>
      )}
      {hover ? <span className="editpagetext">{props.name}</span> : null}
    </div>
  );
}
