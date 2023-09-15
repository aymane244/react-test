import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AddContact() {
  let navigate = useNavigate();
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    email: "",
    adress: "",
    image: "",
    error_list: []
  })
  function handleInput(e) {
    const {name, value, type, files} = e.target
    setContact(data => ({
      ...data,
      // [e.target.name] : e.target.value,
      [name]: type === "file" ? files[0] : value
    }))
  }
  function saveForm(e) {
    e.preventDefault();
    const data = new FormData();
    console.log(data)
    data.append("image", contact.image);
    data.append("firstname", contact.firstname);
    data.append("lastname", contact.lastname);
    data.append("email", contact.email);
    data.append("adress", contact.adress);
    axios.post('http://127.0.0.1:8000/api/add-contact', data)
    .then(res => {
      console.log(res.data)
      if (res.data.status === 200) {
        setContact({
          firstname: "",
          lastname: "",
          email: "",
          adress: "",
          image: "",
          error_list: []
        })
        navigate("/show", {state: res.data.message})
      }else if (res.data.status === 422) {
        setContact(error_handle => ({
          ...error_handle,
          error_list: res.data.errors_vald
        }))
      }
    })
  }
  console.log(contact.image)
  return (
    <div className="mb-5">
      <h1 className="text-center mt-5">AddContact</h1>
      <Container className="mt-4">
        <Form onSubmit={saveForm} encType="multipart/form-data">
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              name="firstname"
              onChange={handleInput}
              value={contact.firstname}
            />
            <div className="text-danger">
              {contact.error_list.firstname}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              name="lastname"
              onChange={handleInput}
              value={contact.lastname}
            />
            <div className="text-danger">
              {contact.error_list.lastname}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleInput}
              value={contact.email}
            />
            <div className="text-danger">
              {contact.error_list.email}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAdress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your adress"
              name="adress"
              onChange={handleInput}
              value={contact.adress}
            />
            <div className="text-danger">
              {contact.error_list.adress}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAdress">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleInput}
              // value={contact.image}
            />
            <div className="text-danger">
              {contact.error_list.image}
            </div>
          </Form.Group>
          <div className="text-center">{contact.image && <img src={URL.createObjectURL(contact.image)} className="w-image-edit mx-auto" alt="" />}</div>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}
