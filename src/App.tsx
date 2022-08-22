import { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./route-config";
import configureValidations from "./validation";
import { claim } from "./auth/auth.model";
import AuthenticationContext from "./auth/AuthenticationContext";

configureValidations();

function App()
{
  const [claims, setClaims] = useState<claim[]>([
    { name: 'email', value: 'patryk@gmail.com' },
    // { name: 'role', value: 'admin' }
  ]);

  function isAdmin()
  {
    return claims.findIndex(claim => claim.name === 'role' && claim.value === 'admin') > -1;
  }

  return (
    <>
      <BrowserRouter>
        <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
          <Menu />
          <div className="container">
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} exact={route.exact}>
                  {route.isAdmin && !isAdmin() ? <>
                    You are not allowed to see this page
                  </> :
                    <route.component />
                  }
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
