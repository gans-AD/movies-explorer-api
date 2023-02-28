import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const [isLiked, setIsLiked] = React.useState(false);
  const location = useLocation();

  const pathSavedMovies = location.pathname === "/saved-movies";

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <article className="movie__card">
      <div className="movie__info">
        <h2 className="movie__title">{props.nameRU}</h2>
        <p className="movie__duration">
          {Math.trunc(props.duration / 60)}ч {props.duration % 60}м
        </p>
        <button
          type="button"
          className={`like ${
            pathSavedMovies
              ? "like_saved-movies"
              : isLiked
              ? "like_activated"
              : "like_disactivated"
          }`}
          aria-label="кнопка нравиться"
          onClick={handleLikeClick}
        ></button>
      </div>
      <img
        className="movie__image"
        src={props.image}
        alt={`обложка фильма "${props.nameRU}"`}
      ></img>
    </article>
  );
}

export default MoviesCard;
