import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import ButtonCounter from "./ButtonCounter";
import HeroesDisplay from "./HeroesDisplay";
import Carousel from "./Carousel";
import { projectCarouselObjects } from "../helpers/react-project-carousel";

const queryClient = new QueryClient();

const ReactPage = () => {
  return (
    <div>
      <Carousel
        projectCarouselObjects={projectCarouselObjects}
        numberSlides={4}
      />
      <div className="react_page__header-overline"></div>
      <QueryClientProvider client={queryClient}>
        <div className="react_page__container">
          <ButtonCounter />
          <HeroesDisplay />
        </div>
      </QueryClientProvider>

      <div className="react-page__home-button-container">
        <Link to="/">
          <button className="button">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ReactPage;
