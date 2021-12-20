import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, Badge } from "react-bootstrap";



const DiscoverList = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true
  };
  const storeCards = [
    {
      cardImg: '/assets/images/BITIC.svg',
      cardTitle: "ANCE",
      logo: "/assets/images/prductlogo.svg",
      logoTitle: "Ance created by BSC. A man bred PolyMon.",
    },
    {
      cardImg: '/assets/images/ETHE.svg',
      cardTitle: "BITIC",
      logo: "/assets/images/prductlogo.svg",
      logoTitle: "Ance created by BSC. A man bred PolyMon.",
    },
    {
      cardImg: '/assets/images/CARDA.svg',
      cardTitle: "ETHE",
      logo: "/assets/images/prductlogo.svg",
      logoTitle: "Ance created by BSC. A man bred PolyMon.",
    },
    {
      cardImg: '/assets/images/LYGON.svg',
      cardTitle: "ANCE",
      logo: "/assets/images/prductlogo.svg",
      logoTitle: "Ance created by BSC. A man bred PolyMon.",
    },
    {
      cardImg: '/assets/images/Polycat 3.svg',
      cardTitle: "ANCE",
      logo: "/assets/images/prductlogo.svg",
      logoTitle: "Ance created by BSC. A man bred PolyMon.",
    },
    {
      cardImg: '/assets/images/Polycat 2.svg',
      cardTitle: "BITIC",
      logo: "/assets/images/prductlogo.svg",
      logoTitle: "Ance created by BSC. A man bred PolyMon.",
    },
    {
      cardImg: '/assets/images/Polycat 1.svg',
      cardTitle: "ETHE",
      logo: "/assets/images/prductlogo.svg",
      logoTitle: "Ance created by BSC. A man bred PolyMon.",
    },
    {
      cardImg: '/assets/images/ANCE.svg',
      cardTitle: "ANCE",
      logo: "/assets/images/prductlogo.svg",
      logoTitle: "Ance created by BSC. A man bred PolyMon.",
    }
  ];
  return (
    <div className="DiscoverList">
      <div className="inner-DiscoverList-wrapper">
        <Slider {...settings} className="DiscoverList-slider">
          {storeCards.map((obj, ind) => (
            <div className="bestSliderItem">
              <Card
                style={{
                  width: "95%",
                  //   marginRight: "1rem",
                  marginBottom: "3rem",
                  padding: "0px",
                  border: "none",
                  margin: "0 auto",
                }}
                key={ind}
              >
                <div style={{ margin: '6px', background: 'linear-gradient(to right, #8338EC, #e2a58d)', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', height: '200px' }}>
                  <Card.Img style={{height: '100%', width: '100%'}} src={obj.cardImg} />
                </div>
                <Card.Body style={{ padding: "10px" }}>
                  <Card.Title
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "0px",
                      padding: "0 6px",
                    }}
                  >
                    <h4 style={{ fontWeight: "700", letterSpacing: "-1px" }}>
                      {obj.cardTitle}
                    </h4>
                  </Card.Title>
                  <Card.Text
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      fontWeight: "500",
                      color: "#8338EC",
                      marginBottom: "8px",
                      padding: "0 6px",
                      textAlign: "left"
                    }}
                  >
                    {obj.logoTitle}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DiscoverList;
