import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ListFilms from '../../components/list-films/list-films';
import { Film } from '../../const';
import { useAppSelector } from '../../hooks';


function MyListPage(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ListFilms films={films}/>
      </section>
      <Footer />
    </div>
  );
}

export default MyListPage;
