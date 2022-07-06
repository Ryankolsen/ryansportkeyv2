import React from "react";
import { Button } from "react-bootstrap";
import "../styles/App.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { projectCarouselObjects } from "../helpers/project-carousel";

export default function Home() {
  return (
    <div>
      <Carousel
        projectCarouselObjects={projectCarouselObjects}
        numberSlides={5}
      />
      <div className="new-home__links">
        <div className="new-home__button">
          <Button href="https://main--astonishing-rolypoly-ad8c2b.netlify.app/">
            React API
          </Button>
        </div>
        <div className="new-home__button">
          <Button as={Link} to="/ReactPage">
            React Code/Apps
          </Button>
        </div>
        <div className="new-home__button">
          <Button as={Link} to="/About">
            About
          </Button>
        </div>
      </div>
    </div>
  );
}
