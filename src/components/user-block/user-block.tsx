import { AuthorizationStatus } from '../../const';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Spinner } from '../spinner/spinner';

export function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };


  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  } else if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src={userData?.avatarUrl}
              alt="User avatar"
              width="{63}"
              height="{63}"
              onClick={() => navigate('/mylist')}
            />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link" onClick={handleSignOutClick}>Sign out</a>
        </li>
      </ul>
    );
  }
  return (
    <div className='user-block'>
      <Link to={'/login'} className="user-block__link">Sign in</Link>
    </div>
  );
}
