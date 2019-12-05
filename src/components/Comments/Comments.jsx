import React from 'react';
import style from './Comments.module.css';

const Comments = (props) => (
    <div className={style.Comments}>
        <h3 className={style.Header5}>Comments:</h3>
        <ul className={style.CommentList}>

            <div className={style.Comment}>

                <div className={style.Votes}>
                    <div className={style.UpVotes}>
                        <button className={style.UpVote}>Up</button>
                        <p className={style.Ranking}>4</p>
                        <button className={style.UpVote}>Down</button>
                        
                    </div>
                </div>


                <div className={style.CommentMain}>
                    <h5 className={style.CommentTitle}>Nice post, but light on info</h5>
                    <p className={style.CommentBody}>Can you please explain the use case of pythagorean's theoreom?</p>
                </div>
                <div>
                    <p className={style.Commenter}>By: Greg</p>
                    <p className={style.CommentDate}>December 5, 2019</p>
                </div>
            </div>

        </ul>
    </div>
)

export default Comments;