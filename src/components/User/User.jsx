import React from 'react';
// import { Link } from 'react-router-dom';
import style from './User.module.css';

const User = (props) => {

    return (
        <div className={style.User}>
            <h3>{props.user[0].name}</h3>
            <p>{props.user[0].description}</p><ln/>
            <div className={style.UserLists}>
                <h7>Search History: </h7>
                <h7>Your Posts: </h7> 
                <h7>Your Favorites: </h7> 
            </div>
            <button className={style.NewPostButton}>
                <a href="/newpost" className={style.NewPostLink}>New Post</a>
            </button>
            {/* <h5>Post0 desc: </h5><p>{props.posts[0].description}</p> */}
            {/* <h1>{props.user.map((user, idx) =>
                <div>{this.user.name}</div>
            )}</h1> */}
        </div>
    );
    };


export default User;