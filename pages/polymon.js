import React from 'react'
import Banner from '../components/polymon/Banner'
import Cards from '../components/polymon/Cards'
import RelatedPost from '../components/polymon/RelatedPost'
import Footer from '../components/footer/Footer'

const polymon = () => {
    return (
        <div style={{backgroundColor:'rgb(242, 232, 255)'}}>
            <Banner/>
            <Cards/>
            <RelatedPost/>
            <Footer/>
        </div>
    )
}

export default polymon
