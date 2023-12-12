import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/layout.css';
// import NavBar from './components/NavBar';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import CreateMatch from './pages/CreateMatch';
import AddStadium from './pages/AddStadium';
import Manager from './pages/Manager';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <Login /> */}

      <Router>
        <NavBar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgetpassword' element={<Login />} />
          <Route path='/admin' element={<Login />} />
          <Route path='/matches' element={<Login />} />
          <Route path='/matchdetails' element={<Login />} />
          <Route path='/creatematch' element={<CreateMatch />} />
          <Route path='/addstadium' element={<AddStadium />} />
          <Route path='/manager' element={<Manager />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
