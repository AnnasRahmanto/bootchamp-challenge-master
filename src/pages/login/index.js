import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import RectangleLogo from "../../assets/images/Rectangle 62.png";
import Banner from "../../assets/images/Group 83.png"
import { Link } from "react-router-dom";
import { Services } from "../../config/services";

const Login = (props) => {
  
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setState(prev => ({...prev, [name]:value}))
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    Services().post(
      "https://bootcamp-rent-cars.herokuapp.com/customer/auth/login", {
        ...state
      }).then(response => {
        const {data} = response
        localStorage.setItem("ACCESS_TOKEN", data.access_token)
        window.location.replace('/')

      }).catch(err => err.message);
  }

  
    return (
      <div>
        {/* <Container fluid> */}
       
          <Row>
            <Col
              className="d-flex justify-content-center align-items-sm-start align-items-md-center"
              // style={{ height: "100vh" }}
            >
              <Card style={{ width: "30rem" }} className="border border-0">
                <Card.Body>
                  <img
                    src={RectangleLogo}
                    className="img-fluid py-5"
                    alt="Picy-alt"
                  />
                  <Card.Title>Welcome Back!</Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Contoh: johndee@gmail.com"
                        onChange={handleChange}
                        name="email"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="Password"
                        placeholder="6+ karakter"
                        onChange={handleChange}
                        name="password"
                      />
                    </Form.Group>
                    <div className="vstack py-5">
                      <Button variant="primary" type="submit">
                        Sign In
                      </Button>
                      <span className="text-center">
                        Don’t have an account?
                        <Link to="/register">
                        Sign Up for free
                        </Link>
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
        
          {/* <Row>
            <Col
              className="d-flex justify-content-center align-items-sm-start align-items-md-center"
              // style={{ height: "100vh" }}
            >
              <Card style={{ width: "30rem" }} className="border border-0">
                <Card.Body>
                  <img
                    src={RectangleLogo}
                    className="img-fluid py-5"
                    alt="Picy-alt"
                  />
                  <Card.Title>Sign Up</Card.Title>
                  <Form>
                    <Form.Group>
                      <Form.Label>Name*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nama Lengkap"
                        // onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email*</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Contoh: johndee@gmail.com"
                        // onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Create Password*</Form.Label>
                      <Form.Control
                        type="Password"
                        placeholder="6+ karakter"
                        // onChange={handleChange}
                      />
                    </Form.Group>
                    <div className="vstack py-5">
                      <Button variant="primary" type="submit">
                        Sign Up
                      </Button>
                      <span className="text-center">
                        Already have an account?
                        <span
                          onClick={() => setShow(!show)}
                          className="text-link"
                        >
                          Sign In here
                        </span>
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
          </Row> */}
        

        {/* </Container> */}
      </div>
    );
}

export default Login;