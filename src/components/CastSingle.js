import React from 'react'
import './CastSingle.css'
export default function CastSingle(props) {

    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const common_url = "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"

    return (
        <div className='m-4 cast_poster text-start '>
            <div>
                <img className='poster_image' src={props.image === null ? common_url : IMG_URL+props.image} alt="movie" width="200px" height="300px" />
            </div>
            <div className='cast_name text-light mt-1'>
                <p className='' >{props.name}</p>
                <p >Character : {props.dep}{props.char}</p>
            </div>
        </div>
    )
}
