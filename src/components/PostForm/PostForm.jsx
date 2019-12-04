import React from 'react';
import style from './PostForm.module.css';

const PostForm = (props) => {
    return(
        <div className={style.PostForm}>
            <form>
                <label className={style.Title}>Title: 
                    <input type="text" name="title" />
                </label>
                <label className={style.Title}>Description: 
                    <input type="text" name="description" />
                </label>
                <label className={style.Title}>Tags: 
                    <input type="text" name="tags" />
                </label>
                <label className={style.Title}>Date: 
                    <input type="date" name="tags" value="today"/>
                </label>


                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default PostForm;
