import React, { useState, useEffect } from 'react'
import './Movie.css'
export default function Movies({ popular, heading }) {
    console.log(popular)
    const [movies, setmovies] = useState([])
    async function fetchmovies() {
        const movies = await fetch(popular)
        const response = await movies.json()
        console.log(response.results)
        setmovies(response.results)
    }
    useEffect(() => {
        fetchmovies()
    }, [])
    return (
        <>
            <h2 id={heading} style={{ color: 'red', fontWeight: '700', margin: '24px' }}>{heading}</h2>
            <div className="popular">

                {movies.map((films, index) => {
                    let url = `https://image.tmdb.org/t/p/w185/${films.poster_path}`
                    if (films.original_language === "kn") {
                        films.original_language = "Kannada"
                    } else if (films.original_language === "en") {
                        films.original_language = "English"
                    }
                    else if (films.original_language === "hi") {
                        films.original_language = "Hindi"
                    }
                    else if (films.original_language === "ml") {
                        films.original_language = "Malayalam"
                    }
                    else if (films.original_language === "te") {
                        films.original_language = "Telugu"
                    }
                    else if (films.original_language === "ta") {
                        films.original_language = "Tamil"
                    }
                    else if (films.original_language === "ja") {
                        films.original_language = "Japanese"
                    }
                    else {
                        films.original_language=films.original_language
                    }
                    return (
                        <>
                            <div key={index} className="filmbox">
                                <img src={url} alt="" width="180" height="180" />
                                <h6>Title: {films.title}</h6>
                                <h6>Language: {films.original_language}</h6>
                                <h6>Year: {films.release_date}</h6>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

