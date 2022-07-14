import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/App.css";

function Carousel({ projectCarouselObjects, numberSlides }) {
  const [currImg, setCurrImg] = useState(1);

  const numProjects = projectCarouselObjects.length;

  return (
    <div>
      <div className="carousel__carousel-container">
        {projectCarouselObjects.map((carouselObj) => {
          return (
            <div
              className={carouselObj.key === currImg ? "slide active" : "slide"}
              key={carouselObj.key}
            >
              {carouselObj.key === currImg ? (
                <>
                  <div className="carousel__carousel-header">
                    <h1 className="carousel__carousel-header__h1">
                      {carouselObj.projectTitle}
                    </h1>
                    <p className="carousel__carousel-header__p">
                      {carouselObj.projectDescriptions}
                    </p>
                  </div>

                  <div
                    className="carousel__carousel-inner"
                    style={{
                      backgroundImage: `url(${carouselObj.image})`,
                    }}
                  >
                    <div
                      className="carousel__carousel-inner-left"
                      onClick={() => {
                        if (currImg === 1) {
                          setCurrImg(numProjects);
                        }
                        if (currImg > 1) {
                          setCurrImg(currImg - 1);
                        }
                      }}
                    >
                      <div className="carousel__carousel-inner__h1__div">
                        <h1
                          onKeyPress={() => {
                            if (currImg === numberSlides) {
                              setCurrImg(1);
                            }
                            if (currImg < numberSlides) {
                              setCurrImg(currImg + 1);
                            }
                          }}
                          tabIndex={0}
                          className="carousel__carousel-inner__h1"
                        >
                          &#8656;
                        </h1>
                      </div>
                    </div>
                    <div
                      className="carousel__carousel-inner-right"
                      onClick={() => {
                        if (currImg === numberSlides) {
                          setCurrImg(1);
                        }
                        if (currImg < numberSlides) {
                          setCurrImg(currImg + 1);
                        }
                      }}
                    >
                      <div className="carousel__carousel-inner__h1__div">
                        <h1
                          onKeyPress={() => {
                            if (currImg === numberSlides) {
                              setCurrImg(1);
                            }
                            if (currImg < numberSlides) {
                              setCurrImg(currImg + 1);
                            }
                          }}
                          tabIndex={0}
                          className="carousel__carousel-inner__h1"
                        >
                          &#8658;
                        </h1>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          );
        })}

        <div className="carousel__carousel-links">
          <div className="carousel__carousel-links-buttons ">
            <a
              href={projectCarouselObjects[
                currImg - 1
              ].links.firstLink.toString()}
            >
              <button className="button carousel__carousel-links-buttons-button">
                {projectCarouselObjects[currImg - 1].links.firstLinkButtonText}
              </button>
            </a>
          </div>
          {projectCarouselObjects[currImg - 1].links.secondLink ? (
            <div className="carousel__carousel-links-buttons ">
              <a
                href={projectCarouselObjects[
                  currImg - 1
                ].links.secondLink.toString()}
              >
                <button className="button carousel__carousel-links-buttons-button">
                  {
                    projectCarouselObjects[currImg - 1].links
                      .secondLinkButtonText
                  }
                </button>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
