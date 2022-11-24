import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MoviePoster from '../components/MoviePoster';

export default function Upcoming() {
    const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const [list, setList] = useState([]);
  const [pages, setPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=${pageNumber}`;

  useEffect(() => {
    loadingURL();
  }, [])
  const fetchUrl = async (value) => {
    const URL_PAGE = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=${value}`;
    const res = await fetch(URL_PAGE);
    const dataList = await res.json();
    return dataList;
  }
 function loadingURL() {
    fetch(URL)
      .then((res) => res.json())
      .then((dat) => (setList(dat.results), setPages(dat.total_pages)))
  }
  const handleChange =  async (event, value) => {
    setPageNumber(value);
    const updateData= await fetchUrl(pageNumber);
    setList(updateData.results);
  }
  return (
    <div style={{ background: "#212F3C" }}>
      <div className='container'>
        <div className='p-2'>
          <h3 className='text-light'>Upcoming</h3>
          <hr className='text-light' />
        </div>
        <div className='d-flex justify-content-center flex-wrap'>
          {
            list.map((x, i) => (
              <MoviePoster key={i} id={x.id} title={x.title} vote_average={x.vote_average} image={x.poster_path} />
            ))
          }
        </div>
        <hr className='text-light my-2' />
        <div className='pb-5 pt-3  d-flex justify-content-center'>
          <Pagination sx={{ button: { color: '#000', background: "#fff" } }} count={pages} variant="outlined" color="primary" shape="rounded" onChange={handleChange} />
        </div>
      </div>
    </div>
  )
}
