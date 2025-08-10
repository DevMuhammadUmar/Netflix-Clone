import React, { useEffect, useRef,useState } from "react";
import "./TitleCards.css";
import card_data from "../../assets/cards/Cards_data";

const TitleCards = ({title,category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZThmMmMyZTY0ODdhNjk1MzVhNTQyZmMzZTkwMWQ3OSIsIm5iZiI6MTc1NDg2NjU0NC4xMDUsInN1YiI6IjY4OTkyMzcwMzVlMGUyZDIxMDZkNmM2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u8KrcszC8mQR2Qt5RNpzfSTCZZH3Fbj9emASX9Ax_8k'
  }
};


  const handWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handWheel);
  }, []);
  return (
    <div className="titlecards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" keyF={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
