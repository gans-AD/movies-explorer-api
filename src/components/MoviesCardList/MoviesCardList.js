import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList(props) {
  

  return (
    <section className="movie-list">
      <MoviesCard
        nameRU="«Роллинг Стоунз» в изгнании"
        duration={61}
        image="https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg"
      />
     
    </section>
  );
}

export default MoviesCardList;
