import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DisplayList({ items }) {
  return items.map((item) => {
    return (
      <ul className="certList list-group mb-3" key={item.id.toString()}>
        <li
          className="__about-cert-body list-group-item d-flex justify-content-between align-items-center"
          key={item.id.toString()}
        >
          <div className="__about-cert__container">
            <div>
              <h5 className="__about-cert-name">{item.name}</h5>
            </div>

            <div>
              <div className="about-cert-text-container">
                <h5 className="about-cert-text__h5">
                  Certificate Achieved From {item.from}
                </h5>
                <div className="__about-cert-text">Complete on {item.date}</div>
                <Link
                  className="__about-cert-text"
                  to={item.source}
                  target="blank"
                >
                  Download
                </Link>
              </div>
            </div>

            <div className="">
              <iframe title="myTitle" src={item.source}>
                <a href={item.source}>Certificate .pdf</a>
              </iframe>
            </div>
          </div>
        </li>
      </ul>
    );
  });
}
