import React from "react";
import { PageHeader } from "antd";

const Header = (props) => {
  return <PageHeader className="site-page-header" title={props.title} />;
};

export default Header;
