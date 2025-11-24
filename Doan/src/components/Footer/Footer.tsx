import styles from "./Footer.module.css";

// Đảm bảo bạn đã cài đặt Font Awesome hoặc nhúng CDN trong file index.html để các icon hiển thị
// Cú pháp i tag cho icon vẫn giữ nguyên vì chúng là class của thư viện ngoại (fa-solid fa-phone, v.v.)

export const Footer = () => {
  return (
    // Sử dụng styles.cloudFooter thay vì "cloud-footer"
    <footer className={styles.cloudFooter}>
      {/* Sử dụng styles.footerContainer thay vì "footer-container" */}
      <div className={styles.footerContainer}>
        {/* Cột 1: Logo & Liên hệ */}
        <div className={styles.footerCol}>
          <div className={styles.footerLogo}>
            <img src="/images/airlinelogo.jpg" alt="Cloud Airlines Logo" />
            <span>CLOUD AIRLINES</span>
          </div>

          <h3 className={styles.footerHeading}>LIÊN HỆ</h3>
          <p className={styles.footerText}>
            Địa chỉ: 1 Huyện Tập Bằng 174, VietNam, Tito 10024
          </p>
          <p className={styles.footerText}>
            <i className="fa-solid fa-envelope"></i>{" "}
            <a href="mailto:cloudss@gmail.com" className={styles.email}>
              cloudss@gmail.com
            </a>
          </p>
          <p className={styles.phoneContact}>
            <i className="fa-solid fa-phone"></i> 0800 269 330
          </p>
        </div>

        {/* Cột 2: Dịch vụ khách hàng */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>DỊCH VỤ KHÁCH HÀNG</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#">Vé & Đặt chỗ</a>
            </li>
            <li>
              <a href="#">Hành lý</a>
            </li>
            <li>
              <a href="#">Thủ tục</a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Về chúng tôi */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>VỀ CHÚNG TÔI</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#">Cloud Airlines</a>
            </li>
            <li>
              <a href="#">Tin tức</a>
            </li>
            <li>
              <a href="#">Tuyển dụng</a>
            </li>
          </ul>
        </div>

        {/* Cột 4: Theo dõi & Đăng ký */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerHeading}>THEO DÕI & ĐĂNG KÝ</h3>
          <div className={styles.socialIcons}>
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

          <p className={styles.newsletterLabel}>Newsletter</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Sign up newsletter" required />
          </form>
        </div>
      </div>

      {/* Bản quyền */}
      <div className={styles.footerBottom}>
        <p>© 2024 Cloud Airlines. All rights reserved.</p>
      </div>
    </footer>
  );
};
