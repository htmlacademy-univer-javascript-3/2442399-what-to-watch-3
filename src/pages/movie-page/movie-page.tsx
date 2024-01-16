import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ListFilms from '../../components/list-films/list-films';
import { Film, Overview } from '../../const';
import { Tab } from '../../components/tabs/tab';
import { overviews } from '../../mocks/overwies';
import { reviews } from '../../mocks/reviews';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import { loadFilmByID, loadReviewsByID, loadSimilarByID } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { MyListLink } from '../../components/my-list-link/my-list-link';

type MoviePageProps = {
  films: Film[];
}

function MoviePage({ films }: MoviePageProps): JSX.Element {
  const film = useAppSelector((state) => state.film);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const countMyList = useAppSelector((state) => state.myListFilms.length);
  
  useEffect(() => {
    if (id) {
      dispatch(loadFilmByID(id));
      dispatch(loadReviewsByID(id));
      dispatch(loadSimilarByID(id));
    }
  }, [dispatch, id]);

  if (!film || !id) {
    return (<NotFoundPage/>);
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
                <MyListLink count={countMyList}/>
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
