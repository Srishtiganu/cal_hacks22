
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import  Home from './Home';
import  Login from './Login';
import UserPage from './UserPage';
import SellerPage from './SellerPage';
import MyNavbar from './MyNavbar';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserPage/:id" element={<UserPage />} />
        <Route path="/SellerPage" element={<SellerPage />} />
<<<<<<< Updated upstream
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
=======
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Login" element={<Login />} /> */}
>>>>>>> Stashed changes

      </Routes>
    </Router>
  );
}

export default App;
