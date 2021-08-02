import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <Link href={`/`}>About me</Link>
        <Link href={`/projects`}>Projects</Link>
        <Link href={`/contact`}>Contact</Link>
      </nav>
    </div>
  );
};

export default Navbar;
