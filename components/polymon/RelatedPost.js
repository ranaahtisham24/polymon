import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

const RelatedPost = () => {

    const relatedPost = [
        {
            cardImg: '/assets/images/ANCE.svg',
            cardTitle: 'MEMORABLE MOMENTS FROM NEW POLYMON SNAP',
            cardDate:'JUNE 09, 2021',
            cardDescription:'Use the Advanced search to explore PolyMon by type, weakness, Ability and more!'
        },
        {
            cardImg: '/assets/images/ANCE.svg',
            cardTitle: 'MEMORABLE MOMENTS FROM NEW POLYMON SNAP',
            cardDate:'JUNE 09, 2021',
            cardDescription:'Use the Advanced search to explore PolyMon by type, weakness, Ability and more!'
        },
        {
            cardImg: '/assets/images/ANCE.svg',
            cardTitle: 'MEMORABLE MOMENTS FROM NEW POLYMON SNAP',
            cardDate:'JUNE 09, 2021',
            cardDescription:'Use the Advanced search to explore PolyMon by type, weakness, Ability and more!'
        }
    ]
    return (
        <div style={{backgroundColor:'rgb(247, 242, 254)'}}>
            <Container style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'6rem 1rem'}}>
                <h1 style={{marginBottom:'2rem', fontWeight:'700', color:'rgb(30, 41, 71)'}}>RELATED POSTS</h1>
                <Row style={{justifyContent:'center', alignItems:'center'}}>
                {relatedPost.map((obj, ind)=>(
                    <Card style={{ width:'20rem', marginRight: '1rem', marginBottom: '3rem', padding: '0px', border: 'none', borderRadius: '8px' }} key={ind}>
                    <div style={{ margin: '6px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', background:'linear-gradient(to right, #8338EC, #e2a58d)', height:'12rem', width:'19.3rem' }}>
                        <Card.Img style={{width:'100%', height:'100%'}} src={obj.cardImg} />
                    </div>
                    <Card.Body style={{display:'flex', flexDirection:'column', textAlign:'left'}}>  
                        <Card.Text style={{ fontWeight: '700', color: 'rgb(227, 166, 142)', fontSize:'14px'}}>
                            {obj.cardDate}
                        </Card.Text>
                        <Card.Title style={{color:'rgb(30, 41, 71)',fontWeight: '900' }}>
                            {obj.cardTitle}
                        </Card.Title>
                        <Card.Text style={{color:'rgb(134, 72, 229)', fontWeight: '500', fontSize:'14px'}}>{obj.cardDescription}</Card.Text>
                    </Card.Body>
                </Card>
                ))}
                </Row>
            </Container>
        </div>
    )
}

export default RelatedPost
