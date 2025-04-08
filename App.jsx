import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainere from "./components/IceCreamContainere";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <HookCakeContainer />
        <CakeContainer />
        <IceCreamContainere />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
