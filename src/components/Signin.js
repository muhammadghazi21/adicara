import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from "@themesberg/react-bootstrap";

import "../App.css";
import { Login } from "@mui/icons-material";

const Signin = () => {
  const baseUrl = "https://api.adicara.kiarta.id/api";
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  //dipakedibawah
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post(`http://localhost:3004/user`, JSON.stringify({ email, password }), {
  //       headers: { "Content-Type": "application/json" },
  //       withCredentials: true,
  //     });
  //     console.log(JSON.stringify(response?.data));
  //     //console.log(JSON.stringify(response));
  //     const roles = response?.data?.roles;
  //     setEmail("");
  //     setPassword("");
  //     setSuccess(true);
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg("No Server Response");
  //     } else if (err.response?.status === 400) {
  //       setErrMsg("Missing Username or Password");
  //     } else if (err.response?.status === 401) {
  //       setErrMsg("Unauthorized");
  //     } else {
  //       setErrMsg("Login Failed");
  //     }
  //     errRef.current.focus();
  //   }
  // };

  axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRF-TOKEN": window.csrf_token,
  };

  const samplePost = async () => {
    console.log("submit");
    var data = new FormData();
    data.append("email", email);
    data.append("password", password);
    var config = {
      method: "post",
      url: baseUrl + "/login",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: data,
    };
    axios(config)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        sessionStorage.removeItem("token");
        sessionStorage.setItem("token", token);
        navigate("/dashboard");
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  return (
    <div>
      <main>
        <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
          <Container>
            <p className="text-center">
              <Card.Link as={Link} to="/">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
              </Card.Link>
            </p>
            <Row className="justify-content-center form-bg-image">
              <Col xs={12} className="d-flex align-items-center justify-content-center">
                <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  {success ? (
                    <div className="text-center text-md-center mb-4 mt-md-0">
                      <h3 className="mb-0">Welcome Back EO</h3>
                    </div>
                  ) : (
                    <>
                      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                        {errMsg}
                      </p>
                      <div className="text-center text-md-center mb-4 mt-md-0">
                        <h3 className="mb-0">Sign in to our platform</h3>
                      </div>
                      <Form className="mt-4">
                        <Form.Group id="email" className="mb-4">
                          <Form.Label>Your Email</Form.Label>
                          <InputGroup>
                            <InputGroup.Text>
                              <FontAwesomeIcon icon={faEnvelope} />
                            </InputGroup.Text>
                            <Form.Control autoFocus required id="email" type="email" ref={userRef} placeholder="example@company.com" onChange={(event) => setEmail(event.target.value)} />
                          </InputGroup>
                        </Form.Group>
                        <Form.Group>
                          <Form.Group id="password" className="mb-4">
                            <Form.Label>Your Password</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <FontAwesomeIcon icon={faUnlockAlt} />
                              </InputGroup.Text>
                              <Form.Control required id="password" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password} />
                            </InputGroup>
                          </Form.Group>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <Form.Check type="checkbox">
                              <FormCheck.Input id="defaultCheck5" className="me-2" />
                              <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">
                                Remember me
                              </FormCheck.Label>
                            </Form.Check>
                            <Card.Link className="small text-end">Lost password?</Card.Link>
                          </div>
                        </Form.Group>
                        <Button onClick={samplePost} variant="primary" type="button" className="w-100">
                          Sign in
                        </Button>
                      </Form>
                      <div className="mt-3 mb-4 text-center">
                        <span className="fw-normal">or login with</span>
                      </div>
                      <div className="d-flex justify-content-center my-4">
                        <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </Button>
                        <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Button>
                        <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                          <FontAwesomeIcon icon={faGithub} />
                        </Button>
                      </div>
                      <div className="d-flex justify-content-center align-items-center mt-4">
                        <span className="fw-normal">
                          Not registered?
                          <Card.Link as={Link} to="/signup" className="fw-bold">
                            {` Create account `}
                          </Card.Link>
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Signin;
