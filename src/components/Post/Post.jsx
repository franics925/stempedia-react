import React from 'react';
import style from './Post.module.css';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';

const Post = (props) => (

        <div className={style.Post}>
            <div className={style.Header}>
                <div className={style.HeaderLeft}>
                    <h1>{props.posts[0].title}</h1>
                    <p>{props.posts[0].date}, By: {props.posts[0].userName}</p>
                </div>
                <div className={style.HeaderRight}>
                    <p className={style.upVoteBtn}>Views: {props.posts[0].views}</p>
                    <button className={style.addToFavsBtn}>Add To Favorites</button>
                </div>
            </div>
            <div className={style.Body}>
                <h5>{props.posts[0].description}</h5>
                <p>{props.posts[0].body}</p>
            </div>

            <div className={style.Comments}>
                < Comments 
                    {...props}
                />
            </div>

            <div className={style.CommentForm}>
                <CommentForm
                    {...props}
                />
            </div>
        </div>
);

export default Post;