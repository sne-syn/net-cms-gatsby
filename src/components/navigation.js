import React from 'react';
import PageLinks from "../constants/links";
import { Link } from "gatsby";
import logo from "../../static/assets/logo.png";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <img className="p-4 mx-auto" src={logo} width="170" alt="TheGuardian" />
      </Link>
      <PageLinks />
    </nav>
  )
}

export default Navigation;
