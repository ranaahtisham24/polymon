import React from "react";
import Header from "../header/Header";
import BastsetList from "./BastsetList";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="homeheader">
          <Header />
        </div>
        <div className="bannercontent">
          <h1>COLLECT, TRADE AND PLAY YOUR POLYMON</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </p>
          <button className="bannerbutton">Discover</button>
        </div>
      </div>
      <div className="mainbast-wrapper">
        <div className="bastset">
          <h1> BASE SET</h1>
          <p>
            Polymon exist in many shapes and forms, each differing in unique
            looks and <br /> rarity. Ranging from the most common, to the rarest!
          </p>
        </div>
        <div className="BastsetList-wrapper">
          <BastsetList />
        </div>
      </div>
    </>
  );
};

export default Banner;
