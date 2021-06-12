import React, { useState } from "react";

const Button = ({ el, moveUp, remove }) => {
  const handleMoveUp = () => moveUp(el);
  const handleRemove = () => remove(el);
  const handleMouse = () => setIsShown(!isShown);
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      key={el.title}
      className="mb-5"
    >
      <label>
        <input
          type="checkbox"
          onChange={handleMoveUp}
          checked={el.isComplete}
        />
        {el.title}
      </label>{" "}
      {isShown && (
        <button onClick={handleRemove} className="btn btn-primary">
          Törlés
        </button>
      )}
    </div>
  );
};

export default Button;
