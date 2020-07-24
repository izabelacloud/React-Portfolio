import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Projects from './Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume'

function Portfolio() {
  const [currentPage, handlePageChange] = useState('About');



  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    switch(currentPage) {
      case 'About': 
      return (<About></About>)

      case 'Portfolio': 
      return (<Projects></Projects>)

      case 'Contact': 
      return (<Contact></Contact>)

      case 'Resume':
        return (<Resume></Resume>)

      default: 
      return(<About></About>)
    }
    //
  };

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          // YOUR CODE HERE
          renderPage()
          //
        }
      </div>
    </div>
  );
}

export default Portfolio;
