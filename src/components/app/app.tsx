import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInPage } from '../../pages/sign-in-page/sign-in-page';
import MovieInListPage from '../../pages/movie-in-list-page/movie-in-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import { PlayerPage } from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { MainPage } from '../../pages/main-page/main-page';
import { Spinner } from '../spinner/spinner';
import AddReviewPage from '../../pages/add-review-page/add-review-page';


function App(): JSX.Element {
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
        <Route path='mylist' element={<PrivateRoute ><MovieInListPage /></PrivateRoute>}/>
        <Route path="films">
          <Route path=":id" element={<MoviePage />} />
          <Route path=":id/review" element={<PrivateRoute ><AddReviewPage /></PrivateRoute>} />
        </Route>
        <Route path="player">
          <Route path=":id" element={<PlayerPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
