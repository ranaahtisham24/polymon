import React from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import TokenSupply from "../../public/assets/images/product.svg";
import prductlogo from "../../public/assets/images/prductlogo.svg";
import Rangeslider from "./Rangeslider";

const Popup = (props) => {
  return (
    <Modal
      className="popupmodal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <Modal.Header closeButton className="popupcrosbtn"></Modal.Header>
        <div className="popupcontent">
          <div className="popupimg">
            <Image src={TokenSupply} />
          </div>
          <div className="popupDetail">
            <h1>BTITC</h1>
            <p>
              PolyMon is a platform that combines trading, collecting and gaming
              with blockchain technology. We are trying to aim for an ecosystem
              where users can collect, earn and trade NFT’s by farming and
              eventually playing the game.
            </p>
            <Rangeslider />
            <div className="popup-mat">
              <span className="popup-mat-img">
                <Image src={prductlogo} />
              </span>
              <h1>100 MATIC</h1>
            </div>
            <button className="popupBtn">BUY NOW</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Popup;
