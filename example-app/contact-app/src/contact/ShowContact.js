import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ShowContact() {
  let location = useLocation();
  let navigate = useNavigate();
  let successMessage;
  let msg;
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/contacts/").then((res) => {
      if(res.status === 200){
        console.log(res.data)
        setLoading(false);
        setContacts(res.data.contacts);
      }
    });
  }, [])
  function deleteContact(e, id) {
    e.preventDefault();
    const conf = window.confirm("Do you want to delete this contact ?");
    if (conf) {
      axios.delete("http://127.0.0.1:8000/api/delete-contact/" + id).then((res) => {
        console.log(res.data.contacts);
        if (res.data.status === 200) {
          navigate(0, {state: res.data.message});
        }
      })
    }
  }

  let lists = contacts;
  let i = 1;
  let image;
  let displayContacts;
  console.log(i)
  if (location.state) {
    successMessage = <div className="alert alert-success text-center" role="alert">{location.state}</div>
  }
  // console.log(lists[0].image);
  if(loading){
    msg = <img src="images/laoding.gif" alt="Profile" className="w-image" />;
  }else{
    if(lists.length <= 0){
      displayContacts = <tr><td colSpan={7}><h1>There is no contact</h1></td></tr>
    }else{
      displayContacts = lists.map(list => {
        list.image === null ? image = <img src="images/unknown.jpg" alt="Profile" className="w-image" /> :
          image = <img src={"http://127.0.0.1:8000/storage/images/" + list.image} alt="Profile" className="w-image" />
        return (
          <tr key={list.id}>
            <td>{i++}</td>
            <td>{list.firstname}</td>
            <td>{list.lastname}</td>
            <td>{list.email}</td>
            <td>{list.adress}</td>
            <td>{image}</td>
            <td>
              <div className="d-flex justify-content-around align-items-center">
                <Button className="btn-border" onClick={(e) => deleteContact(e, list.id)}><i className="fa-solid fa-trash text-danger"></i></Button>
                <Link to={'/edit/' + list.id} target="_blank"><i className="fa-solid fa-pen-to-square text-success"></i></Link>
              </div>
            </td>
          </tr>
        )
      })
    }
  }
  return (
    <div>
      <Container>
        <h1 className="text-center mt-5">ShowContact</h1>
        {msg}
        {successMessage}
        {displayContacts && <Table striped bordered variant="dark" className="mt-4">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Addres</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {displayContacts}
          </tbody>
        </Table>}
      </Container>
    </div>
  );
};
