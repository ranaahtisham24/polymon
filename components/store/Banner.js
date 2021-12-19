import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../header/Header'

const Banner = () => {
    return (
        <div>
            <div className='store-banner'>
                <Header/>
                <Container>
                <h1>STORE</h1>
                </Container>
            </div>
        </div>
    )
}

export default Banner
