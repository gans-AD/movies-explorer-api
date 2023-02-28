import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList() {
  return (
    <section className="movie__list">
      <MoviesCard
        nameRU="«Роллинг Стоунз» в изгнании"
        duration={61}
        image="https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg"
      />
      <MoviesCard
        nameRU="Я всё ещё здесь"
        duration={108}
        image="https://api.nomoreparties.co/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg"
      />
      <MoviesCard
        nameRU=	"Горькое озеро"
        duration={136}
        image="https://api.nomoreparties.co//uploads/zagruzhennoe_4_63633dbd00.jpeg"
      />
      <MoviesCard
        nameRU="«Роллинг Стоунз» в изгнании"
        duration={61}
        image="https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg"
      />
      <MoviesCard
        nameRU="Я всё ещё здесь"
        duration={108}
        image="https://api.nomoreparties.co/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg"
      />
      <MoviesCard
        nameRU="Ламберт и Стэмп"
        duration={117}
        image="https://api.nomoreparties.co/uploads/images_f324307a7f.jpeg"
      />
      <MoviesCard
        nameRU="«Роллинг Стоунз» в изгнании"
        duration={61}
        image="https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg"
      />
      <MoviesCard
        nameRU="Я всё ещё здесь"
        duration={108}
        image="https://api.nomoreparties.co/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg"
      />
      <MoviesCard
        nameRU="Ламберт и Стэмп"
        duration={117}
        image="https://api.nomoreparties.co/uploads/images_f324307a7f.jpeg"
      />
    </section>
  );
}

export default MoviesCardList;
