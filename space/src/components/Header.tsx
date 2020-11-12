import React from "react";
import "../styles/Header.css";
import "@elastic/eui/dist/eui_theme_light.css";

import { EuiHeader, EuiHeaderLogo, EuiSpacer } from "@elastic/eui";
import { Link } from "react-router-dom";

const Header = () => {
  const position = "static";

  const sections = [
    {
      items: [<EuiHeaderLogo>SPACEX</EuiHeaderLogo>],
    },
  ];

  return (
    <>
      <EuiSpacer />
      <Link to="/">
        <EuiHeader position={position} sections={sections} />
      </Link>
    </>
  );
};

export default Header;
