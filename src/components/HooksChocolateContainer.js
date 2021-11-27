import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addChocolate, buyChocolate } from "../redux";

function HooksChocolateContainer() {
  const numOfChocolates = useSelector(
    (state) => state.chocolate.numOfChocolates
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Chocolates - {numOfChocolates}</h2>
      <button onClick={() => dispatch(buyChocolate())}>
        Buy Chocolate
      </button>{" "}
      <button onClick={() => dispatch(addChocolate())}>Add Chocolate</button>
    </div>
  );
}

export default HooksChocolateContainer;
