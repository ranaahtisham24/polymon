import Image from "next/image";
import React from "react";
import monkey from "../../public/assets/images/monkey.svg";
import turtle from "../../public/assets/images/turtle.svg";
import dog from "../../public/assets/images/dog.svg";

const RoadMap = () => {
  const img = 'https://public/assets/images'
  return (
    <div className="RoadMap-Wrapper">
      <h1 className="roadmapheadeing">ROADMAP</h1>
      <div className="RoadMap-cards">
        <div className="RoadMap-leftcard FLcard">
          <div className="RoadMap-img">
            <Image src={dog} />
          </div>
          <div className="RoadMap-card-contect">
            <h4>ALPHA</h4>
            <p>Website launch</p>
            <p>Token Private Sale</p>
            <p>Token Public Sale</p>
            <p>Strategic Partnerships</p>
          </div>
        </div>
        <div className="RoadMap-rightcard FRcard">
          <div className="RoadMap-img">
            <Image src={turtle} />
          </div>
          <div className="RoadMap-card-contect">
            <h4>BETA</h4>
            <p>NFT Utility</p>
            <p>NFT Farms</p>
          </div>
        </div>
        <div className="RoadMap-leftcard">
          <div className="RoadMap-img">
            <Image src={monkey} />
          </div>
          <div className="RoadMap-card-contect">
            <h4>GAMMA</h4>
            <p>NFT Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
