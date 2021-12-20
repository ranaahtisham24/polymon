import Image from "next/image";
import React from "react";
import Footer from "../components/footer/Footer";
import Banner from "../components/homepage/Banner";
import DiscoverList from "../components/homepage/DiscoverList";
import RoadMap from "../components/homepage/RoadMap";
import TokenSupply from "../public/assets/images/tokennnomics.svg";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="POLYMON">
        <div className="POLYMON-content">
          <h1>WHAT IS POLYMON?</h1>
          <p>
            PolyMon is a platform that combines trading, collecting and gaming
            with blockchain technology. We are trying to aim for an ecosystem
            where users can collect, earn and trade NFT’s by farming and
            eventually playing the game.
          </p>
        </div>
      </div>
      <div className="Discover">
        <h1>Discover the Polyverse!</h1>
        <p>
          Polymon exist in many shapes and forms, each differing in unique looks
          and rarity. Ranging from the most common, to the rarest
        </p>
        <DiscoverList />
      </div>
      <RoadMap />
      <div className="TokenSupply">
        <h1>TOKEN SUPPLY: 10,000,000</h1>
        <h4>PolyMon Tokennomics</h4>
        <div className="TokenSupplyImg">
          <Image src={TokenSupply} />
        </div>
      </div>
      <div className="emailMarkting">
        <div className="emailMarktingform">
          <p>Do you want to get updated about the upcoming Public Sale?</p>
          <h1>SIGN UP! YOU CAN UNSUBSCRIBE ANYTIME.</h1>
          <div className="emailMarktingforminput">
            <input placeholder="Enter your email address SEND" />
            <button>SEND</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
