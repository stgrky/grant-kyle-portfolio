import React from 'react';
import HeaderComponent from '../Header';
import HomeBody from '../HomeBody';
import "./style.scss"


const Home = props => {
    return (
        <div>
            <HeaderComponent/>
            <HomeBody/>
        </div>
    )
}

export default Home
