import React from "react";
import logoImg from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/'>
      {" "}
      <img className="hidden md:block" src={logoImg} alt="logo" width="100" height="100" />
    </Link>
  );
};

export default Logo;
