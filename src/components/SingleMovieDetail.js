import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CastSingle from './CastSingle';
import './SingleMovieDetail.css'
export default function SingleMovieDetail() {

    const id = useParams();
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id.id}?api_key=${Api_key}&language=en-US`;
    const CAST_URL = `https://api.themoviedb.org/3/movie/${id.id}/credits?api_key=${Api_key}&language=en-US`;
    const [list, setList] = useState({});
    const [date, setDate] = useState("");
    const [movie, setMovie] = useState([]);
    const [movieCastList, setMovieCastList] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {
        loadingPost();
        loadinMovieCast();
        // console.log(id);
    }, [])
    const loadingPost = async () => {
        const res = await fetch(MOVIE_URL)
        const dataList = await res.json();
        const data = dataList.genres;
        setList(dataList)
        setMovie(data)
    }
    const loadinMovieCast = async () => {
        const res = await fetch(CAST_URL)
        const dataList = await res.json();
        const data = dataList.cast;
        setMovieCastList(data);
        // setMovie(data)
    }
    const Mobile = () => {
        return (
            <div style={{ background: "#212F3C" }}>
                <div className="poster_view">
                    <img className='single_img  w-100' src={`https://image.tmdb.org/t/p/w500/${list.backdrop_path}`} alt="bg_poster" />
                    <div className='gradina_box' style={{ height: "100px" }}>
                    </div>
                </div>

                <div className='bottom_div'  >
                    <div className='d-flex movie_card'>
                        <div className='rounded'>
                            <img className='movie_poster rounded rounded-4' src={`https://image.tmdb.org/t/p/w500/${list.poster_path}`} alt="movie_photo" />
                        </div>
                        <div className='w-75 px-3 pt-3 text-start'>
                            <h4 className='text-light'>{list.title}</h4>
                            <p className='text-primary'>Rating :{list.vote_average}</p>
                            <div className='d-flex justify-content-center align-content-center'>
                                <p className='p-1 text-center rounded text-light border border-1'>{list.runtime} min</p>
                                {
                                    movie.map((x) => {
                                        return (
                                            <p className='text-primary text-center px-1' key={x.id}>{x.name}</p>
                                        )
                                    })
                                }
                            </div>
                            <span className='text-light'>Release Date :{list.release_date}</span>
                        </div>
                    </div>
                    <hr className='text-secondary mx-4' />
                    <div className='text-start p-2'>
                        <h4 className='text-light'>Cast</h4>
                    </div>
                    <div className='d-flex justify-content-center flex-wrap'>
                        {
                            movieCastList.map((x) => {
                                return (
                                    <CastSingle key={x.id} image={x.profile_path} name={x.name} char={x.character} dep={x.department} />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        )
    }
    const Desktop = () => {
        return (
            <div className='pt-4' style={{ background: "#212F3C" }}>
                <div className="container-fluid" style={{ paddingLeft: "150px", paddingRight: "150px", textAlign: "start" }}>
                    <div className=' shadow ' >
                        <div className='row poster_view rounded mx-0'>
                            <div className="col-6 p-3">
                                <div className='d-flex'>
                                    <div className='w-25 '>
                                        <img src={`https://image.tmdb.org/t/p/w500/${list.poster_path}`} alt="movie_photo" />
                                    </div>
                                    <div className='w-75 px-3 pt-3'>
                                        <h2 className='text-light'>{list.title}</h2>
                                        <p className='text-primary'>Rating :{list.vote_average}</p>
                                        <div className='d-flex align-content-center '>
                                            <p className='p-1 rounded text-light border border-1'>{list.runtime} min</p>
                                            {
                                                movie.map((x) => {
                                                    return (
                                                        <p className=' text-primary px-2' key={x.id}>{x.name}</p>
                                                    )
                                                })
                                            }

                                        </div>
                                        <span className='text-light'>Release Date :{list.release_date}</span>
                                    </div>
                                </div>
                                <div className='text-light p-2'>
                                    <h5 >Overview</h5>
                                    <p>{list.overview}</p>
                                </div>
                            </div>
                            <div className='col-6 float-end' style={{ padding: "0px" }}>
                                <img className='single_img rounded-end' src={`https://image.tmdb.org/t/p/w500/${list.backdrop_path}`} alt="bg_poster" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h4 className='text-light'>Cast</h4>
                    </div>
                    <div className='d-flex justify-content-center flex-wrap'>
                        {
                            movieCastList.map((x) => {
                                return (
                                    <CastSingle key={x.id} image={x.profile_path} name={x.name} char={x.character} dep={x.department} />
                                )
                            })
                        }
                    </div>

                </div>
            </div >
        )
    }

    return (
        <>
            {
                (width <= 720) ? <Mobile /> : <Desktop />
            }
        </>

    )
}
