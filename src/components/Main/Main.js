import "./Main.css";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Description from "../Description/Description";
import NavTab from "../NavTab/NavTab";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

function Main() {
  return (
    <div className="main">
      <Promo />
      <NavTab />
      <Description title="О проекте">
        <AboutProject />
      </Description>
      <Description title="Технологии">
        <Techs />
      </Description>
      <Description title="Студент">
        <AboutMe />
      </Description>
      <Portfolio />
    </div>
  );
}

export default Main;
