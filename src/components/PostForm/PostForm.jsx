import React from 'react';
import style from './PostForm.module.css';
import Form from 'react-bootstrap/Form';
// import styled from 'styled-components';

// const PostFormOne = props => {
//     return(
//         <Form>

//         </Form>
//     )
// }

const PostForm = (props) => {
    return(
        <div className={style.PostForm}>
            <h1>What's on your mind?</h1>
            <Form>
                <label className={style.Title}>Title: 
                    <input type="text" name="title" />
                </label>
                <lavel classNAme={style.Category}>Category:
                    <input type="dropdown" name="Category" />          
                </lavel>
                <label className={style.Summary}>Summary: 
                    <input type="text" name="summary" />
                </label>
                <label className={style.Description}>Description: 
                    <input type="text" name="description" />
                </label>
                <label className={style.Tags}>Tags: 
                    <input type="text" name="tags" />
                </label>
                <input type="submit" value="Submit" className={style.SubmitButton}/>
            </Form>
        </div>
    );
};

export default PostForm;
