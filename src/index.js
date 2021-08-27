import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/styles/theme.scss";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login/Login";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import MainPage from "./pages/MainPage/MainPage";
import Search from "./pages/Search/Search";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/main-page">
          <MainPage/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
