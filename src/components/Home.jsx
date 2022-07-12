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
          <a href="https://main--astonishing-rolypoly-ad8c2b.netlify.app/">
            <button className="button">React API</button>
          </a>
        </div>
        <div className="new-home__button">
          <Link to="/ReactPage">
            <button className="button" as={Link} to="/About">
              React Code/Apps
            </button>
          </Link>
        </div>
        <div className="new-home__button">
          <Link to="/About">
            <button className="button" as={Link} to="/About">
              About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
