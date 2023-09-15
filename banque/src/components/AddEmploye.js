import React, { useState } from "react";
import axios from "axios";
export default function AddEmploye(){
    const [employe, setEmploye] = useState({
        nomEmploye : ''
    });
    function handleInput(e){
        setEmploye(data=>({
            ...data,
            [e.target.name] : e.target.value,
        }))
    }
    function saveForm(e){
        e.preventDefault();
        const data = {
            nomEmploye : employe.nomClient,
        };
        axios.post('http://localhost:8080/add-clients', data).then(res=>{
            console.log(res.data);
        })
    }
    return (
        <div className="container mt-5">
            <h1 className="text-center">Add employé</h1>
            <form onSubmit={saveForm}>
                <div className="mb-3">
                    <label
                        className="form-label"
                    >
                        Nom de l'employé
                    </label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        name="nomClient"
                        onChange={handleInput}
                        placeholder="Votre nom"
                    />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary">Valider</button>
                </div>
            </form>
        </div>
    )
}