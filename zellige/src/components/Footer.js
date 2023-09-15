import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div className="bg-dark text-white">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-md-4 mt-3">
                            <div className="d-flex">
                                <img src="images/Z-1.webp" alt="" className="me-3 img-footer" />
                                <p>Zellige Design presntation, our offers, services and what is our speciality</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="d-flex justify-content-around">
                                <div className="me-3">
                                    <h5>Catégories</h5>
                                    <div><Link to="/" className="text-white">Zellige</Link></div>
                                    <div><Link to="/" className="text-white">Ciment</Link></div>
                                    <div><Link to="/" className="text-white">Granito</Link></div>
                                    <div><Link to="/" className="text-white">Terrazo</Link></div>
                                </div>
                                <div>
                                    <h5>Liens utils</h5>
                                    <div><Link to="/" className="text-white">Accueil</Link></div>
                                    <div><Link to="/" className="text-white">A propos de nous</Link></div>
                                    <div><Link to="/" className="text-white">Conditions de ventes</Link></div>
                                    <div><Link to="/" className="text-white">Commandes</Link></div>
                                </div>
                                <div>
                                    <h5>Simulateurs</h5>
                                    <div><Link to="/" className="text-white">Zellige</Link></div>
                                    <div><Link to="/" className="text-white">Ciment</Link></div>
                                    <div><Link to="/" className="text-white">Granito</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <h5>Abonnez-vous pour les dernières offres</h5>
                            <form className="row g-3">
                                <div className="col-auto">
                                    <label htmlFor="email" className="visually-hidden">Password</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-3">Confirmer</button>
                                </div>
                            </form>
                            <h5>Suivez-nous sur les réseaux sociaux</h5>
                            <div className="fs-5 d-flex padding-i">
                                <div><Link to="/" className="text-white"><i className="fa-brands fa-whatsapp bg-whatsapp py-1 px-1"></i></Link></div>
                                <div><Link to="/" className="text-white"><i className="fa-brands fa-facebook bg-facebook py-1 px-1"></i></Link>
                                </div>
                                <div><Link to="/" className="text-white"><i className="fa-brands fa-twitter bg-twitter py-1 px-1"></i></Link>
                                </div>
                                <div><Link to="/" className="text-white"><i className="fa-brands fa-instagram bg-instagram py-1 px-1"></i></Link>
                                </div>
                                <div><Link to="/" className="text-white"><i className="fa-brands fa-youtube bg-youtube py-1 px-1"></i></Link>
                                </div>
                                <div><Link to="/" className="text-white"><i className="fa-brands fa-linkedin-in bg-linkedin py-1 px-1"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-2 bg-footer">
                <h3>zellige design © 12/2021</h3>
            </div>
        </div>
    )
}