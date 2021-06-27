import React from 'react'
import clapperboard from './clapperboard.png'
import './Nav.css'
import {Link} from 'react-router-dom'
export default function Nav() {
    
    return (
        <>
            {/* <img width='50' src={clapperboard} alt="logo"></img> */}
        <div id="navbar">
        <div id="innerdiv">
            <h4 style={{color: "white"}}>Movieshub</h4><img id="imgid" src={clapperboard} width="30" alt=""/>
        </div>
        <div>
            <ul id="nav">
                <li><Link className="links" to="/">Home</Link></li>
                <li><Link className="links" to="/about">About</Link></li>
                <li className="nav-item dropdown px-2">
                    <a className="nav-link dropdown-toggle links" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    
                    <ul className="dropdown-menu" style={{color: "black"}} aria-labelledby="navbarDropdown">
                        <li><a style={{color: "black"}} className="dropdown-item" href=".popular">Popular Movies</a></li>
                        <li><a style={{color: "black"}} className="dropdown-item" href="#trending">Trending Movies</a></li>
                        <li><a style={{color: "black"}} className="dropdown-item" href="#toprated">Toprated Movies</a></li>
                        <li><a style={{color: "black"}} className="dropdown-item" href="#tvshows">Top Tvshows</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
        </>
    )
}

