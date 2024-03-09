import React from "react";
import { reviews } from "../../data";
import "./Review.css";

const Review = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div>
          <h2
            className="text-orange font-medium justify-center flex"
            style={{ fontSize: 22 }}
          >
            {reviews.title}
          </h2>
          <p className="text-4xl font-semibold mb-4 flex justify-center pt-4 pb-8">
            {reviews.subtitle}
          </p>
        </div>

        <div className="container mx-auto flex justify-between">
          {reviews.persons.map((person, index) => (
            <div key={index} className="relative">
              {/* Background image */}
              <div
                className="background"
                style={{ backgroundImage: `url(${person.background.type})` }}
              >
                <div className="overlay-box">
                  <div className="avatar-wrapper">
                    <div className="avatar">
                      <img src={person.avatar.type} alt={person.name} />
                    </div>
                  </div>

                  <p
                    className="font-semibold justify-center flex"
                    style={{ fontSize: 22 }}
                  >
                    {person.name}
                  </p>
                  <p
                    className="font-thin justify-center flex"
                    style={{ fontSize: 14 }}
                  >
                    {person.nickname}
                  </p>
                  <p className="comment font-normal justify-center flex">
                    {person.comment}
                  </p>

                  <div
                    className="star-ratings justify-center flex"
                    style={{ color: "#F6B76F" }}
                  >
                    {Array.from({ length: person.vote }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                    {Array.from({ length: 5 - person.vote }).map((_, index) => (
                      <span key={index}>☆</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
