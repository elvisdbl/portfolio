import Link from "next/link";
import React from "react";
import { skills } from "../appdetails";
import styles from "../styles/About.module.scss";
import Animation from "../components/Animation";

const About = () => {
  return (
    <div className="container">
      <div className={styles.about}>
        <div>
          <h1 className="text-center" id="about">
            About me
          </h1>
          <div className={styles.card}>
            <div>{/* <img src="/" alt=""/> */}</div>
            <div>
              <h4>Elvis Bonilla</h4>
              <h3>University Student</h3>
              <p>
                I am a university student and I am passionate about everything
                related to informatics and computer science. I'm responsible,
                creative, collaborative, with analytical and problem-solving
                skills, easy to work with and willing to learn, adaptability to
                change, good personal relationships and facility for group work.
                I have good knowledge of English and some programming languages.
              </p>
              <div className="try">
                <Link href="/contact">
                  <a className="btn">Contact me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center">Skills</h2>
        <div className={styles.justify_content}>
          <div className={styles.display}>
            <Animation />
          </div>
          <div className={styles.skillbox}>
            {skills.map(({ name, icon }, index) => (
              <div className={styles.skill} key={index}>
                <img src={`${icon}`} alt={`${name}`} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="try">
          <Link href="/projects">
            <a className="btn">Let's take a look to my projects</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
