import React, { useState } from "react";
import styles from "./PassengerForm.module.css";

export const PassengerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cccd: "",
    phone: "",
    dob: "",
    gender: "male",
    address: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const regexPatterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/,
    cccd: /^[0-9]{12}$/,
  };

  const validationForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên";
      isValid = false;
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Tên quá ngắn";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
      isValid = false;
    } else if (!regexPatterns.email.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng";
      isValid = false;
    }

    if (!formData.cccd.trim()) {
      newErrors.cccd = "Vui lòng nhập CCCD";
      isValid = false;
    } else if (!regexPatterns.cccd.test(formData.cccd)) {
      newErrors.cccd = "CCCD phải bao gồm 12 chữ số";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
      isValid = false;
    } else if (!regexPatterns.phone.test(formData.phone)) {
      newErrors.phone = "SĐT không hợp lệ (VD: 0912345678)";
      isValid = false;
    }

    if (!formData.dob) {
      newErrors.dob = "Vui lòng chọn ngày sinh";
      isValid = false;
    } else {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      if (birthDate > today) {
        newErrors.dob = "Ngày sinh không được ở tương lai";
        isValid = false;
      }
    }

    if (!formData.address.trim()) {
      newErrors.address = "Vui lòng nhập địa chỉ";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validationForm()) {
      alert("Đăng ký thành công! Dữ liệu đã được gủi đi");
      window.location.href = "/";
    } else {
      alert("Vui lòng kiểm tra lại các thông tin báo đỏ.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Thông Tin Hành Khách</h2>
        <p className={styles.subtitle}>
          Vui lòng nhập chính xác thông tin như trên giấy tờ tùy thân
        </p>
      </div>

      <form className={styles.formGrid}>
        <div className={styles.col}>
          <label className={styles.label}>Họ và tên</label>
          <input
            type="text"
            name="fullName"
            className={styles.input}
            placeholder="NGUYEN VAN A"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <span className={styles.errorMessage}>{errors.fullName}</span>
          )}
        </div>

        <div className={styles.col}>
          <label className={styles.label}>Email</label>
          <input
            type="mail"
            name="email"
            className={styles.input}
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email}</span>
          )}
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>Số CCCD / CMND</label>
            <input
              type="text"
              name="cccd"
              className={styles.input}
              placeholder="0123456789xx"
              value={formData.cccd}
              onChange={handleChange}
            />
            {errors.cccd && (
              <span className={styles.errorMessage}>{errors.cccd}</span>
            )}
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              className={styles.input}
              placeholder="0912 xxx xxx"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className={styles.errorMessage}>{errors.phone}</span>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>Ngày sinh</label>
            <input
              type="date"
              name="dob"
              className={styles.input}
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && (
              <span className={styles.errorMessage}>{errors.dob}</span>
            )}
          </div>
          <div className={styles.col}>
            <label className={styles.label}>Giới tính</label>
            <select
              name="gender"
              className={styles.select}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
        </div>

        <div className={styles.col}>
          <label className={styles.label}>Địa chỉ thường trú</label>
          <input
            type="text"
            name="address"
            className={styles.input}
            placeholder="Số nhà, đường, phường/xã, quận/huyện..."
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <span className={styles.errorMessage}>{errors.address}</span>
          )}
        </div>

        <button type="submit" className={styles.button} onClick={handleSubmit}>
          Xác nhận thông tin
        </button>
      </form>
    </div>
  );
};
