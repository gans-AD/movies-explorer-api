import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="about-project">
      <article className="two-columns">
        <div className="two-columns__column">
          <h3 className="two-columns__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="two-columns__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div className="two-columns__column">
          <h3 className="two-columns__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="two-columns__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
        
      </article><div className="timeline">
          <div>
            <div className="timeline__duration timeline__duration_green">1 неделя</div>
            <div className="timeline__description">Back-end</div>
          </div>
          <div>
            <div className="timeline__duration">4 недели</div>
            <div className="timeline__description">Front-end</div>
          </div>
        </div>
    </div>
  );
}

export default AboutProject;
