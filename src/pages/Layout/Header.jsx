import React from 'react';
import styles from '../Layout/layout.module.scss'; 
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';  

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_list}>
          <div className={styles.header_logo}>
            <img src={logo} alt='logo' />
          </div>
          <ul className={styles.header_items}>
              <li className={styles.header_box}>
                <Link to="/about" className={styles.header_boxLink}>About</Link>
              </li>
              <li className={styles.header_box}>
                <Link to="/experience" className={styles.header_boxLink}>Experience</Link>
              </li>
              <li className={styles.header_box}>
                <Link to="/work" className={styles.header_boxLink}>Work</Link>
              </li>
              <li className={styles.header_box}>
                <Link to="/contact" className={styles.header_boxLink}>Contact</Link>
              </li>
              <li className={styles.header_box}>
                  <Link to="/Aida%20Resume.pdf" className={styles.header_resume} target="_blank" rel="noopener noreferrer">Resume</Link>
              </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;