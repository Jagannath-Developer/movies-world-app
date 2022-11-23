import React from 'react'
import './MoviePoster.css'

export default function MoviePoster(props) {
  const IMG_URL="https://image.tmdb.org/t/p/w500/";
  return (
    <div className='m-4 moview_poster text-center '>
        <div>
            <img className='rounded poster_image' src={`${IMG_URL}${props.image}`} alt="movie" width="200px" height="300px"  />
        </div>
        <div className='movie_name text-light'>
            <p className='fw-bold mt-1' >{props.title}</p>
            <p >Rating :{props.vote_average}</p>
        </div>
    </div>
  )
}
