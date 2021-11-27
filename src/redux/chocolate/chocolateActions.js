import { BUY_CHOCOLATE, ADD_CHOCOLATE } from "./chocolateTypes";

export const buyChocolate = () => {
  return {
    type: BUY_CHOCOLATE,
  };
};

export const addChocolate = () => {
  return {
    type: ADD_CHOCOLATE,
  };
};
