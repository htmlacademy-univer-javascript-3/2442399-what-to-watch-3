import MainPage from '../../pages/main-page/main-page';
import { MainProps } from '../../pages/main-page/main-page';

type AppProps = MainProps;

function App(props : AppProps): JSX.Element {
  return (
    <MainPage {...props} />
  );
}

export default App;
