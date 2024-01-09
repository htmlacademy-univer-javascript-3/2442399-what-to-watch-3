import {Navigate} from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
    children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps){
  const authorizationStatus = useAppSelector((store) => store.authorizationStatus);
  return(
    authorizationStatus === 'AUTH' ? children : <Navigate to='/login'/>
  );
}

export default PrivateRoute;
