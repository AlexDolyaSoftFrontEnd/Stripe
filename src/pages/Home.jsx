import { useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (from.trim() && to.trim()) {
      setSearchResults(`Поиск рейсов от "${from}" до "${to}"`);
      alert(`Поиск от: ${from}\nКуда: ${to}`);
    } else {
      alert("Заповніть обидва поля!");
    }
  };

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap", flexDirection: window.innerWidth <= 768 ? "column" : "row" }}>
        <div style={{ flex: 1, minWidth: "250px" }}>
          <h1 style={{ margin: 0, fontSize: "clamp(24px, 5vw, 32px)" }}>Швидкі міжміські поїздки</h1>
          <p style={{ marginTop: 8, color: "#555", fontSize: "clamp(14px, 2vw, 16px)" }}>Знайдіть зручний рейс, порівняйте та забронюйте за хвилини.</p>

          <form onSubmit={handleSearch} style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: window.innerWidth <= 480 ? "wrap" : "nowrap" }}>
            <input
              placeholder="Звідки"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              style={{ flex: window.innerWidth <= 480 ? "1 1 100%" : "1", padding: "12px 14px", borderRadius: 8, border: "1px solid #ddd", fontSize: 14, boxShadow: "0 2px 4px rgba(0,0,0,0.05)", transition: "all 0.2s", minWidth: 0 }}
            />
            <input
              placeholder="Куди"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              style={{ flex: window.innerWidth <= 480 ? "1 1 100%" : "1", padding: "12px 14px", borderRadius: 8, border: "1px solid #ddd", fontSize: 14, boxShadow: "0 2px 4px rgba(0,0,0,0.05)", transition: "all 0.2s", minWidth: 0 }}
            />
            <button type="submit" style={{ flex: window.innerWidth <= 480 ? "1 1 100%" : "0 0 auto", padding: "12px 20px", borderRadius: 8, background: "#0b74de", color: "#fff", border: "none", cursor: "pointer", fontWeight: 600, boxShadow: "0 2px 8px rgba(11, 116, 222, 0.3)", transition: "all 0.2s", whiteSpace: "nowrap" }} onMouseEnter={(e) => e.target.style.boxShadow = "0 4px 12px rgba(11, 116, 222, 0.4)"} onMouseLeave={(e) => e.target.style.boxShadow = "0 2px 8px rgba(11, 116, 222, 0.3)"}>Знайти</button>
          </form>

          {searchResults && (
            <div style={{ marginTop: 12, padding: 10, background: "#f0f8ff", borderRadius: 6, color: "#0b74de" }}>
              {searchResults}
            </div>
          )}
        </div>
      </div>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ marginBottom: 12, color: "#0b3d91", fontWeight: 700 }}>Чому обирають нас</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <div style={{ flex: "1 1 240px", padding: 20, border: "1px solid #e0ecf7", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", transition: "all 0.3s", cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(11, 116, 222, 0.15)"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <img src="https://cdn-icons-png.flaticon.com/512/751/751463.png" alt="Поиск" style={{ width: 40, height: 40, marginBottom: 12 }} />
            <strong style={{ color: "#0b3d91" }}>Швидкий пошук</strong>
            <p style={{ marginTop: 8, color: "#666", fontSize: 14 }}>Підбір рейсів за кілька секунд.</p>
          </div>
          <div style={{ flex: "1 1 240px", padding: 20, border: "1px solid #e0ecf7", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", transition: "all 0.3s", cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(11, 116, 222, 0.15)"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="Місце" style={{ width: 40, height: 40, marginBottom: 12 }} />
            <strong style={{ color: "#0b3d91" }}>Гарантія посадки</strong>
            <p style={{ marginTop: 8, color: "#666", fontSize: 14 }}>Підтверджені місця у автобусі.</p>
          </div>
          <div style={{ flex: "1 1 240px", padding: 20, border: "1px solid #e0ecf7", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", transition: "all 0.3s", cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(11, 116, 222, 0.15)"; e.currentTarget.style.transform = "translateY(-4px)"; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Оплата" style={{ width: 40, height: 40, marginBottom: 12 }} />
            <strong style={{ color: "#0b3d91" }}>Проста оплата</strong>
            <p style={{ marginTop: 8, color: "#666", fontSize: 14 }}>Підтримуємо картки та онлайн-платежі.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
