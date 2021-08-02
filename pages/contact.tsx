import Layout from "../components/Layout";
import styles from "../styles/contact.module.scss";

const contact = () => {
  return (
    <Layout>
      <div className="container">
        <h2 className="text-center">Contact</h2>

        <fieldset>
          <legend>Complete all the fields</legend>
          <form action="#">
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" required />
            </div>

            <div className={styles.field}>
              <label for="Phone">Phone</label>
              <input type="tel" id="Phone" placeholder="Phone" />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message"></textarea>
            </div>
            <div className={styles.send}>
              <input type="submit" value="Send" className={styles.btn} />
            </div>
          </form>
        </fieldset>
      </div>
    </Layout>
  );
};

export default contact;
