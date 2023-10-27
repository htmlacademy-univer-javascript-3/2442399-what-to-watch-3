import {Navigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../enums/authorization-status/authorization-status';

type PrivateRouteProps = {
    children: JSX.Element;
    authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({children, authorizationStatus}: PrivateRouteProps){
  return(
    authorizationStatus === AuthorizationStatus.Authorized ? children : <Navigate to='/login'/>
  );
}

export default PrivateRoute;
