import React from 'react';
// import { Link } from 'react-router-dom';
import style from './SideBar.module.css';
import User from '../User/User';

const SideBar = (props) => {
return (
    <div className={style.SideBar}>
        <h1>SideBar</h1>
        < User
          user={props.user}
          posts={props.posts}

        />
    </div>
  );
};


export default SideBar;