import { Pagination, ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'

import MoviePoster from '../components/MoviePoster'

export default function HomePage() {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${pageNumber}`;
  useEffect(() => {
    loadingURL();
  }, [])
  function loadingURL() {
    fetch(URL)
      .then((res) => res.json())
      .then((dat) => (setData(dat.results), setPage(dat.total_pages)))
  }
  const handleChange = (event, value) => {
    setPageNumber(value);
    loadingURL();
  }


  return (
    <div style={{ background: "#212F3C" }}>
      <div className='container'>
        <div className='p-2'>
          <h3 className='text-light'>Popular</h3>
          <hr className='text-light' />
        </div>
        <div className='d-flex justify-content-center flex-wrap'>
        {
          data.map((x, i) => (
            <MoviePoster key={i} id={x.id} title={x.title} vote_average={x.vote_average} image={x.poster_path} />
          ))
        }
        </div>
        <hr className='text-light my-2' />
        <div className='pb-5 pt-3  d-flex justify-content-center'>
          <Pagination sx={{button:{color: '#000',background:"#fff"}}} count={page} variant="outlined" color="primary" shape="rounded" onChange={handleChange} />
        </div>
      </div>
    </div>
  )
}
