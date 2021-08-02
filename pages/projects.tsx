import { dprojects } from "../appdetails";
import Layout from "../components/Layout";
import styles from "../styles/projects.module.scss";

const projects = () => {

  return (
    <Layout>
      <div className="container">
        <h1 className="text-center">Projects</h1>
        <div className={styles.card}>
          {dprojects.map(({ img, name, description,technologies}) => (
            <div className={styles.content}>
              <img src={`${img}`} alt={name} />
              <div className={styles.info}>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>
                    <div>{technologies}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default projects;
