import { ADD_CHOCOLATE, BUY_CHOCOLATE } from "./chocolateTypes";

const initialState = {
  numOfChocolates: 50,
};

const chocolateReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      return {
        ...state,
        numOfChocolates: state.numOfChocolates - 1,
      };
    case ADD_CHOCOLATE:
      return {
        ...state,
        numOfChocolates: state.numOfChocolates + 1,
      };
    default:
      return state;
  }
};

export default chocolateReducer;
