import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header";
import Main from "../Main/Main";
import PageNotFound from "../PageNotFound/PageNotFound"
import Preloader from "../Preloader/Preloader"
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";


//const [isPreloadActive, setPreloadActive]=React.useState(false);
//const [isNavigationOpen, setNavigationOpen]=React.useState(false);

//setNavigationOpen(false);
//setPreloadActive(false);

function App() {
  return (    
    <div className="page">      
      <Switch>        
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies" >
          <Header />
          <Movies />
          <Navigation 
          />
          <Footer />
        </Route>
        <Route path="/saved-movies" >
         <Header />
          <SavedMovies />
          <Navigation 
          />
          <Footer />
        </Route>
        <Route path="/profile" ></Route>
        <Route path="/signin" ></Route>
        <Route path="/signup" ></Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Preloader />      
    </div>
    
  );
}

export default App;
