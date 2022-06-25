import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faTrash, faUserPlus, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Form, Button, InputGroup, Dropdown } from "@themesberg/react-bootstrap";
import { ChoosePhotoWidget, ProfileCardWidget } from "./Widgets";
import Modal from "react-bootstrap/Modal";

import ProfileCover from "../assets/event1.jpg";

function SettingUser() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState("");

  const baseUrl = "https://api.adicara.kiarta.id/api";
  const token = sessionStorage.getItem("token");

  var config = {
    method: "get",
    url: baseUrl + "/profile",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios(config)
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.data);
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
  }, []);

  return (
    <div>
      <Row>
        <Col xs={12} xl={8}>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Edit information</h5>
              <Form>
                <Row>
                  <Col>
                    <Row>
                      <Col className="mb-3">
                        <Form.Group id="firstName">
                          <Form.Label>Nama Event</Form.Label>
                          <Form.Control required type="text" name="name" value={user.name} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col md={6} className="mb-3"></Col>
                    </Row>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="lastName">
                      <Form.Label>Email</Form.Label>
                      <Form.Control required type="text" name="email" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="emal">
                      <Form.Label>Social Media</Form.Label>
                      <Form.Control type="text" placeholder="masukkan alamat sosial media" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="number" placeholder="+62 822 111 909 87" />
                    </Form.Group>
                  </Col>
                </Row>

                <h5 className="my-4">Alamat</h5>
                <Row>
                  <Col sm={9} className="mb-3">
                    <Form.Group id="address">
                      <Form.Label>Alamat Lengkap</Form.Label>
                      <Form.Control type="text" placeholder="masukkan namatempat, namajalan, kelurahan" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4} className="mb-3">
                    <Form.Group className="mb-2">
                      <Form.Label>Provinsi</Form.Label>
                      <Form.Select id="state" defaultValue="0">
                        <option value="0">- provinsi -</option>
                        <option value="DIY">Yogyakarta</option>
                        <option value="JTG">Jawa Tengah</option>
                        <option value="JTM">Jawa Timur</option>
                        <option value="JB">Jawa Barat</option>
                        <option value="KTM">Kalimantan Timur</option>
                        <option value="KB">Kalimantan Barat</option>
                        <option value="AC">Aceh</option>
                        <option value="BT">Batam</option>
                        <option value="LT">Timor Leste</option>
                        <option value="SU">Sulawesi Utara</option>
                        <option value="BD">Bandung</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={4} className="mb-3">
                    <Form.Group id="city">
                      <Form.Label>Kabupaten</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    <Form.Group id="zip">
                      <Form.Label>Kecamatan</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="mt-3">
                  <Button variant="primary" type="text">
                    Save All
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <Card border="light" className="text-center p-0 mb-4">
                <Card.Body className="pb-5">
                  <Card.Img src={ProfileCover} alt="Neil Portrait" className="user-avatar large-avatar mx-auto mt-n7 mb-4" />
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle className="fw-normal">{user.email}</Card.Subtitle>
                  <Card.Text className="text-gray mb-4">Indo</Card.Text>

                  <Button variant="primary" size="sm" className="me-2">
                    <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Connect
                  </Button>
                  <Button variant="secondary" size="sm">
                    Send Message
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12}>
              <ChoosePhotoWidget title="Select profile photo" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SettingUser;
