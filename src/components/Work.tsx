import React from 'react';
import styles from './work.module.scss';
import Header from "../pages/Layout/Header.jsx";
import project1 from "../assets/images/featured-projects-1.png";
import github from "../assets/icons/github-wh.png";
import vector from "../assets/icons/external-wh.png";
import project2 from "../assets/images/featured-projects-2.png";
import project3 from "../assets/images/featured-projects-3.png";
import OtherProject from "../components/OtherProject";
import Footer from "../pages/Layout/Footer.jsx";


const Work: React.FC = () => {
  return (
    <>
      <Header />
      <section className={styles.sectionWork}>
        <div className={styles.container}>
          <div className={styles.work}>
            <div className={styles.work_block}>
            <h1 className={styles.work_title}>Some Things I’ve Built</h1>
            <div className={styles.work_boxOne}>
              <div><img src={project1} alt='project1'/></div>
              <div>
                <h5 className={styles.work_sub}>Featured Project</h5>
                <h2 className={styles.work_subtitle}>QuickerPoll</h2>
                <p className={styles.work_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tellus ipsum ipsum turpis habitasse consequat ut sit. Facilisis amet libero risus aliquet diam.</p>
                <ul className={styles.work_ul}>
                  <li>VS Code</li>
                  <li>Sublime Text</li>
                  <li>Atom</li>
                  <li>iTerm2</li>
                  <li>Hyper</li>
                </ul>
                <div className={styles.work_icons}>
                  <img src={github} className={styles.work_github} alt='github'/>
                  <img src={vector} alt='vector'/>
                </div>
              </div>
            </div>

            <div className={styles.work_boxTwo}>
              <div>
                <h5 className={styles.work_sub}>Featured Project</h5>
                <h2 className={styles.work_subtitle}>Opiniometer</h2>
                <p className={styles.work_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tellus ipsum ipsum turpis habitasse consequat ut sit. Facilisis amet libero risus aliquet diam.</p>
                <ul className={styles.work_ul}>
                  <li>VS Code</li>
                  <li>Sublime Text</li>
                  <li>Atom</li>
                  <li>iTerm2</li>
                  <li>Hyper</li>
                </ul>
                <div className={styles.work_icons}>
                <img src={github} className={styles.work_github} alt='github'/>
                <img src={vector} alt='vector'/>
                </div>
              </div>
              <div><img src={project2} alt='project2'/></div>
             

            </div>

            <div className={styles.work_boxThree}>
              <div><img src={project3} alt='project3'/></div>
              <div>
                <h5 className={styles.work_sub}>Featured Project</h5>
                <h2 className={styles.work_subtitle}>Davetiyem</h2>
                <p className={styles.work_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tellus ipsum ipsum turpis habitasse consequat ut sit. Facilisis amet libero risus aliquet diam.</p>
                <ul className={styles.work_ul}>
                  <li>VS Code</li>
                  <li>Sublime Text</li>
                  <li>Atom</li>
                  <li>iTerm2</li>
                  <li>Hyper</li>
                </ul>
                <div className={styles.work_icons}>
                <img src={github} className={styles.work_github} alt='github'/>
                <img src={vector} alt='vector'/>
                </div>
              </div>
            </div>
            </div>
            <OtherProject/>

          </div>
       <Footer />

        </div>
      </section>
    </>
  );
};

export default Work;