import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <section className="saved-movies">
        <MoviesCard
          nameRU="Я всё ещё здесь"
          duration={108}
          image="https://api.nomoreparties.co/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg"
        />
        <MoviesCard
          nameRU="Ламберт и Стэмп"
          duration={117}
          image="https://api.nomoreparties.co/uploads/images_f324307a7f.jpeg"
        />
        <MoviesCard
          nameRU="«Роллинг Стоунз» в изгнании"
          duration={61}
          image="https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg"
        />
        <MoviesCard
          nameRU="Я всё ещё здесь"
          duration={108}
          image="https://api.nomoreparties.co/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg"
        />
      </section>
    </>
  );
}

export default SavedMovies;
