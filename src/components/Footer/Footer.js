import "./Footer.css";

function Footer() {
  const date = new Date();

  return (
    <footer className="footer">
      <h3 className="footer__info">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__navigation">
        <p className="footer__copyright">&copy; {date.getFullYear()}</p>
        <nav>
          <ul className="footer__links">
            <li>
              <a
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
