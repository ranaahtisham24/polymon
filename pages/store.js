import React from 'react'
import Banner from '../components/store/Banner'
import Cards from '../components/store/Cards'
import Header from '../components/header/Header'

const store = () => {
    return (
        <div style={{backgroundColor:'whitesmoke'}}>
            {/* <Header/> */}
            <Banner/>
            <Cards/>
        </div>
    )
}

export default store
