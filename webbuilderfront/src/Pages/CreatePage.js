import React from 'react'
import HomeModal from "../components/SettingsModal";
import HomeSidebar from "../components/HomeSidebar";
import Templates from "../components/Templates";

import "../styles/main.css";
import CreatePageModal from '../components/CreatePageModal';

export default function CreatePage() {
  return (
    <>
      <HomeSidebar/>
      <div className="maindiv" id="maindiv">
        <Templates/>
      </div>
      <CreatePageModal />
    </>  )
}
