import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={`${styles.navigation}`}>
      <div className="logo">
        <img src="./images/Frame 2 1.png" alt="Logo" />
      </div>
      <div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
