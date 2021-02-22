import React, { useState } from "react";
import "./App.css";
import "./Wrapper.css";
import "./bootstrap-4.6.0-dist/css/bootstrap.min.css";

import { NavBar } from "./components/Navbar/Navbar";
import { MainBody, Loginned } from "./components/MainBody/MainBody";
import { SignIn } from "./components/SignIn";
import { AddNews, AddBlogs } from "./components/News/AllNews";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
  integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
  crossorigin="anonymous"
></link>;

function App() {
  const [login, setLogin] = useState("");
  const [isAuth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [userObj, setUser] = useState([]);
  return (
    <>
      <div className="Wrapper">
        <NavBar login={login} setAuth={setAuth} isAuth={isAuth} />
        <Switch>
          <Route path="/signIn">
            <SignIn
              login={login}
              setLogin={setLogin}
              password={password}
              setPassword={setPassword}
              isAuth={isAuth}
              setAuth={setAuth}
              userObj={userObj}
              setUser={setUser}
            />
          </Route>
          <Route path="/addNews">
            <AddNews />
          </Route>
          <Route path="/addBlogs">
            <AddBlogs userObj={userObj} setUser={setUser} />
          </Route>
          <Route path="/:type/">
            <MainBody
              isAuth={isAuth}
              setAuth={setAuth}
              userObj={userObj}
              setUser={setUser}
            />
          </Route>
          <Route path="/">
            <MainBody
              isAuth={isAuth}
              setAuth={setAuth}
              userObj={userObj}
              setUser={setUser}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
