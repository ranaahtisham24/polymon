import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import packImg from '../../public/assets/images/OpenpackRImg2.svg'
// import packImgBg from '../../public/assets/images/OpenpackheroRImg.svg'

const OpenPackHero = () => {
    return (
        <Container style={{padding:'0 auto', margin:'0 auto'}}>
            <Row>
                <Col className='openpack-hero-left'>
                    <h1>COLLECT, TRADE AND PLAY YOUR POLYMON</h1>
                    <Button size='lg'>BUY BOOSTER PACK</Button>
                </Col>
                <Col className='openpack-hero-right'>
                    <div>
                        <Image
                            src={packImg}
                        ></Image>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OpenPackHero
