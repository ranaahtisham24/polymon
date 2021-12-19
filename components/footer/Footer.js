import React from "react";
import logo from "../../public/assets/images/logo.svg";
import twitter from "../../public/assets/images/Footertwitter.svg";
import footerM from "../../public/assets/images/footerM.svg";
import footerDsvg from "../../public/assets/images/footerDsvg.svg";
import Link from "next/link";
import Image from "next/image";
import { Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercont">
        <Col className="footercopyright">
          <p>© 2021 POLYMON. ALL RIGHTS RESERVED.</p>
        </Col>
        <Col  className="footerlogo">
          <Image
            src={logo}
            alt="Picture of the author"
            width={150}
            height={0}
          />
        </Col>
        <Col className="footersocial">
          <Image src={twitter} />
          <Image src={footerDsvg} />
          <Image src={footerM} />
        </Col>
      </div>
    </div>
  );
};

export default Footer;
