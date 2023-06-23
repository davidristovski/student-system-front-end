import React from 'react';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const LeftSidebar = ({ children }) => {
  return (
    <Sidebar className="app">
    <Menu>
      <MenuItem>
        <h2>Student System</h2>
      </MenuItem>
      {children}
    </Menu>
  </Sidebar>
  );
};

export default LeftSidebar;