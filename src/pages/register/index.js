import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import RectangleLogo from "../../assets/images/Rectangle 62.png";
import Banner from "../../assets/images/Group 83.png";
import { Link, useNavigate } from "react-router-dom";
import { Services } from "../../config/services";

const Register = () => {
  const [state, setState] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState(prev => ({
      ...prev, [name]:value
    }))
  }
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    Services().post(
      "https://bootcamp-rent-cars.herokuapp.com/customer/auth/register", {...state, "role":"Admin"}
    ).then (response => {
      navigate("/login")
    }).catch(err=>err.message);
  }
    return (
      <div>
        <Row>
          <Col className="d-flex justify-content-center align-items-sm-start align-items-md-center">
            <Card style={{ width: "30rem" }} className="border border-0">
              <Card.Body>
                <img
                  src={RectangleLogo}
                  className="img-fluid py-5"
                  alt="Picy-alt"
                />
                <Card.Title>Sign Up</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Name*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan Nama Lengkap"
                      name="name"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Contoh: johndee@gmail.com"
                      name="email"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Create Password*</Form.Label>
                    <Form.Control
                      type="Password"
                      placeholder="6+ karakter"
                      name="password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div className="vstack py-5">
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
                    <span className="text-center">
                      Already have an account
                      <Link to="/login">Sign in here</Link>
                    </span>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-none d-sm-block">
            <img
              src={Banner}
              className="img-fluid"
              alt="Picy-alt"
              style={{ width: "1000px", height: "1000px" }}
            />
          </Col>
        </Row>
      </div>
    );
}

export default Register;