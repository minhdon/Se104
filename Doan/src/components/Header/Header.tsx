import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles["site-header"]}>
        <div className={styles.container}>
          <div className={styles["top-bar"]}>
            <a
              href="#"
              className={`${styles["top-link"]} ${styles["gold-text"]}`}
            >
              TRỢ GIÚP
            </a>
            <span className={styles.divider}>|</span>
            <a href="#" className={styles["top-link"]}>
              ĐĂNG NHẬP
            </a>
            <span className={styles.divider}>|</span>
            <a href="#" className={styles["top-link"]}>
              ĐĂNG KÝ
            </a>

            <a href="#" className={styles["search-icon"]}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>

            <a href="#" className={styles["country-selector"]}>
              VIETNAM - TIẾNG VIỆT
            </a>
          </div>

          <div className={styles["main-nav"]}>
            <div className={styles["logo-wrapper"]}>
              <img
                src="/images/airlinelogo.jpg"
                className={styles["logo-img"]}
              />
            </div>

            <nav className={styles["nav-menu"]}>
              <ul>
                <li>
                  <a href="#">Lên kế hoạch</a>
                </li>
                <li>
                  <a href="#">Thông tin hành trình</a>
                </li>
                <li>
                  <a href="#">Mua vé & Sản phẩm khác</a>
                </li>
                <li className={styles["lotusmiles-btn"]}>
                  <a href="#">Lotusmiles</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
