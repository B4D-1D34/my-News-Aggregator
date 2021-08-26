import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>
          <h1>My News Aggregator</h1>
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
