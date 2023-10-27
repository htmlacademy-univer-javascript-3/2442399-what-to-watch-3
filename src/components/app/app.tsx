import MainPage from '../../pages/main-page/main-page';
import { MainProps } from '../../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MovieInListPage from '../../pages/movie-in-list-page/movie-in-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../enums/authorization-status/authorization-status';
import MovieReviewsPage from '../../pages/movie-reviews-page/movie-reviews-page';

type AppProps = MainProps;

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' />
        <Route index element={<MainPage {...props} />} />
        <Route path='login' element={<SignInPage />} />
        <Route path='mylist' element={<PrivateRoute authorizationStatus={AuthorizationStatus.Unauthorized}><MovieInListPage/></PrivateRoute>}/>
        <Route path="films" >
          <Route path=":id" element={<MoviePage />} >
            <Route path="review" element={<MovieReviewsPage />} />
          </Route>
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
