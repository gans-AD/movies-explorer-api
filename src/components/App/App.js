import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header";
import Main from "../Main/Main";
import PageNotFound from "../PageNotFound/PageNotFound"


function App() {
  return (
    
    <div className="page">      
      <Switch>        
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>      
    </div>
    
  );
}

export default App;
