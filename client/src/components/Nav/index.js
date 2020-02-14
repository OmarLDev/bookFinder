import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/search">
                Google Books
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <Link to="/search" className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                    Search
                </Link>
            </li>
            <li className="nav-item">
            <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                Saved
            </Link>
            </li>
            </ul>
        </nav>
    );
}

export default Nav;