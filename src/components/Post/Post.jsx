import React from 'react';
import style from './Post.module.css';
import CommentForm from '../CommentForm/CommentForm';

const Post = (props) => (

        <div className={style.Post}>
            <div className={style.Header}>
                <button>Up Votes: {props.posts[0].upVotes}</button>
                <h1>{props.posts[0].title}</h1>
            </div>

            <div className={style.Info}>
                <h6>{props.posts[0].userName}</h6>
                <h6>{props.posts[0].date}</h6>

            </div>

            <h3>{props.posts[0].description}</h3>
            <p>{props.posts[0].body}</p>
            
            <div className={style.CommentForm}>
                <CommentForm
                    {...props}
                />
            </div>
        </div>
);

export default Post;