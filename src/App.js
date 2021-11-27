import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import HooksChocolateContainer from "./components/HooksChocolateContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <HooksChocolateContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
