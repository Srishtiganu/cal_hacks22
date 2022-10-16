
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import  Home from './Home';
import  Login from './Login';
import UserPage from './UserPage';
import SellerPage from './SellerPage';
import MyNavbar from './myNavbar';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserPage/:id" element={<UserPage />} />
        <Route path="/SellerPage" element={<SellerPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        {/* <Route path="/Login" element={<Login />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
