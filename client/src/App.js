import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/layout.css";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import EditDetails from "./pages/EditDetails";
import MatchDetails from "./components/MatchDetails";
import ViewMatches from "./pages/ViewMatches";
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Login /> */}

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<Login />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/matches" element={<Login />} />
          {/* <Route path="/matchdetails" element={<Login />} /> */}
          <Route path="/editdetails" element={<EditDetails />} />
          <Route path="/matchdetails" element={<MatchDetails />} />
          <Route path="/viewmatches" element={<ViewMatches />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
