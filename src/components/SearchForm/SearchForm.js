import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <form name="searchMovies" className="search">
        <div className="search__input-wrapper">
          <div className="search__icon"></div>
          <input name="movies" type="search" placeholder="Фильм" className="search__input"></input>
          <button type="button" className="search__button">Найти</button>
          <FilterCheckbox />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
