import React from 'react';
// import { Link } from 'react-router-dom';
import style from './SideBar.module.css';
import User from '../User/User';

const SideBar = (props) => {
return (
    <div className={style.SideBar}>
        <a href="/newpost" className={style.NewPostLink}>New Post</a>
        < User
          {...props}

        />
    </div>
  );
};


export default SideBar;