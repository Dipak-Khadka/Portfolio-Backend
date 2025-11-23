// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';  // ← ADD THIS
import Signin from './pages/Signin';  // ← ADD THIS (we'll create it next)
import './styles/globals.css';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);  // ← ADD THIS (to track logged-in user)


  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      case 'signup':  // ← ADD THIS
        return <Signup setCurrentPage={setCurrentPage} />;
      case 'signin':  // ← ADD THIS
        return <Signin setCurrentPage={setCurrentPage} setUser={setUser} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };


  return (
    <div className="App">
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        user={user}  // ← ADD THIS (pass user to Navbar)
        setUser={setUser}  // ← ADD THIS (to handle logout)
      />
      <main className="main-content">
        {renderCurrentPage()}
      </main>
    </div>
  );
}


export default App;
