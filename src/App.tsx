import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import styles from './assets/my-module.scss';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
     <div className={styles.main}>
       <Router> 
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>  
       </Router>
     </div>
     </>
  );
};

export default App;






