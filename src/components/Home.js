import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        {/* dekstop */}
        <div class="d-none d-md-block">
          <div class="row mt-4">
            <div class="col-md-3">
              <div>{/* <img src={process.env.PUBLIC_URL + "images/jum.png"} /> */}</div>
            </div>
            <div class="col-md-9">
              <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                  <div class="bg-transparant p-5 m-3">
                    <h1 class="display-4">Adicara Siap Bekerjasama demi Kesuksesan Event Saudara</h1>
                    <p class="lead">Memberikan penyelesaian masalah yang dihadapi ketika merancang event</p>

                    <a class="btn btn-outline-light btn-lg" href="#" role="button">
                      Mulai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div class="d-sm-block d-md-none">
          <div class="row mt-4">
            <div class="col-md-12">
              <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                  <div class="bg-transparant p-5 m-3">
                    <h1 class="display-4">Adicara Siap Bekerjasama demi Kesuksesan Event Saudara</h1>
                    <p class="lead">Memberikan penyelesaian masalah yang dihadapi ketika merancang event</p>

                    <a class="btn btn-outline-light btn-lg" href="#" role="button">
                      Mulai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* coursel */}
      <div className="carouselev">
        <Carousel variant="dark">
          <Carousel.Item>
            <Card className="bg-transparent">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "images/event1.jpg"} />
              <Card.Body>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="bg-transparent">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "images/event1.jpg"} />
              <Card.Body>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="bg-transparent">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "images/event1.jpg"} />
              <Card.Body>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
