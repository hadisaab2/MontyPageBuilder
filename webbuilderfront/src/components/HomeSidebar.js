import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

export default function HomeSidebar() {
  return (
    <ProSidebar className="homesidebar">
      <SidebarHeader style={{ height: "20%" }}>
        <span>Monty WebBuilder</span>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<MdEdit />}>
            Templates <Link to="/CreatePage" />
          </MenuItem>
          <MenuItem icon={<MdEdit />} href="/Pages">
            User Pages <Link to="/Pages" />
          </MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ height: "10%" }}>
        <span>Logout</span>
      </SidebarFooter>
    </ProSidebar>
  );
}
