import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import IndividualMovie from "./movies/IndividualMovie";
import { landingPageDTO, movieDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";
import Button from "./utils/Button";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./movies/LandingPage";
import routes from "./route-config";
import configureValidations from "./validation";
import { claim } from "./auth/auth.model";
import AuthenticationContext from "./auth/AuthenticationContext";

configureValidations();

function App()
{
  const [claims, setClaims] = useState<claim[]>([{ name: 'email', value: 'patryk@gmail.com' }]);


  return (
    <>
      <BrowserRouter>
        <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
          <Menu />
          <div className="container">
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} exact={route.exact}>
                  <route.component />
                </Route>
              ))}
            </Switch>
          </div>
          <footer className="bd-footer py-5 mt-5 bg-light">
            <div className="container">
              FilmwebClone {new Date().getUTCFullYear().toString()}
            </div>
          </footer>
        </AuthenticationContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
