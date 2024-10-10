import React from "react";
import "../../Styles/HomeStyle.css";
import Breadcrumb from "../Testimonial/Breadcrumb-section";
import Whoweare from "../Home/Whoweare-section";
import Cta from "../Home/Cta-section";
import Testimonial from "../Home/Testimonial-section";

function Testimonialpage() {
  return (
    <>
      <Breadcrumb />
      <Testimonial />
      <Whoweare />
      <Cta />
    </>
  );
}

export default Testimonialpage;
