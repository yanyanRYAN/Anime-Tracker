import React from 'react';
//import "bootstrap/dist/js/bootstrap.bundle.min";
import {  NavLink } from 'react-router-dom';
import '../../styles.css';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Logo image</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                            <li className="nav-item ">
                                <NavLink className="nav-link"  exact activeClassName="active" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item ">
                                <NavLink className="nav-link"  exact activeClassName="active" to="/anime/list">Anime</NavLink>                           
                            </li>

                            <li className="nav-item ">                          
                                <NavLink className="nav-link"  exact activeClassName="active" to="/profile">Profile</NavLink>                             
                            </li>
                 
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;