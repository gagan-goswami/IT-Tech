import React from "react";
import "../../Styles/HomeStyle.css";
import Breadcrumb from "../Team/Breadcrumb-section";
import Team from "../Home/Team-section";
import Whoweare from "../Home/Whoweare-section";
import Cta from "../Home/Cta-section";

function Teampage() {
  return (
    <>
      <Breadcrumb />
      <Team />
      <Whoweare />
      <Cta />
    </>
  );
}

export default Teampage;
