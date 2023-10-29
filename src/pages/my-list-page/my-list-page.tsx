import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ListFilms from "../../components/list-films/list-films";
import { Film } from "../../mocks/films";

type MyListPageProps = {
  films: Film[]
}

function MyListPage({films} :MyListPageProps): JSX.Element {
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
