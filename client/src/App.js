import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/layout.css'
import NavBar from './components/NavBar';
import Login from './pages/Login';
import { HashRouter, Route, Routes , Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <NavBar  />
     <Login />

     {/* <Router>
        <Route exact path='/login' Component={Login} />


     </Router> */}
    </div>
    
  );
}

export default App;
