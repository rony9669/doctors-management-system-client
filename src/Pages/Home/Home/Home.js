import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import ExtraCare from "./ExtraCare/ExtraCare";
import MakeAppointMent from "./MakeAppointMent/MakeAppointMent";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <ExtraCare></ExtraCare>
      <MakeAppointMent></MakeAppointMent>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
