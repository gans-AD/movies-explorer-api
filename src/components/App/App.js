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

function App() {
  const [isNavigationOpen, setNavigationOpen] = React.useState(false);

  const history = useHistory();

  const redirectSignUp = () => {
    history.push("/signup");
  };

  const redirectSignIn = () => {
    history.push("/signin");
  };

  const redirectProfile = () => {
    history.push("/profile");
  };

  // открывние меню
  const handleMenuBtnClick = () => {
    setNavigationOpen(true);
  };

  // закрытие меню
  const closeNavigation = () => {
    setNavigationOpen(false);
  };

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header onRegBtn={redirectSignUp} onLoginBtn={redirectSignIn} />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/movies">
          <Header
            onProfileBtn={redirectProfile}
            onMenuBtn={handleMenuBtnClick}
          />
          <Movies />
          <Navigation
            onClose={closeNavigation}
            isOpen={isNavigationOpen}
            onProfileBtn={redirectProfile}
          />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header onProfileBtn={redirectProfile} />
          <SavedMovies />
          <Navigation />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Header onProfileBtn={redirectProfile} />
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
