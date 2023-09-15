import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Zellige } from "../Data/Data";
import { Usercontext } from "../App";

export default function Body() {
    const { addToCart, cart, quantity, incQuantity, decQuantity } = useContext(Usercontext)
    const data = Zellige;
    const [products, setProducts] = useState([]);
    const [image, setImage] = useState({
        imageDisplay: "http://localhost:3000/images/Z-1.webp",
    })
    useEffect(() => {
        setProducts(data.zellige)
    }, [data.zellige])
    const stylesOpacity = {
        opacity: 0.5,
    }
    const style = {
        opacity: 1,
    }
    function changePic(e) {
        setImage(changePic => ({
            ...changePic,
            imageDisplay: e.target.src,
        }))
    }
    return (
        <div>
            <div className="container">
                <div className=" mt-5">
                    {products.map((item) => (
                        <>
                            <div className="row py-4 justify-content-center align-items-center container bg-white my-5">
                                <div className="col-md-5 text-center m-3" key={item.id}>
                                    <img src={image.imageDisplay} className="img-fluid" alt="img-zellige" />
                                    <div className="mt-5 text-center">
                                        <img
                                            src="images/Z-1.webp"
                                            alt=""
                                            className="img-thumbnail pointer img-target"
                                            onClick={changePic}
                                            style={image.imageDisplay === item.image1 ? style : stylesOpacity} /><img
                                            src="images/Z-2.webp"
                                            alt=""
                                            className="img-thumbnail ms-3 pointer img-target"
                                            onClick={changePic}
                                            style={image.imageDisplay === item.image2 ? style : stylesOpacity} /><img
                                            src="images/2-3.webp"
                                            alt=""
                                            className="img-thumbnail ms-3 pointer img-target"
                                            onClick={changePic}
                                            style={image.imageDisplay === item.image3 ? style : stylesOpacity}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <h6 className="text-secondary">
                                        Accueil / Interieur / {item.name}
                                    </h6>
                                    <h5>
                                        <Link to="/" className="text-decoration-none text-dark">Ciment</Link>,
                                        <Link to="/" className="text-decoration-none text-dark ms-1">Interieur</Link>
                                    </h5>
                                    <h3 className="mt-5">{item.name}</h3>
                                    <div className="d-flex favoris">
                                        <div className="ms-3">
                                            <i className="fa-regular fa-heart fs-5 text-danger"></i>
                                        </div>
                                        <div className="me-3">
                                            <strong>
                                                <p className="fs-6 ms-2">Ajouter au favoris</p>
                                            </strong>
                                        </div>
                                    </div>
                                    <hr />
                                    <p className="text-justify">{item.description}</p>
                                    <h6>Prix au mètre carré (m2)</h6>
                                    <p>Carreaux ciment traditionnels | handmade tiles</p>
                                    <hr />
                                    <div className="pointer">
                                        <i className="fa-solid fa-palette fs-4 pointer"></i> PERSONNALISER LES COULEURS
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-around mt-3 fs-4">
                                        <p><strong>Prix: </strong></p>
                                        <p><strong>{item.price},00 €</strong></p>
                                    </div>
                                    <form>
                                        <div className="d-flex justify-content-around mt-3 fs-4">
                                            <p><strong>Quantité: </strong></p>
                                            <div className="d-flex gap-4 mt-4 bg-white mx-auto justify-content-center border pointer">
                                                <div className="fs-4 py-2 ps-4" onClick={decQuantity}><strong>-</strong></div>
                                                <div className="vr"></div>
                                                <div className="fs-4 py-2 px-1"><strong><span>{quantity}</span></strong></div>
                                                <div className="vr"></div>
                                                <div className="fs-4 py-2 pe-4" onClick={incQuantity}><strong>+</strong></div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-around mt-3 fs-4">
                                            <p><strong>Total: </strong></p>
                                            <div className="input-group mb-3 w-25">
                                                <strong>{item.price * quantity} €</strong>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            {cart.length < 1 ? <button
                                                type="button"
                                                className="border-0 bg-danger shadow px-5 py-2 text-decoration-none text-white fs-4"
                                                onClick={() => addToCart(item.id, item.name, item.price, item.image1)}
                                            >
                                            &nbsp;Ajouter au panier&nbsp;
                                            </button> :
                                            <button
                                                type="button"
                                                className="border-0 bg-disable shadow px-5 py-2 text-decoration-none text-dark fs-4"
                                                disabled
                                            >
                                                &nbsp;Déjà au panier&nbsp;
                                            </button>}
                                        </div>
                                    </form>
                                </div>

                                <div className="col-md-12 mt-4 px-3">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                                aria-selected="true">Description</button>
                                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-profile" type="button" role="tab"
                                                aria-controls="nav-profile" aria-selected="false">Livraison</button>
                                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav-contact" type="button" role="tab"
                                                aria-controls="nav-contact" aria-selected="false">Avis</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content mt-3 ms-3" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                            aria-labelledby="nav-home-tab" tabIndex="0">Déscription page</div>
                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                                            aria-labelledby="nav-profile-tab" tabIndex="0">Livraison</div>
                                        <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                                            aria-labelledby="nav-contact-tab" tabIndex="0">Avis</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}