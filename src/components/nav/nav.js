import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home/home";
import Birthday from "../birthday/birthday";
import Mickey from "../mickey/mickey";
import PandaTrex from "../pandaTrex/pandaTrex";
import Piper from "../piper/piper";
import GiveBlood from "../giveBlood/giveBlood";
import Xmas from "../xmas/xmas";
import XmasTree from "../xmasTree/xmasTree";
import XmasSnowman from "../xmasSnowman/xmasSnowman";
import Halloween from "../halloween/halloween";

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
          <Link to="/">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <ReactBootStrap.Navbar.Brand>
                My Stress Relief
              </ReactBootStrap.Navbar.Brand>
            </OverlayTrigger>
          </Link>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <Link to="/birthday">
                <ReactBootStrap.Nav.Link href="/birthday">
                  No more stamps
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
              <Link to="/butterfree">
                <ReactBootStrap.Nav.Link href="/butterfree">
                  #Thanks Piper
                </ReactBootStrap.Nav.Link>
              </Link>
              <Link to="/giveblood">
                <ReactBootStrap.Nav.Link href="/giveblood">
                  Give Blood/My tattoo design
                </ReactBootStrap.Nav.Link>
              </Link>
              {/* <Link to="/xmashouse">
                <ReactBootStrap.Nav.Link href="/xmashouse">
                  Merry Christmas
                </ReactBootStrap.Nav.Link>
              </Link> */}
              {/* drop down for xmas */}
              <ReactBootStrap.NavDropdown
                title="Christmas"
                id="basic-nav-dropdown"
              >
                <Link to="/xmashouse">
                  <ReactBootStrap.NavDropdown.Item href="/xmashouse">
                    Most wonderful time of the year
                  </ReactBootStrap.NavDropdown.Item>
                </Link>
                <Link to="/xmastree">
                  <ReactBootStrap.NavDropdown.Item href="/xmastree">
                    Lit up like a star
                  </ReactBootStrap.NavDropdown.Item>
                </Link>
                <Link to="xmassnowman">
                  <ReactBootStrap.NavDropdown.Item href="/xmassnowman">
                    He's a jolly happy soul
                  </ReactBootStrap.NavDropdown.Item>
                </Link>
                {/* <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Another action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  Something
                </ReactBootStrap.NavDropdown.Item> */}
                {/* <ReactBootStrap.NavDropdown.Divider /> */}
                {/* <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                  Separated link
                </ReactBootStrap.NavDropdown.Item> */}
              </ReactBootStrap.NavDropdown>
              <Link to="/halloween">
                <ReactBootStrap.Nav.Link href="/halloween">
                  True Coding Horror
                </ReactBootStrap.Nav.Link>
              </Link>
              {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                Dank memes
              </ReactBootStrap.Nav.Link> */}
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
        <Switch>
          <Route path="/halloween">
            <Halloween />
          </Route>
          <Route path="/xmassnowman">
            <XmasSnowman />
          </Route>
          <Route path="/xmastree">
            <XmasTree />
          </Route>
          <Route path="/xmashouse">
            <Xmas />
          </Route>
          <Route path="/giveblood">
            <GiveBlood />
          </Route>
          <Route path="/butterfree">
            <Piper />
          </Route>
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
