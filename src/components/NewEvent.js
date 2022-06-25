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

  axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRF-TOKEN": window.csrf_token,
  };

  const simplePost = async () => {
    var data = new FormData();
    data.append("nama_event", eventName);
    data.append("deskripsi_event", eventDesc);
    data.append("slug", eventSlug);

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
    <div>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control required type="text" name="eventName" placeholder="masukkan nama event disini" onChange={(e) => setEventName(e.target.value)} value={eventName} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Description</Form.Label>
              <Form.Control as="textarea" rows="3" name="eventDesc" onChange={(e) => setEventDesc(e.target.value)} value={eventDesc} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Slug</Form.Label>
              <Form.Control required type="text" name="eventSlug" placeholder="slug event" onChange={(e) => setEventSlug(e.target.value)} value={eventSlug} />
            </Form.Group>
            <Button onClick={simplePost} variant="primary" type="button" className="w-100">
              Save
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewEvent;
