import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/MSK1206/"
        target="_blank"
        rel="noopener noreferrer"
      >
        © 2022 MSK1206&nbsp;{" "}
        <span className={styles.logo}>
          <i className="bi-github github-icon-size"></i>
        </span>
      </a>
    </footer>
  );
}
