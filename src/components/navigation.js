import React from 'react';
import PageLinks from "../constants/links";
import { Link } from "gatsby";
import logo from "../../static/assets/logo.png";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <img className="p-6 mb-5 mx-auto" src={logo} width="270" alt="TheGuardian" />
      </Link>
      <PageLinks />
    </nav>
  )
}

export default Navigation;
