import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.svg";
import Popup from "./Popup";


const Header = ({ polymon, store, openpack }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Navbar
      className={
        polymon
          ? "polymon-header header"
          : "header" || openpack
          ? "openpack-header header"
          : "header" || store
          ? "store-header header"
          : "header"
      }
    >
      <Navbar.Brand href="#home">
        <Image
          //   loader={myLoader}
          src={logo}
          alt="Picture of the author"
          width={150}
          height={0}
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="headermenu">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/openpack">
            <a>Open Pack</a>
          </Link>
          <Link href="/store">
            <a>Store</a>
          </Link>
          <Link href="/polymon">
            <a>Polymon</a>
          </Link>
          <button className="contact" onClick={() => setModalShow(true)}>Connect</button>
          {/* <Button variant="primary" onClick={() => setModalShow(true)}>
            Connect
          </Button> */}

          <Popup show={modalShow} onHide={() => setModalShow(false)} />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
