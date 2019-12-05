import React from 'react';
import style from './SearchResults.module.css';

const SearchResults = (props) => {

    return(
        <div className={style.SearchResults}>
            <div className={style.SearchHeader}>
            { props.query ? 
                <div className={style.ResultsPrompt}>
                <h3>Showing results for: <h4>{props.query}</h4></h3>
            </div> : ''
            }
            </div>

            {props.posts.sort().map((result, idx) =>
                <div className={style.Result} key={idx}>
                    <div className={style.ResultBody}>
                        <a href='/post'>
                            <h3>{result.title}</h3>
                        </a>
                        <p>{result.description}</p>
                        <p>By: {result.userName}</p>
                    </div>
                    <div className={style.details}>
                        <p>Views: {result.views}</p>
                        <p>Comments: 4</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
