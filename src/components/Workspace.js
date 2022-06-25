import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Col, Row } from "@themesberg/react-bootstrap";
import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "./Widgets";

import { Announcement } from "./Announcement";
import { Member } from "./Member";

export default function Workspace(props) {
  const navigate = useNavigate();
  const [event, setEvent] = useState("");
  const [eventData, setEventData] = useState([]);

  const baseUrl = "https://api.adicara.kiarta.id/api";
  const token = sessionStorage.getItem("token");
  let { id } = useParams();

  var config = {
    method: "get",
    url: baseUrl + "/event/" + id,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios(config)
      .then((res) => {
        console.log(res.data.data);
        setEvent(res.data.data);
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

  useEffect(() => {
    axios.get(`http://localhost:3004/EO`).then((result) => {
      console.log("datas => ", result.data);
      setEventData(result.data);
    });
  }, []);

  return (
    <div className="content">
      <Row className="mb-0">
        <Col xs={12} xl={8} className="mb-0">
          <Row>
            <Col xs={12} sm={12} xl={12} className="mb-4">
              <div className="workitem">
                <Row>
                  <Col xl={6} className="worktitle">
                    <h1> {event.nama_event}</h1>
                    <hr />
                    <h6>{event.deskripsi_event}</h6>
                  </Col>
                  <Col></Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} xl={12}>
              <Row className="mb-0">
                <Col xs={12} lg={4}>
                  <TeamMembersWidget />
                </Col>

                <Col xs={12} lg={8}>
                  <Announcement />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12} xl={4}>
          <Row className="mb-0">
            <Col xs={12}>
              <ProgressTrackWidget />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        {eventData.map((data) => {
          return (
            <Col className="mb-4" xs={6} sm={4} xl={3}>
              <Card className="workitem">
                <CardActionArea
                  id="btnsie"
                  onClick={() => {
                    navigate(`kanban`);
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.sieName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions id="infotask">
                  <h2>
                    {data.check}/{data.uncheck}
                  </h2>
                </CardActions>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
