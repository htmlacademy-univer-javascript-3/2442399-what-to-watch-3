import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ListFilms from '../../components/list-films/list-films';
import ListGenres from '../../components/list-genres/list-genres';
import { useAppSelector } from '../../hooks';
import { Film, Genre } from '../../const';
import { ShowMore } from '../../components/show-more/show-more';

export function MainPage(): JSX.Element {
  const filteredFilms : Film[] = useAppSelector((state) => state.filmsByGenre);
  const filmCount = useAppSelector((state) => state.filmsByGenre.length);
  const visibleFilmCount = useAppSelector((state) => state.visibleFilmCount);
  const firstFilm = filteredFilms[0];
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={firstFilm?.previewImage}
            alt={firstFilm?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={firstFilm?.previewImage}
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{firstFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{firstFilm?.genre}</span>
                <span className="film-card__year">{firstFilm?.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ListGenres />
          <ListFilms films={filteredFilms?.slice(0, visibleFilmCount)} />
          {console.log(filmCount, visibleFilmCount)}
          {filmCount > visibleFilmCount ? <ShowMore /> : ''}
        </section>
        <Footer />
      </div>
    </>
  );
}
