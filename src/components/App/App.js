import "./App.css";
import Footer from "../Footer/Footer.js"
import Promo from "../Promo/Promo"
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Description from "../Description/Description";

function App() {
  return <div className="page">
    <Promo/>
    <NavTab/>
    <Description title="О проекте">
      <AboutProject />
    </Description>
    <Description title="Технологии"></Description>
    <Footer/>
    
  </div>;
}

export default App;
