import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/home";
import Birthday from "./components/birthday/birthday";
import Mickey from "./components/mickey/mickey";
import PandaTrex from "./components/pandaTrex/pandaTrex";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="min-vh-100">
          <div className="text-white, text-center">
            <nav className=".navbar-expand{-sm|-md|-lg|-xl|-xxl}">
              <div className="p-3 mb-2 bg-warning">
                <Link to="/">Home</Link>
                &nbsp;&nbsp;
                <Link to="/birthday">No more stamps</Link>
                &nbsp;&nbsp;
                <Link to="mickey">#1</Link>
                &nbsp;&nbsp;
                <Link to="pandaTrex">Why?</Link>
                &nbsp;&nbsp;
                <Link to="mickey">#1</Link>
                &nbsp;&nbsp;
                <Link to="pandaTrex">Why?</Link>
              </div>{" "}
            </nav>
          </div>
          <Switch>
            <Route path="/birthday">
              <Birthday />
            </Route>
            <Route path="/mickey">
              <Mickey />
            </Route>
            <Route path="/pandaTrex">
              <PandaTrex />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
