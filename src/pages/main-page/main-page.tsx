import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ListFilms from '../../components/list-films/list-films';
import ListGenres from '../../components/list-genres/list-genres';
import { useAppSelector } from '../../hooks';
import { Film } from '../../const';
import { ShowMore } from '../../components/show-more/show-more';
import { useEffect } from 'react';
import { checkAuthAction, loadFilmsAction } from '../../store/api-actions';
import { loadPromoFilm } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { MyListLink } from '../../components/my-list-link/my-list-link';

export function MainPage(): JSX.Element {
  const filteredFilms = useAppSelector((state) => state.filmsByGenre);
  const filmCount = useAppSelector((state) => state.filmsByGenre?.length);
  const visibleFilmCount = useAppSelector((state) => state.visibleFilmCount);
  const firstFilm = useAppSelector((state) => state.promoFilm);
  const myListFilms = useAppSelector((state) => state.myListFilms);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(loadPromoFilm());
      dispatch(checkAuthAction(userData));
  }, [dispatch, userData]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={firstFilm?.posterImage} alt={firstFilm?.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={firstFilm?.posterImage} alt={firstFilm?.name}
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
                <Link className="btn btn--play film-card__button" to={`/player/${firstFilm?.id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListLink count={myListFilms?.length}/>
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

          {filmCount > visibleFilmCount ? <ShowMore /> : ''}
        </section>
        <Footer />
      </div>
    </>
  );
}
