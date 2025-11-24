import styles from "./ForgotPass.module.css";

export const ForgotPassword = () => {
  const toLogin = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <section className={styles.forgotZone}>
        <div className={styles["login-container"]}>
          <div className={styles["logo-area"]}>
            <svg
              className={styles["logo-icon"]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A5,5 0 0,0 13,3A5,5 0 0,0 8,8H6V22H18V22H20V8H18Z" />
            </svg>
            <h1 className={styles["app-title"]}>Khôi phục mật khẩu</h1>
            <p className={styles["app-subtitle"]}>
              Đừng lo lắng! Hãy nhập email đăng ký, Cloud Airlines sẽ gửi mã xác
              nhận cho bạn.
            </p>
          </div>

          <form action="#" method="POST">
            <div className={styles["form-group"]}>
              <label htmlFor="email" className={styles["form-label"]}>
                Email đăng ký
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles["form-input"]}
                placeholder="name@example.com"
                required
              />
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <button
                type="submit"
                className={`${styles.btn} ${styles["btn-primary"]}`}
              >
                GỬI MÃ XÁC NHẬN
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
            Quay lại Đăng nhập
          </button>
        </div>
      </section>
    </>
  );
};
