import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './MoviePoster.css'

export default function MoviePoster(props) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const common_url = "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"
  

  return (
    <div className='m-4 moview_poster text-center '>
      <div>
        <NavLink to={`/movie/page/${props.id}`}>
          {/* <img className='rounded poster_image' src={`${url}==={null} ?${common_url}:${IMG_URL}${props.image}`} alt="movie" width="200px" height="300px"  /> */}
          <img className='rounded poster_image' src={props.image === null ? common_url : IMG_URL + props.image} alt="movie" width="200px" height="300px" />
        </NavLink>
      </div>
      <div className='movie_name text-light'>
        <NavLink className="fw-bold mt-1 nav_link" to={`/movie/page/${props.id}`}>{props.title}</NavLink>
        {/* <p className='' ></p> */}
        <p >Rating :{props.vote_average}</p>
      </div>
    </div>
  )
}
