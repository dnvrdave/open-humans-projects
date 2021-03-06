import React, { Component }  from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import ProjectSidebar from './containers/ProjectSidebar.js'
import UserList from './containers/UserList.js'
import UserData from './containers/UserData.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

  render() {
    return (
      <Container fluid={true} className="app-container">
          <Row>
            <Col md={12} className="navbar-column">
              <Navbar className="navbar h-100" sticky="top">
                <NavbarBrand>
                  OpenHumans Public Data Explorer
                </NavbarBrand>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col md={2} className="sidebar-column">
              <ProjectSidebar className="sidebar h-100"/>
            </Col>
            <Col md={2} className="items-column">
              <UserList className="item-list h-100"/>
            </Col>
            <Col md={8} className="content-column">
              <UserData className="item-content"/>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="footer-column">
              <div className="navbar footer"></div>
            </Col>
          </Row>
        </Container> 
    );
  }
}

export default App;