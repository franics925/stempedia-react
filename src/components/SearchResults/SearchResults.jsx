import React from 'react';
import style from './SearchResults.module.css';

const SearchResults = (props) => {

    return(
        <div className={style.SearchResults}>
            <div className={style.SearchHeader}>
            { props.searchLoading ? 
                <div className={style.ResultsPrompt}>
                <h3>Showing results for: <h4>{props.query}</h4></h3>
            </div> : ''
            }
            </div>

            {props.posts.sort().map((result, idx) =>
                <div className={style.Result} key={idx}>
                    <p>Up Votes: {result.upVotes}</p>
                    <p>Posted By: {result.userName}</p>
                    <a href='/post'>
                        <h3>{result.title}</h3>
                    </a>
                    <p>Description: {result.description}</p>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
