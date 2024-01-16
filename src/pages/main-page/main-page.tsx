import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ListFilms from '../../components/list-films/list-films';
import ListGenres from '../../components/list-genres/list-genres';
import { useAppSelector } from '../../hooks';
import { ShowMore } from '../../components/show-more/show-more';
import { useEffect } from 'react';
import { checkAuthAction } from '../../store/api-actions';
import { loadPromoFilm } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { changeFilmFavoriteStatus } from '../../store/api-actions';

export function MainPage(): JSX.Element {
  const filteredFilms = useAppSelector((state) => state.filmsByGenre);
  const filmCount = useAppSelector((state) => state.filmsByGenre?.length);
  const visibleFilmCount = useAppSelector((state) => state.visibleFilmCount);
  const firstFilm = useAppSelector((state) => state.promoFilm);
  const countListFilms = useAppSelector((state) => state.myListFilms.length);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const handleOnClick = () => {
    dispatch(changeFilmFavoriteStatus({id: id, status: +!film?.isFavorite}));
  };

  useEffect(() => {
    dispatch(loadPromoFilm());
    dispatch(checkAuthAction(userData));
  }, [dispatch]);

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
                {
                  authorizationStatus === AuthorizationStatus.Auth
                  &&
                  <button className="btn btn--list film-card__button" onClick={handleOnClick}>
                    {firstFilm?.isFavorite ?
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#in-list"></use>
                      </svg>
                      :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>}
                    <span>My list</span>
                    <span className="film-card__count">{countListFilms}</span>
                  </button>
                }
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
