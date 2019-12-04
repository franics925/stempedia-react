import React from 'react';
import style from './Home.module.css';
import Posts from '../Posts/Posts';

const Home = (props) => {
    return (
        <div className={style.Home}>
            <h1>Home</h1>
            < Posts />
        </div>
    )
}

export default Home;