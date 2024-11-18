import React from 'react';
import styles from './layout.module.scss';
import { Link } from "react-router-dom";


const Footer: React.FC = () => {
  return (
    <>
       <div className={styles.social}>
          <div>
            <ul className={styles.social_ul}>
              <li className={styles.social_li}>DR</li>
              <li className={styles.social_li}>IN</li>
              <li className={styles.social_li}>TW</li>
              <li className={styles.social_li}>FB</li>
            </ul>
            <div className={styles.social_border1}></div>
          </div>
          <div className={styles.socialEm}>
            <div>
            <Link to="aida.mkrtchyan0606@gmail.com"className={styles.socialEmail} target="_blank" rel="noopener noreferrer">aida.mkrtchyan0606@gmail.com</Link>
            </div>
          
          <div className={styles.social_border2}></div>
          </div>
        </div>
    </>
  );
};

export default Footer;