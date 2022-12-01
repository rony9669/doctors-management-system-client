import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButtons from "../../../Components/PrimaryButtons/PrimaryButtons";

const Banner = () => {
  return (
    <div
      className="hero  h-[510px]"
      style={{
        backgroundImage: `url("https://i.postimg.cc/JhQfR583/bg.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt=""
          src={chair}
          className="rounded-lg w-3/2 md:w-1/2  shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButtons>Get Started</PrimaryButtons>
        </div>
      </div>
    </div>
  );
};

export default Banner;
