import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>404 Not Found </h1>
      <Link to='/' title='/'>
            Home
      </Link>{' '}
    </>
  );
}

export default NotFoundPage;
