import "./App.css";
import { Route } from "react-router-dom";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <div className="page">
      <Header />
      <Route path="/" component={Main} /> 
      <Footer />
    </div>
  );
}

export default App;
