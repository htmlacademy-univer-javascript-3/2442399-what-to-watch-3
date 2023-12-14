import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInPage } from '../../pages/sign-in-page/sign-in-page';
import MovieInListPage from '../../pages/movie-in-list-page/movie-in-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../enums/authorization-status/authorization-status';
import MovieReviewsPage from '../../pages/movie-reviews-page/movie-reviews-page';
import MovieDetailsPage from '../../pages/movie-details-page/movie-details-page';
import { useAppSelector } from '../../hooks';
import { MainPage } from '../../pages/main-page/main-page';
import { Spinner } from '../spinner/spinner';


function App(props: AppProps): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const isLoading = useAppSelector((state) => state.dataIsLoading);

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' />
        <Route index element={<MainPage />}/>
        <Route path='login' element={<SignInPage />} />
        <Route path='mylist' element={<PrivateRoute ><MovieInListPage films={props.films}/></PrivateRoute>}/>
        <Route path="films">
          <Route path=":id" element={<MoviePage films={films}/>} >
            <Route path="review" element={<MovieReviewsPage films={films}/>} />
            <Route path="details" element={<MovieDetailsPage />}/>
          </Route>
        </Route>
        <Route path="player">
          <Route path=":id" element={<PlayerPage films={films}/>} />
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
