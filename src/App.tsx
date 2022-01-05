import React from "react";
import Header from "./components/Header/Header";
import Router from "./router";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <Router />
    </div>
  );
}

export default App;
