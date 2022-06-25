import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../App.css";

function ListEvent() {
  const navigate = useNavigate();
  const [listEvent, setListEvent] = useState([]);

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
        console.log(res);
        console.log(res.data.events);
        setListEvent(res.data.events);
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
        {listEvent.map((data, index) => {
          return (
            <Col md={4} id="listevent">
              <Card
                id="itemevent"
                sx={{ Width: 345 }}
                onClick={() => {
                  navigate(`${data.id}/workspace`);
                }}
              >
                <CardActionArea>
                  <CardMedia component="img" height="140" image={process.env.PUBLIC_URL + "images/semarak.jpg"} alt="green iguana" />
                  <CardContent>
                    <Typography id="judulfilm" gutterBottom variant="h5" component="div">
                      {data.nama_event}
                    </Typography>
                    <Typography id="judulfilm" variant="body2" color="text.secondary">
                      {data.deskripsi_event}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Info
                  </Button>
                </CardActions>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ListEvent;
