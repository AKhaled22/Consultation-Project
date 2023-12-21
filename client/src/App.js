import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/layout.css";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import CreateMatch from "./pages/CreateMatch";
import AddStadium from "./pages/AddStadium";
import Manager from "./pages/Manager";
import TicketReservation from "./pages/TicketReservation";
import { store } from "./store";
import { Provider } from "react-redux";
import EditDetails from "./pages/EditDetails";
import MatchDetails from "./components/MatchDetails";
import ViewMatches from "./pages/ViewMatches";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Login /> */}

        <Router>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetpassword" element={<Login />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/matches" element={<Login />} />
            <Route path="/creatematch" element={<CreateMatch />} />
            <Route path="/addstadium" element={<AddStadium />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/ticketreservation" element={<TicketReservation />} />
            <Route path="/editdetails" element={<EditDetails />} />
            <Route path="/matchdetails" element={<MatchDetails />} />
            <Route path="/viewmatches" element={<ViewMatches />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
