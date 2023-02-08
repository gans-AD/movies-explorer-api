import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter">
      <input type="checkbox" className="filter__checkbox"></input>;
      <span className="filter__name">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
