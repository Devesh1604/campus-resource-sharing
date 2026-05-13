import React from 'react';
import '../styles/Navigation.css';

function Navigation({ currentPage, onNavigate, isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1 onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            🎓 Campus Resource Sharing
          </h1>
        </div>
        <div className="nav-links">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            className={currentPage === 'home' ? 'active' : ''}
          >
            Home
          </a>
          {isLoggedIn ? (
            <>
              <a href="#resources" className="nav-link">Resources</a>
              <a href="#profile" className="nav-link">Profile</a>
              <button className="logout-btn" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <button 
              className="login-btn"
              onClick={() => onNavigate('login')}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
