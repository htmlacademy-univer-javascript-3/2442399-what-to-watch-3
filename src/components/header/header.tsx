import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
}

function Header({ authorizationStatus }: HeaderProps): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link className="logo__link" to={'/'}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {authorizationStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="{63}"
                height="{63}"
              />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
        :
        <div className='user-block'>
          <Link to={'/login'} className="user-block__link">Sign in</Link>
        </div>}
    </header>

  );
}

export default Header;
