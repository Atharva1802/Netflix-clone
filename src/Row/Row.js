import React, { useState, useEffect } from 'react'
import axios from '../axios';
import './Row.css'

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovies] = useState([]);

  const base_url = "http://image.tmdb.org/t/p/original/"

  useEffect(() => { //fetch movie data
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl])

  // console.log(movie);

  return (
    <div>
      <h2>{title}</h2>
      
      {movie.map(movie => (
        <img src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path 
        }`} alt={movie.name} />
      ))}
    </div>
  )
}

export default Row