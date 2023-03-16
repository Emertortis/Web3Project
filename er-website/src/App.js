import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/DashBoard';
import Reset from './pages/Reset';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ER_webpage from './pages/webpage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ER_webpage/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/reset" element={<Reset/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
