import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

import Footer from "../Footer/Footer.js";
import Header from "../Header/Header";
import Main from "../Main/Main";
import PageNotFound from "../PageNotFound/PageNotFound";
import Preloader from "../Preloader/Preloader";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import auth from "../../utils/MainApi";

function App() {
  const history = useHistory();
  const location = useLocation();

  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoader, setIsLoader] = React.useState(false);
  const [isNavigationOpen, setNavigationOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  //валидация токена
  const validateToken = () => {
    auth
      .tokenCheck()
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //проверяем наличие сохранненого токена
  //и перенаправляем в "/"
  React.useEffect(() => {
    validateToken();
    loggedIn ? history.push("/") : history.push("/signin");
  }, [history, loggedIn]);

  React.useEffect(() => {
    closeNavigation();
  }, [location.pathname]);

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

  //Регистрация нового пользователя
  const onRegister = (data) => {
    setIsLoader(true);
    auth
      .register(data)
      .then(() => {
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoader(false);
      });
  };

  //авторизация пользователя
  const onLogin = (data) => {
    auth
      .authorize(data)
      .then((res) => {
        validateToken();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoader(false);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
          <Header
            onRegBtn={redirectSignUp}
            onLoginBtn={redirectSignIn}
            onProfileBtn={redirectProfile}
            onMenuBtn={handleMenuBtnClick}
            onCloseNav={closeNavigation}
            isOpenNav={isNavigationOpen}
          />
        </Route>
        <Switch>
          <Route exact path="/">
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute exact path="/movies">
            <Movies />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path="/saved-movies">
            <SavedMovies />
            <Navigation
              onClose={closeNavigation}
              isOpen={isNavigationOpen}
              onProfileBtn={redirectProfile}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile">
            <Profile />
          </ProtectedRoute>
          <Route exact path="/signin">
            <Login onLogin={onLogin} />
          </Route>
          <Route exact path="/signup">
            <Register onRegister={onRegister} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Preloader isOpen={isLoader} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
