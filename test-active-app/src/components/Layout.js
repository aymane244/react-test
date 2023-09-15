import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout({ color, toggleColor }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a
                        className="navbar-brand"
                        to="#"
                    >Navbar
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="me-4">
                        {color === false ? <i className="fa-solid fa-moon fs-5 pointer" onClick={toggleColor}></i> :
                        <i class="fa-solid fa-sun fs-5 pointer text-warning" onClick={toggleColor}></i>}
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>

    )
}