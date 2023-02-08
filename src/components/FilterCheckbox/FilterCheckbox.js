import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter">
      <label className="switch">
        <input type="checkbox" className="filter__checkbox"></input>
      </label>
      <span className="filter__name">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
