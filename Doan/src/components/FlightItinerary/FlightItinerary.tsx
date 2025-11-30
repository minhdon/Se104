import React from "react";
import { Plane, User, Clock, MapPin, Calendar, ArrowRight } from "lucide-react";

import styles from "./FlightItinerary.module.css";

// --- Interface ---
interface FlightDetail {
  id: number;
  timeFrom: string;
  timeArrive: string;
  locationFrom: string;
  locationArrive: string;
  typeOfFlight: string;
  flightTime: string;
  desc: string;
  cost: number;
  fromCode: string;
  toCode: string;
  date: string;
  intermediate?: string[];
}

// --- Dữ liệu mẫu ---
const mockFlight: FlightDetail = {
  id: 24,
  timeFrom: "08:00",
  timeArrive: "06:00 (+1)",
  locationFrom: "Đà Nẵng (DAD)",
  locationArrive: "Frankfurt (FRA)",
  typeOfFlight: "2 điểm dừng",
  flightTime: "28h 00m",
  desc: "Bamboo Airways - QH152 & Lufthansa",
  cost: 18000000,

  fromCode: "DAD",
  toCode: "FRA",
  date: "2024-11-30",
  intermediate: ["Hồ Chí Minh (SGN)", "Bangkok (BKK)"],
};

const mockPassenger = {
  fullName: "Nguyễn Văn A",
  bookingCode: "VN-8823-XYZ",
};

const FlightItinerary: React.FC = () => {
  return (
    <div className={styles.itineraryWrapper}>
      <div className={styles.ticketCard}>
        <div className={styles.leftBox}>
          <div className={styles.labelText}>Hành khách</div>
          <div className={styles.avatarCircle}>
            <User size={40} />
          </div>
          <h3 className={styles.passengerName}>{mockPassenger.fullName}</h3>

          <div className={styles.bookingCodeBox}>
            <p
              className={styles.labelText}
              style={{ textAlign: "center", marginBottom: "5px" }}
            >
              Mã đặt chỗ
            </p>
            <p className={styles.codeText}>{mockPassenger.bookingCode}</p>
          </div>
        </div>

        <div className={styles.rightBox}>
          <div className={styles.flightHeader}>
            <div>
              <div className={styles.labelText} style={{ marginBottom: 0 }}>
                Chi tiết chuyến bay
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.9rem",
                  color: "#64748b",
                  marginTop: "5px",
                }}
              >
                <Calendar size={14} />
                <span>{mockFlight.date}</span>
              </div>
            </div>
            <span className={styles.flightTag}>{mockFlight.typeOfFlight}</span>
          </div>

          <div className={styles.routeContainer}>
            {/* Điểm đi */}
            <div className={`${styles.locationGroup} ${styles.textLeft}`}>
              <p className={styles.timeText}>{mockFlight.timeFrom}</p>
              <p className={styles.codeAirport}>{mockFlight.fromCode}</p>
              <p className={styles.cityName}>{mockFlight.locationFrom}</p>
            </div>

            <div className={styles.flightVisual}>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#94a3b8",
                  marginBottom: "5px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Clock size={12} /> {mockFlight.flightTime}
              </div>
              <div className={styles.flightLineWrapper}>
                <div className={styles.line}></div>
                <Plane className={styles.planeIconCenter} size={24} />
                <div className={styles.line}></div>
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#94a3b8",
                  marginTop: "5px",
                }}
              >
                {mockFlight.desc}
              </p>
            </div>

            <div className={`${styles.locationGroup} ${styles.textRight}`}>
              <p className={styles.timeText}>{mockFlight.timeArrive}</p>
              <p className={styles.codeAirport}>{mockFlight.toCode}</p>
              <p className={styles.cityName}>{mockFlight.locationArrive}</p>
            </div>
          </div>

          {mockFlight.intermediate && mockFlight.intermediate.length > 0 ? (
            <div className={styles.stopsContainer}>
              <div className={styles.stopHeader}>
                <MapPin
                  size={18}
                  className="text-blue-500"
                  style={{ color: "#3b82f6" }}
                />
                <span>
                  Thông tin nối chuyến ({mockFlight.intermediate.length} điểm
                  dừng)
                </span>
              </div>
              <ul className={styles.stopList}>
                {mockFlight.intermediate.map((item, index) => (
                  <li key={index} className={styles.stopItem}>
                    <span className={styles.stopBadge}>{index + 1}</span>
                    <span style={{ fontFamily: "roboto" }}>
                      Quá cảnh tại:{" "}
                      <strong
                        style={{ fontFamily: "roboto", fontSize: "1.2rem" }}
                      >
                        {item}
                      </strong>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className={styles.directFlightBox}>
              <ArrowRight size={18} />
              <span>Chuyến bay thẳng không có điểm dừng</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightItinerary;
