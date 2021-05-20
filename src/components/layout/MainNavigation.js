import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ReactMeetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/newmeetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
