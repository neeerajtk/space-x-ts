import ReactDOM from "react-dom";
import "../styles/Header.css";
// import '@elastic/eui/dist/eui_theme_dark.css';
import "@elastic/eui/dist/eui_theme_light.css";
import React, { useState } from "react";

import { EuiHeader, EuiHeaderLogo, EuiSwitch, EuiSpacer } from "@elastic/eui";
import { Link } from "react-router-dom";

const Header = () => {
  const position = "static";
  //   const [position, setPosition]= useState<String>('static');

  const sections = [
    {
      items: [<EuiHeaderLogo>SPACEX</EuiHeaderLogo>],
    },
  ];

  return (
    <>
      {/* <EuiSwitch
        label={'Make header fixed position'}
        checked={position === 'fixed'}
        onChange={(e) => setPosition(e.target.checked ? 'fixed' : 'static')}
      /> */}
      <EuiSpacer />
      <Link to="/">
        <EuiHeader position={position} sections={sections} />
      </Link>
    </>
  );
};

export default Header;
