import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../header/Header'


const Banner = () => {
    
    return (
        <div>
            <div className='polymonpage-header'>
                <Header polymon={true} />
                <Container>
                    <h1>POLYMON</h1>
                </Container>
            </div>
        </div>
    )
}

export default Banner
