import {Redirect, Route} from "react-router-dom";
import routes from "../../config/routes";
import PersistenceKeys from "../../config/persistenceKeys";

// FIXME:
const AuthRoute = ({component: Component, ...rest}: any) => {
  const token = localStorage.getItem(PersistenceKeys.SLACK_MESSAGE_AUTH_TOKEN)

  return token ? <Route component={Component} { ...rest } />
    : <Redirect to={routes.signIn()} />
}

export default AuthRoute
