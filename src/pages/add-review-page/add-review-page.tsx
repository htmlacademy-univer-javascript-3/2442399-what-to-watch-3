import { Link, useParams } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import NotFoundPage from '../not-found-page/not-found-page';
import { loadFilmByID } from '../../store/api-actions';
import { useEffect } from 'react';
import { Logo } from '../../components/logo/logo';

function AddReviewPage(): JSX.Element {
  const {id} = useParams();
  const film = useAppSelector((state) => state.film);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id){
      dispatch(loadFilmByID(id));
    }
  }, [id, dispatch]);

  if (!film || !id) {
    return <NotFoundPage />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film.backgroundImage}
            alt={film.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReviewPage;
