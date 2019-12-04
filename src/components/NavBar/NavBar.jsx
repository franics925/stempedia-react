import React from 'react';
// import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';


const NavBar = (props) => {
    // let userStatus = props.user ?
    //   <div>
    //     <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
    //     &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    //     <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    //   </div>
    //   :
    //   <div>
    //     <Link to='/login' className={style.NavBarLink}>LOG IN</Link>
    //     &nbsp;&nbsp;|&nbsp;&nbsp;
    //     <Link to='/signup' 
    //     handleClick={() => 
    //         console.log('click')}
    //     className={style.NavBarLink}
    //     >SIGN UP</Link>
    //   </div>;
  
    return (
      <div className={style.NavBar}>
          <h1>STEMpedia</h1>
          <div className={style.SearchBar}>
              < SearchBar />
          </div>
      </div>
    );
  };


export default NavBar;