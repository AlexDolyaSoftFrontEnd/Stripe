import { useState } from "react";
import styles from "./Calendar.module.css";

export default function Calendar() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Выбранная дата
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Обработчик выбора даты
  const handleSelectDay = (day) => {
    const dateObj = new Date(currentYear, currentMonth, day);
    setSelectedDate(dateObj);

    console.log("Selected date:", dateObj.toLocaleDateString());
  };

  const isToday = (day) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const isSelected = (day) => {
    return (
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  };

  return (
    <div className={styles.calendar}>
      {/* BUY BUTTON */}
      <button className={styles.buyButton}>
        <span className={styles.plus}>＋</span> Купити квиток
      </button>

      {/* HEADER */}
      <div className={styles.header}>
        <span className={styles.month}>
          {monthNames[currentMonth].toUpperCase()} {currentYear}
        </span>
        <div className={styles.nav}>
          <button onClick={prevMonth} className={styles.navBtn}>‹</button>
          <button onClick={nextMonth} className={styles.navBtn}>›</button>
        </div>
      </div>

      {/* DAYS OF WEEK */}
      <div className={styles.week}>
        {daysOfWeek.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {/* Пустые ячейки перед началом месяца */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <span key={"e" + i} className={styles.empty}></span>
        ))}

        {/* Дни месяца */}
        {Array.from({ length: totalDays }).map((_, i) => {
          const day = i + 1;

          return (
            <button
              key={day}
              onClick={() => handleSelectDay(day)}
              className={`
                ${styles.day} 
                ${isToday(day) ? styles.active : ""} 
                ${isSelected(day) ? styles.selected : ""}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

