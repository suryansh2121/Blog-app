"use client";
import { useState, useEffect } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  if (!showPopup) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.heading}>🚧 Under Construction 🚧</h2>
        <p style={styles.text}>
          Hey, this is <strong>Suryansh</strong>. I&apos;m the Owner and Developer of this site.
          <br />
          I sincerely apologize for the inconvenience – this site is currently
          under construction. <br />
          If you open it on desktop, it will be better!
          <br />
          If you have any query, feel free to reach me on WhatsApp:
        </p>
        <div style={styles.btns}>
          <a
            href="https://wa.me/919555074132"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            📱 9555074132
          </a>
          <button style={styles.button} onClick={() => setShowPopup(false)}>
            Continue to Site
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    animation: "fadeIn 0.4s ease-in-out",
    fontFamily: "'Poppins', sans-serif",
    boxSizing: "border-box",
  },
  popup: {
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    padding: "32px 24px",
    borderRadius: "20px",
    maxWidth: "90%",
    width: "420px",
    textAlign: "center",
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)",
    animation: "popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
    border: "1px solid #e5e7eb",
    boxSizing: "border-box",
    margin: "16px",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#1f2937",
    lineHeight: "1.3",
    fontFamily: "'Poppins', sans-serif",
  },
  text: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.6",
    textAlign: "center",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
    wordBreak: "break-word",
    padding: "0 10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  link: {
    display: "inline-block",
    marginTop: "12px",
    marginBottom: "20px",
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "15px",
    fontFamily: "'Poppins', sans-serif",
    transition: "color 0.2s, transform 0.2s",
  },
  button: {
    marginTop: "16px",
    padding: "12px 28px",
    background: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
    transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
  },
  btns: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
};

if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes popIn {
      0% { transform: scale(0.85); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
    @media (max-width: 480px) {
      .popup {
        padding: 24px 16px;
        width: 100%;
        margin: 12px;
      }
      .popup-heading {
        font-size: 22px;
        margin-bottom: 16px;
      }
      .popup-text, .popup-link, .popup-button {
        font-size: 14px;
      }
      .popup-button {
        padding: 10px 24px;
      }
    }
    @media (max-width: 360px) {
      .popup {
        padding: 20px 12px;
      }
      .popup-heading {
        font-size: 20px;
      }
      .popup-text, .popup-link, .popup-button {
        font-size: 13px;
      }
    }
    .popup-button:hover, .popup-button:focus {
      background: #1e40af;
      transform: scale(1.05);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      outline: none;
    }
    .popup-link:hover, .popup-link:focus {
      color: #1e40af;
      transform: scale(1.05);
      outline: none;
    }
  `;
  document.head.appendChild(style);
}

export default Popup;
