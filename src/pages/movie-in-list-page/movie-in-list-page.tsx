import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import ListFilms from '../../components/list-films/list-films';
import ListGenres from '../../components/list-genres/list-genres';
import { Film } from '../../const';
import { useAppSelector } from '../../hooks';
import { UserBlock } from '../../components/user-block/user-block';

function MovieInListPage(): JSX.Element {
  const userData = useAppSelector((state) => state.userData);
  const myListFilms = useAppSelector((state) => state.myListFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link className="logo__link" to={'/'}>
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">
            My list <span className="user-page__film-count">{myListFilms.length}</span>
        </h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ListFilms films={myListFilms} />
      </section>
      <Footer />
    </div>
  );
}

export default MovieInListPage;
