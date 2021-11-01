import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./App.css";
import UserGenerator from "./Pages/service";
import Home from "./Pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        visible: true,
      },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="main-header">
          <nav className="main-bar">
            <ul className="main-nav">
              <Navbar bg="light" variant="light" role="/home">
                <Container>
                  <Navbar.Brand href="/home"></Navbar.Brand>
                  <Nav className="me-auto">
                    <li>
                      <Nav.Link href="/home">Home</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="/service">User</Nav.Link>
                    </li>
                  </Nav>
                </Container>
              </Navbar>
            </ul>
          </nav>
        </header>
        <div className="p-3">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/service">
              <UserGenerator />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
