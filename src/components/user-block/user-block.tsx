import { AuthorizationStatus } from "../../const";
import { Link } from "react-router-dom";
import { logoutAction } from "../../store/api-actions";
import { useAppDispatch, useAppSelector } from "../../hooks";

export function UserBlock() : JSX.Element {
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    const userData = useAppSelector((state) => state.userData);
    const dispatch = useAppDispatch();

    const handleSignOutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        dispatch(logoutAction());
    };

    return (
        <>
            {authorizationStatus === AuthorizationStatus.Auth ?
                <>
                    <ul className="user-block">
                        <li className="user-block__item">
                            <div className="user-block__avatar">
                                <img
                                    src={userData?.avatarUrl}
                                    alt="User avatar"
                                    width="{63}"
                                    height="{63}"
                                />
                            </div>
                        </li>
                        <li className="user-block__item">
                            <a className="user-block__link" onClick={handleSignOutClick}>Sign out</a>
                        </li>
                    </ul>
                </>
                :
                <div className='user-block'>
                    <Link to={'/login'} className="user-block__link">Sign in</Link>
                </div>
            }
        </>
    );
}