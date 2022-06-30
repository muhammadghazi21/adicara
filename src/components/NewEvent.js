import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Form } from "@themesberg/react-bootstrap";
import { Col, Row, Card, Button, FormCheck, Container, InputGroup } from "@themesberg/react-bootstrap";

const NewEvent = () => {
  const baseUrl = "https://api.adicara.kiarta.id/api";
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const [eventName, setEventName] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventSlug, setEventSlug] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [alamatEvent, setAlamatEvent] = useState("");

  axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRF-TOKEN": window.csrf_token,
  };

  const simplePost = async () => {
    var data = new FormData();
    data.append("nama_event", eventName);
    data.append("deskripsi_event", eventDesc);
    data.append("slug", eventSlug);
    data.append("social_media", socialMedia);
    data.append("alamat", alamatEvent);

    var config = {
      method: "post",
      url: baseUrl + "/event",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
      data: data,
    };
    axios(config)
      .then((res) => {
        console.log(res);

        navigate("/dashboard");
        window.location.reload(false);
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
    <div className="container">
      <Card border="light" className="bg-white d-flex my-5 mt-lg-6 mb-lg-5">
        <Card.Body>
          <Form>
            <Row>
              <Col xs={12} xl={9}>
                <h5 className="mb-4">Fill in all parts of the form</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control required type="text" name="eventName" placeholder="masukkan nama event disini" onChange={(e) => setEventName(e.target.value)} value={eventName} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Event Description</Form.Label>
                  <Form.Control as="textarea" rows="3" name="eventDesc" onChange={(e) => setEventDesc(e.target.value)} value={eventDesc} />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Event Slug</Form.Label>
                      <Form.Control required type="text" name="eventSlug" placeholder="slug event" onChange={(e) => setEventSlug(e.target.value)} value={eventSlug} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Social Media</Form.Label>
                      <Form.Control required type="text" name="socialMedia" placeholder="@(event_social_media)" onChange={(e) => setSocialMedia(e.target.value)} value={socialMedia} />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control required type="text" name="alamatEvent" placeholder="alamat lengkap event diadakan" onChange={(e) => setAlamatEvent(e.target.value)} value={alamatEvent} />
                </Form.Group>
                <Button onClick={simplePost} variant="primary" type="button" className="w-100">
                  Save
                </Button>
              </Col>
              <Col xs={12} xl={3}>
                <Card className="barnewevent mb-4"></Card>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewEvent;
