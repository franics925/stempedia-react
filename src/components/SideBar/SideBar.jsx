import React from 'react';
// import { Link } from 'react-router-dom';
import style from './SideBar.module.css';
import User from '../User/User';

const SideBar = (props) => {
return (
    <div className={style.SideBar}>
        < User
          {...props}
        />
    </div>
  );
};


export default SideBar;