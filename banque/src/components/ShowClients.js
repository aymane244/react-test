import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function ShowClients(){
    const [clients, setClients] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/clients").then((res) => {
          if(res.status === 200){
            console.log(res.data)
            setClients(res.data);
          }
        });
    }, [])
    let i = 1;
    let displayClients = clients.map(list =>{
        return(
            <tr key={list.codeClient}>
                <td>{i++}</td>
                <td>{list.nomClient}</td>
                <td>{list.comptes}</td>
            </tr>
        )
    })
    return(
        <div className='container mt-5'>
            <table className="table table-dark table-striped">
                <thead className="text-center">
                    <tr>
                        <th>#</th>
                        <th>Nom du client</th>
                        <th>Compte du client</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {displayClients}
                </tbody>
            </table>
        </div>
    )
}