import React, { useState, useEffect, use } from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { Link, useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const navigate = useNavigate();
  
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const {id}=useParams();


  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZThmMmMyZTY0ODdhNjk1MzVhNTQyZmMzZTkwMWQ3OSIsIm5iZiI6MTc1NDg2NjU0NC4xMDUsInN1YiI6IjY4OTkyMzcwMzVlMGUyZDIxMDZkNmM2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u8KrcszC8mQR2Qt5RNpzfSTCZZH3Fbj9emASX9Ax_8k",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img onClick={()=>{
        navigate(-2)
      }} src={back_arrow} alt="" />
      <iframe
        allowFullScreen
        title="trailer"
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
      >
        {" "}
      </iframe>

      <div className="player-info">

      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>

      </div>

    </div>
  );
};

export default Player;
