import React from 'react';
import style from './SearchResults.module.css';

const SearchResults = (props) => {
    return(
        <div className={style.SearchResults}>
            <h1>Showing results for: <h3>{props.query}</h3></h1>
        </div>
    );
};

export default SearchResults;
