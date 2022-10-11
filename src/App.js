import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Content } from './components/content';
import { Read } from './components/read';
import { Create } from './components/create';
import { Footer } from './components/footer';
import { Header } from './components/header';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* navbar is used to select different components to view */}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/* routes are used to display different components when the navber is clicked */}
          <Routes>
            <Route path='/' element={<Content/>}/>
            <Route path='/read' element={<Read/>}/>
            <Route path='/create' element={<Create/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
