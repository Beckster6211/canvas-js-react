import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home/home";
import Birthday from "../birthday/birthday";
import Mickey from "../mickey/mickey";
import PandaTrex from "../pandaTrex/pandaTrex";

function Nav() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Home
    </Tooltip>
  );
  return (
    <Router>
      <div>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          bg="warning"
          variant="light"
        >
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Link to="/">
              <ReactBootStrap.Navbar.Brand>
                My Stress Relief
              </ReactBootStrap.Navbar.Brand>
            </Link>
          </OverlayTrigger>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <Link to="/birthday">
                <ReactBootStrap.Nav.Link href="/birthday">
                  No more stamps...
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/mickey">
                <ReactBootStrap.Nav.Link href="/mickey">
                  Everyones Favourite Mouse
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/why">
                <ReactBootStrap.Nav.Link href="/why">
                  Why?
                </ReactBootStrap.Nav.Link>
              </Link>
              {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Dank memes
              </ReactBootStrap.Nav.Link> */}
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        <Switch>
          <Route path="/birthday">
            <Birthday />
          </Route>
          <Route path="/mickey">
            <Mickey />
          </Route>
          <Route path="/why">
            <PandaTrex />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;
