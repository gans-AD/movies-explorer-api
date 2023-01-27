import React from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header";
import Main from "../Main/Main";
import PageNotFound from "../PageNotFound/PageNotFound";
import Preloader from "../Preloader/Preloader";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";

//const [isPreloadActive, setPreloadActive]=React.useState(false);
//const [isNavigationOpen, setNavigationOpen]=React.useState(false);

//setNavigationOpen(false);
//setPreloadActive(false);

function App() {
  const history = useHistory();

  const redirectSignUp = () => {
    history.push("signup");
  };

  const redirectSignIn = () => {
    history.push("signin");
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header onRegBtn={redirectSignUp} onLoginBtn={redirectSignIn}/>
          <Main />
          <Footer />
        </Route>
        <Route exact path="/movies">
          <Header />
          <Movies />
          <Navigation />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header />
          <SavedMovies />
          <Navigation />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Header />
          <Profile />
          <Navigation />
          <Footer />
        </Route>
        <Route exact path="/signin"></Route>
        <Route exact path="/signup"></Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Preloader />
    </div>
  );
}

export default App;
