import React from 'react'
import Banner from '../components/store/Banner'
import Cards from '../components/store/Cards'
import Footer from '../components/footer/Footer'


const store = () => {
    return (
        <div style={{backgroundColor:'rgb(242, 232, 255)'}}>
            <Banner/>
            <Cards/>
            <Footer />
        </div>
    )
}

export default store
