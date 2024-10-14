import React from "react";
import "../../Styles/HomeStyle.css";
import Breadcrumb from "../Service/Breadcrumb-section";
import Service from "../Home/Service-section";
import Team from "../Home/Team-section";
import Cta from "../Home/Cta-section";
import Whoweare from "../Home/Whoweare-section";

function AboutPage() {
  return (
    <>
      <Breadcrumb />
      <Service />
      <Whoweare />
      <Team />
      <Cta />
    </>
  );
}

export default AboutPage;
