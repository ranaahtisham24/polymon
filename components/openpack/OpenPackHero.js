import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import packImg from '../../public/assets/images/OpenpackRImg2.svg'

const OpenPackHero = () => {
    return (
        <Container fluid={'true'} style={{ paddingLeft: '8rem' }}>
            <Row className='openpakrow m-0'>
                <Col className='openpack-hero-left' md={7}>
                    <h1>COLLECT, TRADE AND PLAY YOUR POLYMON</h1>
                    <Button size='lg'>BUY BOOSTER PACK</Button>
                </Col>
                <Col className='openpack-hero-right' md={5}>
                    <div>
                        <div className='innerimage'>
                            <Image
                                src={packImg}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OpenPackHero
