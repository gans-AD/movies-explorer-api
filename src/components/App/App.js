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
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const history = useHistory();
  const location = useLocation();

  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoader, setIsLoader] = React.useState(false);
  const [isNavigationOpen, setNavigationOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  /*  const [isInfoTooltip, setIsInfoTooltip] = React.useState({
      isOpen: false,
      invocation: "success",
      text: "",
    }) //в свойство invocation записывается success для сообщений об успешных действиях и error для сообщений об ошибках 
  */

  //валидация токена
  const validateToken = () => {
    setIsLoader(true);
    auth
      .tokenCheck()
      .then((res) => {
        setCurrentUser(res.data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setIsLoader(false);
      });
  };

  //загружаем информацию о карточках с сервера
  React.useEffect(() => {
    moviesApi.search(()=> {
      
    })
  })

  //проверяем наличие сохранненого токена
  //и перенаправляем в "/movies"
  React.useEffect(() => {

    if (location.pathname !== "/") {
      validateToken();

      loggedIn ? history.push("/movies") : console.log("нужно авторизоваться")//history.push("/login");
    }

  }, [history, loggedIn, location.pathname]);

  React.useEffect(() => {
    closeNavigation();
  }, [location.pathname]);

  const redirectSignUp = () => {
    history.push("/signup");
  };

  const redirectSignIn = () => {
    history.push("/login");
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
        history.push("/login");
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
        console.log("Валидация");
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
          </Route>
          <ProtectedRoute
            exact path="/movies"
            loggedIn={true}
            component={Movies}
          />
          <ProtectedRoute
            exact path="/saved-movies"
            loggedIn={true}
            component={SavedMovies}
          >
            <Navigation
              onClose={closeNavigation}
              isOpen={isNavigationOpen}
              onProfileBtn={redirectProfile}
            />
          </ProtectedRoute>
          <ProtectedRoute
            exact path="/profile"
            loggedIn={true}
            component={Profile}
          />

          <Route exact path="/login">
            <Login onLogin={onLogin} />
          </Route>
          <Route exact path="/signup">
            <Register onRegister={onRegister} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Route exact path={["/", "/movies", "/saved-movies"]}>
          <Footer />
        </Route>
        <InfoTooltip text="Указан неверный пароль или имя пользователя" />
        <Preloader isOpen={isLoader} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
