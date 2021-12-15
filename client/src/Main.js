import React from "react";
import App from "./App";
import AppMobile from "./AppMobile";
import { useWindowSize } from "./hooks/useWindowSize";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function Main() {
  const width = useWindowSize();
  return (
    <Provider store={store}>{width >= 768 ? <App /> : <AppMobile />}</Provider>
  );
}
