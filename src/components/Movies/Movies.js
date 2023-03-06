import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
      <button type="button" className="button-more">Ещё</button>
    </main>
  );
}

export default Movies;
