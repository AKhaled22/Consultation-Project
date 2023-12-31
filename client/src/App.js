import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/layout.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import AdminDelete from './pages/AdminDelete';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Login /> */}

      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgetpassword' element={<Login />} />
          <Route path='/admindelete' element={<AdminDelete />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/matches' element={<Login />} />
          <Route path='/matchdetails' element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
