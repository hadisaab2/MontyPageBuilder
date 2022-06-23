import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/main.css";
import CreatePage from "./CreatePage";
import Page from "./Page";
import { useSelector, useDispatch } from "react-redux";

export default function PageContainer() {
  const [search,setsearch]=useState("")
  const dispatch = useDispatch();
  const { pageStore } = useSelector((state) => state);
  const { pages } = pageStore;
  const searchhandler=(event)=>{
    setsearch(event.target.value);
  }
  return (
    
    <div class="pagecontainer">
      {/* <div class="pagecontainerheader">
        <input type="text" className="searchpages" onChange={searchhandler} value={search}/>
      </div> */}
      <CreatePage />
      {pages.map((page) => {
        return <Page name={page.name} id={page._id} key={page._id} />;
      })}
    </div>
  );
}
