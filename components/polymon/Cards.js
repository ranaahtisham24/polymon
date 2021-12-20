import React from 'react'
import { Card, Container, Row, Button, Pagination } from 'react-bootstrap'

const Cards = () => {

    const polymonCards = [{
        cardNum: '#001',
        cardImg: '/assets/images/BITIC.svg',
        cardTitle: 'BITIC',
    },
    {
        cardNum: '#002',
        cardImg: '/assets/images/ETHE.svg',
        cardTitle: 'ETHE',
    },
    {
        cardNum: '#003',
        cardImg: '/assets/images/CARDA.svg',
        cardTitle: 'CARDA',
    },
    {
        cardNum: '#004',
        cardImg: '/assets/images/LYGON.svg',
        cardTitle: 'LYGON',
    },
    {
        cardNum: '#005',
        cardImg: '/assets/images/Polycat 3.svg',
        cardTitle: 'CATTY',
    },
    {
        cardNum: '#006',
        cardImg: '/assets/images/Polycat 2.svg',
        cardTitle: 'CARP',
    },
    {
        cardNum: '#007',
        cardImg: '/assets/images/Polycat 1.svg',
        cardTitle: 'PURR',
    },
    {
        cardNum: '#008',
        cardImg: '/assets/images/ANCE.svg',
        cardTitle: 'ANCE',
    }
    ]
    return (
        <Container className='polymon-main-container'>
            <Row style={{ padding: '6rem 1rem', justifyContent: 'center' }}>
                {polymonCards.map((obj, ind) => (
                    <Card style={{ width: '16rem', marginRight: '1rem', marginBottom: '3rem', border: 'none', padding: '0px', borderRadius: '8px' }} key={ind}>
                        <div style={{ margin: '6px', background: 'linear-gradient(to right, #8338EC, #e2a58d)', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                            <Card.Img src={obj.cardImg} />
                        </div>
                        <Card.Body>
                            <Card.Text style={{ color: '#8338EC', fontWeight: '700', fontSize: '18px', marginBottom: '0px' }}>
                                {obj.cardNum}
                            </Card.Text>
                            <Card.Title style={{ fontSize: '28px', fontWeight: 'bold', letterSpacing: '-1px' }}>
                                {obj.cardTitle}
                            </Card.Title>
                            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'stretch' }}>
                                <Button style={{ fontSize: '12px', fontWeight: '500', backgroundColor: '#e2a58d', border: 'none', borderRadius: '20px', padding: '2px 12px' }} variant="primary">LEGENDARY</Button>
                                <Button style={{ fontSize: '12px', fontWeight: '500', backgroundColor: '#8338EC', border: 'none', borderRadius: '20px', padding: '2px 12px', marginLeft: '6px' }} variant="primary">ELECTRIC</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
                
                
                <Pagination style={{ width:'100%',display:'flex', justifyContent:'right', marginRight:'6rem'}}>
                    <Pagination.Prev />
                    <Pagination.Item active={true}>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </Row>

        </Container>
    )
}

export default Cards
