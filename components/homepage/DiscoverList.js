import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import BITIC from "../../public/assets/images/BITIC.svg";
import logo from "../../public/assets/images/logo.svg";

const DiscoverList = () => {
  return (
    <div className="DiscoverList">
      <CardGroup>
        <Card className="DiscoverCard" style={{ width: "12rem" }}>
          <Image src={BITIC} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="DiscoverCard" style={{ width: "12rem" }}>
          <Image src={BITIC} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="DiscoverCard" style={{ width: "12rem" }}>
          <Image src={BITIC} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default DiscoverList;
