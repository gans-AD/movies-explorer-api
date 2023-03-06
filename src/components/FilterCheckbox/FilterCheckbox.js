import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  const [checked, setChecked] = React.useState(false);

  function handleChangeCheckbox() {
    setChecked(!checked);
  }

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__checkbox"
        checked={checked}
        onChange={handleChangeCheckbox}
      ></input>
      <div className="switch__slider"></div>
      <span className="switch__name">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
