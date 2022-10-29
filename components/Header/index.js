import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["header-content"]}>
        <div className={styles["contact-us"]}>
          <div className={styles["contact-us--item"]}>
            <div className={styles["phone-icon"]}>
              <ion-icon name="call"></ion-icon>
            </div>
            <span>202-555-0110</span>
          </div>
          <div className={styles["contact-us--item"]}>
            <div className={styles["email-icon"]}>
              <ion-icon name="mail"></ion-icon>
            </div>
            <span>example@test.com</span>
          </div>
        </div>
        <nav className={styles["navigation"]}>
          <Link href="/">
            <a className={styles["logo-link"]}>
              <Image src="/logo.png" alt="me" width="320" height="160" />
            </a>
          </Link>
          <ul className={styles["list"]}>
            <Link href={"#"}>
              <a className={styles["list--item"]}>About us</a>
            </Link>
            <Link href={"#"}>
              <a className={styles["list--item"]}>Jobs</a>
            </Link>
            <Link href={"#"}>
              <a className={styles["list--item"]}>Companies</a>
            </Link>
            <Link href={"#"}>
              <a className={styles["list--item"]}>Blog</a>
            </Link>
            <Link href={"#"}>
              <a className={styles["list--item"]}>Contact us</a>
            </Link>
          </ul>
          <button className={styles["button"]}>Apply with cv</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
