import React from 'react'
import { Button, Card, Container,Row, Badge } from 'react-bootstrap'

const Cards = () => {

    const storeCards = [{
        cardImg: '/assets/images/Base set Ance.svg',
        cardTitle: 'ANCE',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    },
    {
        cardImg: '/assets/images/product.svg',
        cardTitle: 'BITIC',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    },
    {
        cardImg: '/assets/images/product.svg',
        cardTitle: 'ETHE',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    },
    {
        cardImg: '/assets/images/Base set Ance.svg',
        cardTitle: 'ANCE',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    },
    {
        cardImg: '/assets/images/Base set Ance.svg',
        cardTitle: 'ANCE',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    },
    {
        cardImg: '/assets/images/product.svg',
        cardTitle: 'BITIC',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    },
    {
        cardImg: '/assets/images/product.svg',
        cardTitle: 'ETHE',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    },
    {
        cardImg: '/assets/images/Base set Ance.svg',
        cardTitle: 'ANCE',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    }, {
        cardImg: '/assets/images/Base set Ance.svg',
        cardTitle: 'ANCE',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    },
    {
        cardImg: '/assets/images/product.svg',
        cardTitle: 'BITIC',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    },
    {
        cardImg: '/assets/images/product.svg',
        cardTitle: 'ETHE',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    },
    {
        cardImg: '/assets/images/Base set Ance.svg',
        cardTitle: 'ANCE',
        logo: '/assets/images/prductlogo.svg',
        logoTitle: '100 MATIC'
    }
    ]
    return (
        <Container>
            <Row style={{ padding: '6rem 1rem', justifyContent:'center'}}>
                {storeCards.map((obj, ind) => (
                    <Card style={{width:'15rem', marginRight:'1rem', marginBottom:'3rem', padding:'0px', border:'none',borderRadius:'8px'}} key={ind}>
                        <div style={{margin:'6px', borderTopLeftRadius:'8px', borderTopRightRadius:'8px' }}>
                        <Card.Img src={obj.cardImg} />
                        </div>
                        <Card.Body style={{ padding:'10px'}}>
                            <Card.Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',margin:'0px',padding:'0 6px' }}>
                                <h4 style={{ fontWeight: '700', letterSpacing:'-1px' }}>{obj.cardTitle}</h4>
                                <Badge pill className="available-btn">Available</Badge>
                            </Card.Title>
                            <Card.Text style={{ display: 'flex', alignItems: 'center', fontWeight: '500', color: '#8338EC', marginBottom:'8px', padding:'0 6px' }}>
                                <img src={obj.logo} style={{marginRight:'2px'}} />
                                {obj.logoTitle}
                            </Card.Text>
                            <Button style={{ width: '100%', fontWeight: '500', backgroundColor: '#8338EC', border:'none' }} variant="primary">BUY NOW</Button>
                        </Card.Body>
                    </Card>
                ))}

            </Row>
        </Container>
    )
}

export default Cards
