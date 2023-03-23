import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Count = ({ count, increase, decrease, id }) => {
  console.log(123);

  return (
    <div className="count">
      <button
        className="count__up"
        type="button"
        onClick={() => {
          increase(id);
        }}
      >
        <AiOutlineMinus />
      </button>
      <input
        className="count__input"
        type="number"
        min="1"
        max="100"
        value={1}
        onChange={(e) => {
          changeValue(id, +e.target.value);
        }}
      />
      <button
        className="count__down"
        type="button"
        onClick={() => {
          decrease(id);
        }}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default Count;
