import "./AboutMe.css";

function AboutMe() {
  return (
    <article className="about-me" id="about-me" >
      <div className="about-me__info">
        <h2 className="about-me__title">Антон</h2>
        <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__text">
          Я&nbsp;по&nbsp;образованию инженер строитель, проектирую автомобильные
          дороги. У&nbsp;меня есть жена и&nbsp;сын. Увлекаюсь судомодельным
          спортом. По&nbsp;совместительству работаю педагогом на&nbsp;станции
          юных техников, преподаю судомоделизм. На&nbsp;курс веб-разработки
          пошёл не&nbsp;для того, чтобы сменить работу, а&nbsp;потому что
          захотелось попробовать себя в&nbsp;чем-то новом. Надеюсь что
          полученные знания позволят мне создавать различные приложения, которые
          будут помогать мне как инженеру и&nbsp;как педагогу.
        </p>
        <a 
        className="about-me__link"
        href="https://github.com/gans-AD?tab=repositories" 
        target="_blank"
        rel="noopener noreferrer">Github</a>
      </div>
      <div className="about-me__photo"></div>
    </article>
  );
}

export default AboutMe;
