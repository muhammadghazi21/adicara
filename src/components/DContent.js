import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";

import "../App.css";
import { ConstructionRounded, RecordVoiceOverSharp } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddIcon from "@mui/icons-material/Add";

import Listevent from "./Listevent";

const DContent = () => {
  const navigate = useNavigate();
  const baseUrl = "https://api.adicara.kiarta.id/api";
  const token = sessionStorage.getItem("token");
  const [user, setUser] = useState("");

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
        console.log(res);
        setUser(res.data);
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

  // const sampleGet = async () => {
  //   var config = {
  //     method: "get",
  //     url: baseUrl + "/profile",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   axios(config)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         // The request was made and the server responded with a status code
  //         // that falls out of the range of 2xx
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //         // http.ClientRequest in node.js
  //         console.log(error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log("Error", error.message);
  //       }
  //     });
  // };
  return (
    <Container>
      <div className="content">
        <Row>
          <Col xs={8} xl={2}>
            <Button
              className="btnnewevent"
              variant="text"
              onClick={() => {
                navigate(`newevent`);
              }}
            >
              <Row className="btntext">
                <Col>
                  <AddIcon sx={{ fontSize: "200px" }} />
                </Col>
                <div>Start The Event</div>
              </Row>
            </Button>
          </Col>
          <Col xs={4} xl={1}>
            <Box>
              <ButtonGroup id="grupbtn" orientation="vertical" aria-label="vertical button group" variant="text">
                <Button id="itemgrupbtn">
                  <PersonIcon sx={{ fontSize: "3vw" }} />
                </Button>
                <Button id="itemgrupbtn">Two</Button>
                <Button id="itemgrupbtn">Three</Button>
                <Button id="itemgrupbtn">Three</Button>
                <Button id="itemgrupbtn">Three</Button>
              </ButtonGroup>
            </Box>
          </Col>
          <Col xs={12} xl={9}>
            <div className="news">
              {/* <h2>User: </h2>
            {response.map((data, index) => {
              return (
                <Row id="userdata" key={index}>
                  <Col>{data.id}</Col>
                  <Col>{data.name}</Col>
                  <Col>{data.email}</Col>
                </Row>
              );
            })} */}

              <Carousel>
                <Carousel.Item interval={1000}>
                  <img className="itemcarousel d-block w-100" src={process.env.PUBLIC_URL + "images/badu.jpg"} alt="First slide" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img className="itemcarousel d-block w-100" src={process.env.PUBLIC_URL + "images/event1.jpg"} alt="Second slide" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="itemcarousel d-block w-100" src={process.env.PUBLIC_URL + "images/saiki.png"} alt="Third slide" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Listevent />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default DContent;
