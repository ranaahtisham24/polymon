import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.svg";

const Header = () => {
  return (
    <Navbar className="header">
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
          <Link href="/">
            <a>Open Pack</a>
          </Link>
          <Link href="/">
            <a>Store</a>
          </Link>
          <Link href="/">
            <a>Polymon</a>
          </Link>
          <button className="contact">Connect</button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
