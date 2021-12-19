import React from 'react'
import Header from '../components/header/Header'
import OpenPackHero from '../components/openpack/OpenPackHero'

const openpack = () => {
    return (
        <div className='openpack-wrapper'>
            <Header/>
            <OpenPackHero/>
        </div>
    )
}

export default openpack
