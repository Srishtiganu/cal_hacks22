
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import  Home from './Home';
import  Login from './Login';
import UserPage from './UserPage';
import SellerPage from './SellerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/SellerPage" element={<SellerPage />} />
        {/* <Route path="/Login" element={<Login />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
