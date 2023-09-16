import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from 'axios';
import { Movie } from '@mui/icons-material';


const instance = axios.create();
const dynamicBaseUrl = 'https://api.themoviedb.org/3';
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow = false }) {
        const [movies, setMovies] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            async function fetchData() {
                try {
                const request = await instance.get(`${dynamicBaseUrl}${fetchUrl}`);
                console.log('API Response:', request.data);
                setMovies(request.data.results);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
               
            }

            fetchData();
        }, [fetchUrl]);

        

        if (!movies) {
            return <div>Loading...</div>;
          }
        
          if (error) {
            return <div>Error: {error.message}</div>;
          }

        
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
        {movies.map((movie) =>{
            
             const posterPath = isLargeRow ? movie.poster_path : movie.backdrop_path;
             if (posterPath) {
                return (
                  <img
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${posterPath}`}
                    alt={movie.name}
                  />
                );
              }

              return null;
        })}
        </div>
    </div>
  )
}

export default Row