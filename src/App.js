import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [currentPage, setCurrentPage] = useState('Home');

const changingPage = () => {
  if(currentPage === 'Home') {
    return <Home />;
  } if (currentPage === 'Project') {
    return <Project />;
  } if (currentPage === 'Resume') {
    return <Resume />;
  } return <Contact />
};

const handleChange = (page) => setCurrentPage(page);



  return (
    <div className='main-page'>
      <Header currentPage={currentPage} handleChange={handleChange} />
      {changingPage()}

      <Footer />
    </div>
  );
}

export default App;
