import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
    const [search,setSearch]=useState("0");
    const handleChange=(e)=>{
        setSearch(e.target.value);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav_bar">
                <div className="container d-flex text-light">
                    <NavLink className="navbar-brand  text-light" to="/">MovieDb</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon " style={{color:"white"}}></span>
                    </button>
                    <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-secondary" aria-current="page" to="/movie/popular">Popular</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-secondary" to="/movie/top_rated">Top Rated</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-secondary" to="/movie/upcoming">Upcoming</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Movie Name" aria-label="Search" onChange={handleChange} />
                            <NavLink className="btn btn-secondary" to={`search/${search}`}>Search</NavLink>
                            {/* <button className="btn btn-secondary" type="submit"></button> */}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
