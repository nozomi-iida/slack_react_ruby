import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./scenes/SignIn";
import Home from "./scenes/Home";
import routes from "./config/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path={routes.signIn()} component={SignIn} />
      <Route exact path={routes.home()} component={Home} />
    </BrowserRouter>
  )
}

export default App
