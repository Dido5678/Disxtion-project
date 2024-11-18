import React from 'react';
import styles from './about.module.scss';
import Header from "../pages/Layout/Header.jsx";
import icon from "../assets/images/iconsplay64.png";
import myfoto from "../assets/images/profile.png";
import Footer from "../pages/Layout/Footer.jsx";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionOne}>
            <div className={styles.sectionOne_block}>
            <h1 className={styles.sectionOne_title}>About Me</h1>
            <p className={styles.sectionOne_descr}>Hey there! My name is Dean Diaz and I enjoy creating things that live on the internet. I have worked with many big companies like Nitrosoft, Coinify, and Humble.My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
            <div className={styles.sectionOne_descr2}>Here are a few technologies I’ve been working with recently:</div>
            <div className={styles.sectionOne_box}>
              <ul className={styles.sectionOne_ul1}>
                <li className={styles.sectionOne_li}><img src={icon} alt='play'width={20} height={20}/>JavaScript (ES6+)</li>
                <li className={styles.sectionOne_li}><img src={icon} alt='play'width={20} height={20}/>React</li>
                <li className={styles.sectionOne_li}><img src={icon} alt='play'width={20} height={20}/>Node.js</li>
              </ul>  
              <ul className={styles.sectionOne_ul2}>
                <li className={styles.sectionOne_li}><img src={icon} alt='play'width={20} height={20}/>TypeScript</li>
                <li className={styles.sectionOne_li}><img src={icon} alt='play'width={20} height={20}/>Eleventy</li>
                <li className={styles.sectionOne_li}><img src={icon} alt='play'width={20} height={20}/>WordPress</li>
              </ul>
            </div>
            <div className={styles.sectionOne_border}></div>
            <div>
              <div className={styles.sectionOne_boxtwo}>
                  <div>
                    <span className={styles.sectionOne_num}>12+</span>
                    <span className={styles.sectionOne_info}>Years of <br></br><span className={styles.sectionOne_span}>experience</span></span>
                  </div>
                  <div>
                    <span className={styles.sectionOne_num}>150+</span>
                    <span className={styles.sectionOne_info}>Successful <br></br> <span className={styles.sectionOne_span}>projects</span></span>
                  </div>
              </div>
      </div>

            </div>
            <div className={styles.banner}>
        <img src={myfoto} alt='myfoto' className={styles.myFoto}/>
            </div>
          </div>
        <Footer />
        </div>
      </section>
    </>
  );
};

export default About;
