import styles from "./Title.module.css";

export const Title = () => {
  const handleToFindFlight = () => {
    window.location.href = "/find";
  };
  return (
    <>
      <div className={styles.box}>
        <i className="fa-solid fa-plane-departure"></i>
        <h1>Danh sách các chuyến bay hiện có</h1>
        <div className={styles.find} onClick={handleToFindFlight}>
          <h2>Tìm chuyến bay</h2>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};
