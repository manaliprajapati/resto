import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash,faList,faHome,faSearch,faPlus,faUser } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Home from './components/Home';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
    


    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Resto Cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home"><Link to='/'><FontAwesomeIcon icon={faHome} />Home</Link></Nav.Link>
            <Nav.Link href="#list"><Link to='/list'><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
            <Nav.Link href="#create"><Link to='/create'><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
            <Nav.Link href="#search"><Link to='/search'><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
            {/* <Nav.Link href="#update"><Link to='/update'>Update</Link></Nav.Link> */}
            <Nav.Link href="#search"><Link to='/login'><FontAwesomeIcon icon={faUser} />Login</Link></Nav.Link>
              </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/list' element={<RestaurantList />} />
    <Route path='/create' element={<RestaurantCreate />} />
    <Route path='/search' element={<RestaurantSearch/>} />
    <Route path='/details' element={<RestaurantDetail />} />
    <Route path='/update/:id'
    render={props=>(
      <RestaurantUpdate{...props} />
    )}
     />
     <Route path='/login' element={<Login />} />
    </Routes>
      </Router>
    </div>
  );
}

export default App;
