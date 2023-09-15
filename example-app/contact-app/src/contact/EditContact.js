import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

export default function EditContact() {
  let navigate = useNavigate();
  const [contact, setContacts] = useState([]);
  const [errorInput, setError] = useState([]);
  const [img, setImage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    adress: "",
    image: "",
  })
  const { id } = useParams();
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/edit-contact/" + id).then((res) => {
      setContacts(res.data.contact);
    });
  }, [id])
  function handleContact(e) {
    const { name, value, type, files } = e.target
    setContacts(data => ({
      ...data,
      [name]: type === "file" ? files[0] : value,
    }))
    setImage(file => ({
      ...file,
      [name]: type === "file" ? files[0] : value,
    }))
  }
  function submitForm(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("image", contact.image);
    data.append("firstname", contact.firstname);
    data.append("lastname", contact.lastname);
    data.append("email", contact.email);
    data.append("adress", contact.adress);
    axios.post("http://127.0.0.1:8000/api/update-contact/" + id, data).then(res => {
      if (res.data.status === 200) {
        setError([]);
        navigate("/show", { state: res.data.message })
      } else if (res.data.status === 422) {
        setError(res.data.errors_vald);
      }
    })
  }
  let image;
  contact.image === null ? image = <img src="../images/unknown.jpg" alt="Profile" className="w-image-edtit" /> :
    image = <img src={"http://127.0.0.1:8000/storage/images/" + contact.image} alt="Profile" className="w-image-edit" />
  return (
    <div className="mb-5">
      <h1 className="text-center mt-5">Edit Contact</h1>
      <div className="text-center">{(img.image && <img src={URL.createObjectURL(img.image)} className="w-image-edit mx-auto" alt="" />) || image}</div>
      <Container className="mt-4">
        <Form onSubmit={submitForm} encType="multipart/form-data">
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              name="firstname"
              value={contact.firstname || ''}
              onChange={handleContact}
            />
            <div className="text-danger">
              {errorInput.firstname}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              name="lastname"
              value={contact.lastname || ''}
              onChange={handleContact}
            />
            <div className="text-danger">
              {errorInput.lastname}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={contact.email || ''}
              onChange={handleContact}
            />
            <div className="text-danger">
              {errorInput.email}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAdress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your adress"
              name="adress"
              value={contact.adress || ''}
              onChange={handleContact}
            />
            <div className="text-danger">
              {errorInput.adress}
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAdress">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleContact}
            />
            <div className="text-danger">
              {errorInput.image}
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}