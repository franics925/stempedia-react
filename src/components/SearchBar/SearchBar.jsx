import React from 'react';
import style from './SearchBar.module.css';
// import { Searchbar } from 'react-native-paper';


const SearchBar = (props) => {
    return (
        <div className={style.SearchBar}>
            <input 
                placeholder="Search..."
                onChange={event => props.handleOnChange(event)}
            />
            <button
                className="SearchButton"
                // handleOnClick={event => props.handleOnClick(event)}
                handleonclick={props.handleonclick}
            >
                <p>Search</p>
            </button>
        </div>
    );
};

export default SearchBar;