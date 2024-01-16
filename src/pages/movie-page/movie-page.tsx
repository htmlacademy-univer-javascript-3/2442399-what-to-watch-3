import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ListFilms from '../../components/list-films/list-films';
import { Tab } from '../../components/tabs/tab';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import {useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import { changeFilmFavoriteStatus, loadFilmByID, loadReviewsByID, loadSimilarByID } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

function MoviePage(): JSX.Element {
  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const countMyList = useAppSelector((state) => state.myListFilms.length);

  const handleOnClick = () => {
    const result = !film?.isFavorite;
    dispatch(changeFilmFavoriteStatus({id: id, status: +result}));
  };

  useEffect(() => {
    if (id) {
      dispatch(loadFilmByID(id));
      dispatch(loadReviewsByID(id));
      dispatch(loadSimilarByID(id));
    }
  }, [dispatch, id]);

  if (!film || !id) {
    return (<NotFoundPage />);
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.backgroundImage}
              alt={film.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link className="btn btn--play film-card__button" to={`/player/${id}`}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {
                  authorizationStatus === AuthorizationStatus.Auth
                  &&
                  <button className="btn btn--list film-card__button" onClick={() => handleOnClick()}>
                    {film.isFavorite ?
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#in-list"></use>
                      </svg>
                      :
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>}
                    <span>My list</span>
                    <span className="film-card__count">{countMyList}</span>
                  </button>
                }

                {authorizationStatus === AuthorizationStatus.Auth
                  &&
                  <Link to={`/films/${id}/review`} className="btn film-card__button">
                    Add review
                  </Link>}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width={218}
                height={327}
              />
            </div>
            <Tab />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <ListFilms films={similarFilms.slice(0, 4)} />
        </section>
        <Footer />
      </div>
    </>
  );
}
export default MoviePage;
