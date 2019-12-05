import React from 'react';
// import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Button, Navbar, Dropdown } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'


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
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/newpost">New Post</Dropdown.Item>
            <Dropdown.Item href="/">Home</Dropdown.Item>
            <Dropdown.Item href="https://www.google.com">My Posts</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a href="/"><h1>STEMpedia</h1></a>
        <div className={style.SearchBar}>
            < SearchBar 
              {...props}
              posts={props.posts}
            />
        </div>
        <div>
          <a href='/login' 
            className={style.NavBarLink}
            >
              LOG IN
            </a>

          &nbsp;&nbsp;|&nbsp;&nbsp;

          <a href='/signup' 
            handleClick={() => 
                console.log('click')}
            className={style.NavBarLink}
            >
              SIGN UP
          </a>
        </div>
      </div>
    );
  };


  

export default NavBar;