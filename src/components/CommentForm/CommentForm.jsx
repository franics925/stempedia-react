import React from 'react';
import style from './CommentForm.module.css';

const CommentForm = (props) => (
    <div className={style.CommentForm}>
        <form>
            <div className={style.CommentContent}>
                <h4>Add Comment: </h4>
                <label className={style.CommentTitle}>Comment Title (optional): 
                    <input type="text" name="commentTitle" />
                </label>
                <label className={style.Comment}>Comment: 
                    <input type="text" name="comment" />
                </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    </div>
)

export default CommentForm;