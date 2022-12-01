import React from "react";
import treatment from "../../../../assets/images/treatment.png";
import PrimaryButtons from "../../../../Components/PrimaryButtons/PrimaryButtons";

const ExtraCare = () => {
  return (
    <div className="hero mt-8 ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt=""
          src={treatment}
          className="max-w-sm md:ml-10 rounded-lg shadow-2xl"
        />
        <div className=" pl-5">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButtons>Get Started</PrimaryButtons>
        </div>
      </div>
    </div>
  );
};

export default ExtraCare;
