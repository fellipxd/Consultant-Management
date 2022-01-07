import "./App.scss";
import "./sass/custom.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import About from "./pages/About/About";
import Institutions from "./pages/Institutions/Institutions";
import InstitutionProfile from "./pages/InstitutionProfile/InstitutionProfile";
import Dashboard from "./pages/DashBoard/dashboard";

function App() {
 
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/about" component={About} />
        <Route exact path="/institutions" component={Institutions} />
        <Route exact path="/institution" component={InstitutionProfile} />
        <Dashboard />
      </Switch>
    </>
  );
}

export default App;
