import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Container } from "react-bootstrap";

import DisplayList from "./DisplayList";
import { certificates } from "../helpers/certificates-about";
import fauImg from "../media/fau2.png";

function About() {
  const fauMIS =
    "https://business.fau.edu/undergraduate/majors/management-information-systems/";
  const fauBus = "https://business.fau.edu/";
  const scCodesMain = "https://learning.sccodes.org/library/";

  return (
    <div>
      <Container className="">
        <div className="about__container-h1">
          <h1 className="about__container__h1">About</h1>
        </div>
      </Container>

      <Container className="about__accordion-container">
        <div className="about__accordion-about">
          <Card className="about__accordion-body__container-top">
            <div className="about__accordion-header">About this Website</div>
            <div>
              <Card.Body className="about__accordion-body">
                <Card.Text>
                  This website was designed using Vite and react hosted on
                  Netlify using continuous deployment with Github. The react
                  page connects to a MongoDB using Netlify Serverless Functions.
                  Thanks for visiting and here is a link to the code:
                </Card.Text>
                <Button
                  className="mb-3"
                  href="https://github.com/Ryankolsen/ryansportkeyv2"
                >
                  Code
                </Button>
                <Card.Text>
                  Please see below for my Degrees and Certifications
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className="about__accordion-body__container-bottom">
            <div className="about__accordion-header">About Ryan</div>

            <div>
              <Card.Body className="about__accordion-body">
                <Card.Text>
                  After achieving my second Bachelor's degree majoring in
                  Management Information Systems in 2013 I fell in love with
                  software engineering. I started coding with Java SE. Next I
                  expanded my languages to include Python, JavaScript, JSON,
                  HTML/CSS, SQL, C#, ASP.Net and I kept going from there.
                </Card.Text>
                <Card.Text>
                  Lately I have really enjoyed building apps with React I.
                  genuinely love breaking larger applications down into small,
                  manageable components and working to find the most efficient
                  and effective solution.
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
      </Container>

      <Row className="about__eduRow">
        <div className="about__eduCard mt-3 mb-5">
          <Card style={{ height: "355px" }}>
            <Card.Header className="about__fauCard">
              Florida Atlantic University
            </Card.Header>
            <Card.Body className="about__edu-card-body ">
              <Card.Title className="__about-degree-title">
                Bachelor’s of Business Admin Cum Laude
              </Card.Title>
              <Card.Text className="about__card-text">
                Major: Management Information Systems, Completed 2013
              </Card.Text>
              <Card.Title className="__about-degree-title mt-3">
                Courses Included:
              </Card.Title>
              <Card.Text className="about__card-text">
                Java SE, Database, Social Media, Web Design, Data
                Communications, IT Security
              </Card.Text>
              <Button variant="primary" className="" href={fauMIS}>
                FAU MIS Program
              </Button>
              <img className="__about-fauImg" src={fauImg} alt="FAU Logo"></img>
            </Card.Body>
          </Card>
        </div>

        <div className="about__eduCard mt-3">
          <Card style={{ height: "355px" }}>
            <Card.Header className="about__fauCard">
              Florida Atlantic University
            </Card.Header>
            <Card.Body className="about__edu-card-body">
              <Card.Title className="__about-degree-title">
                Bachelor’s of Business Admin Cum Laude
              </Card.Title>
              <Card.Text className="about__card-text">
                Double Major: Business Admin and Marketing, Completed 2008{" "}
              </Card.Text>
              <Card.Title className="__about-degree-title mt-3">
                Courses Included:{" "}
              </Card.Title>
              <Card.Text className="about__card-text">
                International Marketing, Entrepreneurial, International
                Business, Supply Chain, Program Management
              </Card.Text>

              <Button variant="primary" className="" href={fauBus}>
                FAU Business Program
              </Button>
              <img className="__about-fauImg" src={fauImg} alt="FAU Logo"></img>
            </Card.Body>
          </Card>
        </div>
      </Row>

      <Card className="about__certCard mt-3 mb-3 ">
        <Card.Header className="__about-cert-card">
          <h2>Certificates</h2>
        </Card.Header>
        <Card.Body className="about__cert-body">
          <DisplayList key={"certList"} as="" items={certificates} />
          <div className="centeredButton">
            <Button variant="primary" className="" href={scCodesMain}>
              See the SC Codes Teaching Library
            </Button>
          </div>
        </Card.Body>
      </Card>

      <div
        className="p-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button as={Link} to="/">
          Home
        </Button>
      </div>
    </div>
  );
}

export default About;
