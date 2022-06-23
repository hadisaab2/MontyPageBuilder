import React from 'react'
import HomeModal from "../components/HomeModal";
import HomeSidebar from "../components/HomeSidebar";
import Templates from "../components/Templates";

import "../styles/main.css";

export default function CreatePage() {
  return (
    <>
      <HomeSidebar/>
      <div className="maindiv" id="maindiv">
        <Templates/>
      </div>
      <HomeModal />
    </>  )
}
