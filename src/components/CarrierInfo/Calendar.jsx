import { useState } from "react";
import clsx from "clsx";
import styles from "./Calendar.module.css";

export default function Calendar({ onBuy, disablePast = false }) {
  // Текущая дата
  const today = new Date();

  // Основной календарь: месяц / год
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Выбранная дата (именно в основном календаре)
  const [selectedDate, setSelectedDate] = useState(null);

  // Модалка подтверждения
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  // Получаем день недели первого числа месяца
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  // Количество дней в месяце
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Проверка: является ли дата прошедшей (если включено disablePast)
  const isPast = (y, m, d) => {
    if (!disablePast) return false;
    const date = new Date(y, m, d);
    return date < today.setHours(0, 0, 0, 0);
  };

  // Выбор дня в основном календаре
  const handleSelectDay = (day) => {
    if (isPast(currentYear, currentMonth, day)) return;

    const dateObj = new Date(currentYear, currentMonth, day);
    setSelectedDate(dateObj);
  };

  // Открыть модалку подтверждения
  const openBuyModal = () => {
    if (!selectedDate) {
      alert("Спочатку виберіть дату");
      return;
    }
    setShowConfirmModal(true);
  };

  // Подтвердить покупку
  const confirmBuy = () => {
    onBuy?.(selectedDate);
    setShowConfirmModal(false);
  };

  // Отменить
  const cancelBuy = () => setShowConfirmModal(false);

  return (
    <div className={styles.calendar}>

      {/* ==== Кнопка покупки ==== */}
      <button className={styles.buyButton} onClick={openBuyModal}>
        <span className={styles.plus}>＋</span> Купити квиток
      </button>

      {/* ======== Заголовок календаря ========= */}
      <div className={styles.header}>
        <span className={styles.month}>
          {monthNames[currentMonth]} {currentYear}
        </span>

        <div className={styles.nav}>
          <button
            onClick={() =>
              setCurrentMonth((m) =>
                m === 0 ? (setCurrentYear((y) => y - 1), 11) : m - 1
              )
            }
            className={styles.navBtn}
          >
            ‹
          </button>

          <button
            onClick={() =>
              setCurrentMonth((m) =>
                m === 11 ? (setCurrentYear((y) => y + 1), 0) : m + 1
              )
            }
            className={styles.navBtn}
          >
            ›
          </button>
        </div>
      </div>

      {/* ======== Дни недели ======== */}
      <div className={styles.week}>
        {daysOfWeek.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      {/* ======== Сетка дней ======== */}
      <div className={styles.grid}>
        {/* Пустые ячейки перед началом месяца */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <span key={i} className={styles.empty}></span>
        ))}

        {/* Дни месяца */}
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            onClick={() => handleSelectDay(day)}
            disabled={isPast(currentYear, currentMonth, day)}
            className={clsx(
              styles.day,
              selectedDate &&
                selectedDate.getFullYear() === currentYear &&
                selectedDate.getMonth() === currentMonth &&
                selectedDate.getDate() === day &&
                styles.selected
            )}
          >
            {day}
          </button>
        ))}
      </div>

      {/* ========= МОДАЛЬНОЕ ОКНО ========= */}
      {showConfirmModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>

            <h3>Підтвердження покупки</h3>

            <p>
              Ви хочете купити квиток на дату:<br />
              <b>{selectedDate?.toLocaleDateString()}</b>
            </p>

            <div className={styles.modalActions}>
              <button onClick={confirmBuy} className={styles.confirmBtn}>
                Так
              </button>
              <button onClick={cancelBuy} className={styles.cancelBtn}>
                Ні
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

