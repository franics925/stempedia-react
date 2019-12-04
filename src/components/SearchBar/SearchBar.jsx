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
        </div>
    );
};

export default SearchBar;