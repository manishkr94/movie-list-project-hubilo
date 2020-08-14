import React, { useState } from 'react'
import Axios from 'axios';
import { ResultCard } from './ResultCard';

export const Add = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("")

    const onChange = async (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        await Axios.get(`https://www.omdbapi.com/?apikey=32395055&type=movie&s=${e.target.value}`)
            .then((res) => {
                if (res.data.Response === "True") {
                    setResults(res.data.Search);
                } else {
                    setResults([]);
                    setError(res.data.Error)
                    console.log("error message", error)
                }
            });
    };


    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Search for a movie"
                            value={query}
                            onChange={onChange}
                        />
                    </div>

                    <ul className="results">
                        {results ? results.map((movie) => (
                            <li key={movie.imdbID}>
                                <h5>{movie.Title}</h5>
                                <ResultCard movie={movie} />
                            </li>
                        )) : <h2>{error}</h2>}
                    </ul>
                </div>
            </div>
        </div>
    )
}
