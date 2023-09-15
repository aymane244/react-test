import React, { useContext } from "react";
import { Usercontext } from "../App";

export default function Cart(props) {
    const { cart, removeProductInCart, quantity, incQuantity, decQuantity } = useContext(Usercontext)
    return (
        <div>
            <nav className="sidebar h-100 w-100 position-fixed top-0 end-0 position-relative">
                <div className="sidebar-content position-absolute end-0 h-100">
                    <div className="d-flex align-items-center justify-content-between pt-2 bg-white w-100">
                        <h1 className="ms-3"><i className="fa-solid fa-cart-shopping fs-3"></i> Panier</h1>
                        <span onClick={props.change}><i className="fa-solid fa-xmark fs-4 border border-dark rounded-circle py-1 px-2 me-3 pointer"></i></span>
                    </div>
                    <div className="mt-4 ms-3">
                        {cart.length <= 0 ? <h4 className="text-center">Panier est vide</h4> :
                            <div>
                                {cart.map(({ id, name, price, image, qte }) => (
                                    <>
                                        <div className="text-center">
                                            <p className="fs-5">{name}</p>
                                        </div>
                                        <div className="d-flex justify-content-around">
                                            <img src={image} alt="" className="img-cart" />
                                            <div className="fs-5">
                                                <p>
                                                    <strong>Prix: </strong>
                                                    <strong>{price} €</strong>
                                                </p>
                                                <div className="hstack gap-3 mt-4 bg-white w-50 mx-auto justify-content-center border pointer">
                                                    <div className="fs-4 py-2 ps-2" onClick={decQuantity}><strong>-</strong></div>
                                                    <div className="vr"></div>
                                                    <div className="fs-4 py-2 px-3"><strong><span>{quantity}</span></strong></div>
                                                    <div className="vr"></div>
                                                    <div className="fs-4 py-2 pe-2" onClick={incQuantity}><strong>+</strong></div>
                                                </div>
                                            </div>
                                            <div onClick={() => removeProductInCart(id)}><i className="fa-solid fa-xmark pointer text-danger"></i></div>
                                        </div>
                                        <div className="mt-5">
                                            <div className="d-flex justify-content-around mt-3 fs-4">
                                                <p><strong>Total: </strong></p>
                                                <p><strong><span>{quantity * price} €</span></strong></p>
                                            </div>
                                        </div>
                                        <hr className="w-100" />
                                    </>
                                ))}
                                <div className="margin-cart-btn py-5">
                                    <div className="text-center mt-2">
                                        <a href="/" className="w-100 bg-white shadow px-5 py-2 text-decoration-none text-dark fs-3">Voir le Panier</a>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button type="submit" className="border-0 bg-danger shadow px-5 py-2 text-decoration-none text-white fs-4">&nbsp;Commander&nbsp;</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}