import React from 'react';
import styles from './experience.module.scss';
import { Link } from "react-router-dom";
import Header from "../pages/Layout/Header.jsx";
import icon from "../assets/images/iconsplay64.png";
import myfoto from "../assets/images/profile.png";




const Experience: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.sectionEx}>
        <div className={styles.container}>
          <div className={styles.experience}>
            <div className={styles.experience_block}>
            <h1 className={styles.experience_title}>Where I’ve Worked</h1>
            <div className={styles.experience_box}>
            <div className={styles.experience_border}></div>
              <ul className={styles.experience_ul1}>
                <li className={styles.experience_li}><button className={styles.experience_button}>Ericsson</button></li>
                <li className={styles.experience_li}><button className={styles.experience_button}>Facebook</button></li>
                <li className={styles.experience_li}><button className={styles.experience_button}>Duff Beer</button></li>
                <li className={styles.experience_li}><button className={styles.experience_button}>Initech</button></li>
                <li className={styles.experience_li}><button className={styles.experience_button}>Hooli</button></li>
                <li className={styles.experience_li}><button className={styles.experience_button}>SingTel</button></li>
                <li className={styles.experience_li}><button className={styles.experience_button}>Fortive</button></li>
              </ul>  
              <ul className={styles.experience_ul2}>
                <li className={styles.experience_li2}><span className={styles.experience_span1}>Engineer <span className={styles.experience_spanErics}>@Ericsson</span></span></li>
                <li className={styles.experience_li2}><span className={styles.experience_span2}>May 2018 - Present</span></li>
                <li className={styles.experience_li2}><img className={styles.experience_img} src={icon} alt='play'width={20} height={20}/>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                <li className={styles.experience_li2}><img className={styles.experience_img} src={icon} alt='play'width={20} height={20}/>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
                <li className={styles.experience_li2}><img className={styles.experience_img} src={icon} alt='play'width={20} height={20}/>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
              </ul>
            </div>
            </div>
            <div className={styles.banner}>
              <img src={myfoto} alt='myfoto' className={styles.myFoto}/>
            </div>
          </div>
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
        </div>
      </section>
    </>
  );
};

export default Experience;