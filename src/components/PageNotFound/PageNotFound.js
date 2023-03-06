import { Link } from "react-router-dom";
import "./PageNotFound.css"

function PageNotFound() {
    return(
        <main className="not-found">
            <h2 className="not-found__status">404</h2>
            <p className="not-found__text">Страница не найдена</p>
        <Link to="/" className="not-found__back">Назад</Link>
        </main>
        
    )
}

export default PageNotFound;