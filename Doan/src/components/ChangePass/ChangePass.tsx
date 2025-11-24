import styles from "./ChangePass.module.css";

export const ChangePassword = () => {
  const toLogin = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <section className={styles.changeZone}>
        <div className={styles["login-container"]}>
          <div className={styles["logo-area"]}>
            <svg
              className={styles["logo-icon"]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
            </svg>
            <h1 className={styles["app-title"]}>Cloud Airline</h1>
            <p className={styles["app-subtitle"]}>
              Cập nhật mật khẩu để bảo vệ tài khoản.
            </p>
          </div>

          <form action="#" method="POST">
            <div className={styles["form-group"]}>
              <label
                htmlFor="current_password"
                className={styles["form-label"]}
              >
                Mật khẩu hiện tại
              </label>
              <input
                type="password"
                id="current_password"
                name="current_password"
                className={styles["form-input"]}
                placeholder="Nhập mật khẩu đang dùng"
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="new_password" className={styles["form-label"]}>
                Mật khẩu mới
              </label>
              <input
                type="password"
                id="new_password"
                name="new_password"
                className={styles["form-input"]}
                placeholder="Nhập mật khẩu mới"
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label
                htmlFor="confirm_new_password"
                className={styles["form-label"]}
              >
                Xác nhận mật khẩu mới
              </label>
              <input
                type="password"
                id="confirm_new_password"
                name="confirm_new_password"
                className={styles["form-input"]}
                placeholder="Nhập lại mật khẩu mới"
                required
              />
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <button
                type="submit"
                className={`${styles.btn} ${styles["btn-primary"]}`}
              >
                CẬP NHẬT &nbsp; 🛡️
              </button>
            </div>
          </form>

          <div className={styles.divider}>
            <span>HOẶC</span>
          </div>

          <button
            type="button"
            className={`${styles.btn} ${styles["btn-outline"]}`}
            onClick={toLogin}
          >
            Quay lại trang đăng nhập
          </button>
        </div>
      </section>
    </>
  );
};
