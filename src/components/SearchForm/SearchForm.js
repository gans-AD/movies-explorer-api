import { useWindowWidth } from "@react-hook/window-size";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  const windowWidth = useWindowWidth();
  const mobileDisplay = windowWidth <= 685;

  return (
    <section className="search-form">
      <form name="searchMovies" className="search">
        <div className="search__input-wrapper">
          <div className="search__icon"></div>
          <input
            name="movies"
            type="search"
            placeholder="Фильм"
            className="search__input"
            required
          ></input>
          <button type="submit" className="search__button">
            Найти
          </button>
          {!mobileDisplay && <FilterCheckbox />}
        </div>
        {mobileDisplay && <FilterCheckbox />}
      </form>
    </section>
  );
}

export default SearchForm;
