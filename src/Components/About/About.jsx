import React from "react";
import "./About.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Commons/Footer/Footer";


function About(props) {
  return (
    <>
      <Helmet>
        <title>Store | About</title>
      </Helmet>
      {/* about */}
      <div className="about">
        <div className="container">
          <h1>ABOUT US</h1>
          <div className="content">
            <Row>
              <Col xs={12} md={5}>
                <img
                  src="https://unrivaled-otter-0d293c.netlify.app/static/media/5078a05eb1b6847d93383eaa4c0ed500.c9a88b5a2e8d1c0a93bb.gif"
                  alt="about img"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                />
              </Col>
              <Col xs={12} md={7}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  enim doloribus velit laudantium nobis harum tempore voluptatem
                  labore! Sit, id! Aspernatur illo harum, adipisci cupiditate
                  delectus quod atque culpa expedita!
                </p>
                <p>
                  Quo incidunt laudantium perspiciatis error nesciunt distinctio
                  nemo velit a, aut sapiente, neque rerum at libero expedita
                  doloribus accusantium consectetur. Ullam sunt nulla accusamus
                  aliquam, aut tempore facere dolore dicta ex labore impedit
                  praesentium fuga,
                </p>
                <button className="btn contact" title="contact us">
                  <Link to="/contact">Contact Us</Link>
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
