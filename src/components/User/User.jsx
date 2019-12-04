import React from 'react';
// import { Link } from 'react-router-dom';
import style from './User.module.css';

const User = (props) => {

    return (
        <div className={style.User}>
            <h3>{props.user.name}</h3>
            <h5>{props.user.email}</h5>
            <h5>{props.user.description}</h5><br/>
            <h5>Search History: {props.user.searchHistory[0].name}</h5>
            <h5>Favorites: {props.user.favorites[1].name}</h5>
            <h5>Post0 desc: {props.posts[0].description}</h5>
            {/* <h1>{props.user.map((user, idx) =>
                <div>{this.user.name}</div>
            )}</h1> */}
        </div>
    );
    };


export default User;