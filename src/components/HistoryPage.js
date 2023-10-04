import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const HistoryPage = () => {
    const searchHistory = useSelector((state) => state.history.searchHistory);
    console.log('Search History:', searchHistory);

    return (
        <div>
            <h1>Search History</h1>
            {searchHistory.length === 0 ? (
                <p>No Search history available</p>
            ) : (
                <ul>
                    {searchHistory.map((word, index)=> (
                        <li key={index}>
                            <Link to={`/word/${word}`}>{word}</Link>
                            {/* {word} */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HistoryPage;