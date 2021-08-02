import Link from "next/link";
import styles from "../styles/index.module.scss";
import About from "../components/About";


const home = () => {
  return (
    <div>
      <div className={styles.bg_img}>
        <div className={styles.cover}>
          <div className={styles.personal_info}>
            <h1 className={styles.i_am}>Hi, i am Elvis</h1>
            <p>Systems engineering student</p>
            <p>Learning Web Developer</p>
            <a href="#about" className={styles.btn}>
              About
            </a>
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default home;
