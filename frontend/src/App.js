import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  return (
    <div className="App">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigation}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      {currentPage === 'home' && <Home isLoggedIn={isLoggedIn} />}
      {currentPage === 'login' && <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
