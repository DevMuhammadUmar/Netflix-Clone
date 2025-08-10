import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import card_data from "../../assets/cards/Cards_data";

const TitleCards = ({title,category}) => {
  const cardsRef = useRef();
  const handWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handWheel);
  }, []);
  return (
    <div className="titlecards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {card_data.map((card, index) => {
          return (
            <div className="card" keyF={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
