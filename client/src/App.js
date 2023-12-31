import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/layout.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";
import MatchDetails from "./components/MatchDetails";
import { AddStadium , CreateMatch , EditDetails , Home , Login , Manager , Register , SysAdministrator , TicketReservation , ViewMatches , YourTickets} from './pages'
import AdminDelete from './pages/AdminDelete';
import Admin from './pages/Admin';
// import  from 'react-redux'
// import { setActivePage } from './features/pageSlice'

function App() {

  // const activePage = useSelector((state) => state.page.value)
  // const dispatch = useDispatch()

  return (
    <Provider store={store}>
      <div className="App">
        {/* <Login /> */}

        <Router>
          <NavBar />
          <Routes>

            <Route path="/home" element={<Home />} />

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
            <Route path="/yourtickets" element={<YourTickets />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
