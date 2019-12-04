import React from 'react';
import style from './PostForm.module.css';

const PostForm = (props) => {
    return(
        <div className={style.PostForm}>
            <form>
                <label className={style.Title}>Title: 
                    <input type="text" name="title" />
                </label>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default PostForm;
