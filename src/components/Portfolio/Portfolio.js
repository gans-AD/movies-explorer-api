import "./Portfolio.css";

function Portfolio() {
  return (
    <article className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://gans-ad.github.io/how-to-learn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <p className="portfolio__link-icon">↗</p>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://gans-ad.github.io/russian-travel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__link-text">
              Адаптивный сайт
            </p>
            <p className="portfolio__link-icon">↗</p>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://mestechko.nomoredomains.icu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <p className="portfolio__link-icon">↗</p>
          </a>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
