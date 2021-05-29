import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const [navbarSticky, setNavbarSticky] = useState("navbar navbar-expand-lg site-navbar");

 useEffect (()=>{
    document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 50){
            setNavbarSticky("navbar navbar-expand-lg site-navbar bg-light")
            
        } else {
            setNavbarSticky("navbar navbar-expand-lg site-navbar")
        }
    })
},[])

    return (
        <header>
            <nav className= { navbarSticky} id="pb-navbar">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09"
                        aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-brand">Logotipo</div>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Sobre mí</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio" className="nav-link">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resumen" className="nav-link">Resumen</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="download-cv">
                        <button className="btn btn-outline-primary">
                            Descargar CV
                        </button>
                    </div>
                </div>
            </nav>
	    </header>
    )
}

export default Header



