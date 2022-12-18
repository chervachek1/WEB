import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';

const Header=()=>{
  let navigate = useNavigate();

  const [userName, setUser] = useState('');
  useEffect(()=>{
    var userName = localStorage.getItem('userName');
    setUser(userName);
    
  },
  [])

  const logOut = () => {
    localStorage.removeItem('email');
    localStorage.clear();
    navigate('/login');
  }
  return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar w/ text</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </li>
          </ul>
          <span className='navbar-text'>
            Welcome: {userName} | <Link to='' onClick={logOut}>Logout</Link>
          </span>
        </div>
      </div>
    </nav>
    )
}

export default Header;