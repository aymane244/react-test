import React from "react";
import { Outlet,Link } from "react-router-dom";

export default function Navbar({count, change}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light nav-shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="images/logo.svg" className="logo-size" alt="logo" />
                        Zellige Design
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" aria-current="page" to="/">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/">A propos</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Boutique
                                </p>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Ciment</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Granito</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Terrazo</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Zellige</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Couleurs
                                </p>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Palette Ciment: </Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Palette Granito:</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Palette Zellige:</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <p className="nav-link dropdown-toggle text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Simulateur
                                </p>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Simulateur Ciment</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Simulateur Granito</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Simulateur Zellige</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ms-lg-3">
                                <button className="border-0 bg-transparent nav-link text-dark d-flex align-items-center justify-content-around px-3" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="images/Flag-France.webp" className="flag-image" alt="flag" /> <span className="ms-2">French</span>
                                    <i className="arrow down ms-5"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="bg-hover">
                                        <button className="dropdown-item d-flex align-items-center border-0 bg-transparent">
                                            <img src="images/morocco.png" className="flag-image" alt="flag" /> <span className="ms-2">Arabic</span>
                                        </button>
                                    </li>
                                    <li className="bg-hover">
                                        <button className="dropdown-item d-flex align-items-center border-0 bg-transparent">
                                            <img src="images/english.png" className="flag-image" alt="flag" /> <span className="ms-2">English</span>
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="pointer border px-3 py-2 position-relative" onClick={change}>
                            <i className="fa-solid fa-cart-shopping fs-4 text-danger"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger py-1 px-2">{count.length}</span>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}