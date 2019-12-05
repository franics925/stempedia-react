import React from 'react';
import style from './Comments.module.css';

const Comments = (props) => (
    <div className={style.Comments}>
        <ul className={style.CommentList}>

            <div className={style.Comment}>
                <div className={style.CommentDetails}>
                    <div className={style.Votes}>
                        <p className={style.Ranking}>Ranking: 54%</p>
                        <div className={style.UpVotes}>
                            <button className={style.UpVote}>UpVote</button>
                            <p className={style.UpVotes}>Up: 3</p>
                        </div>
                        <div className={style.DownVotes}>
                            <button className={style.UpVote}>DownVote</button>
                            <p className={style.DownVotes}>Down: 2</p>
                        </div>
                    </div>
                    <p className={style.Commenter}>Commenter</p>

                </div>
                <div className={style.CommentMain}>
                    <h3 className={style.CommentTitle}>CommentTitle</h3>
                    <p className={style.CommentBody}>CommentBody</p>
                </div>
            </div>

        </ul>
    </div>
)

export default Comments;