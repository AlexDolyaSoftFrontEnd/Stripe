import { Link } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./DriversSwiper.module.css";

import driver1 from "./images/driver1.png";
import driver2 from "./images/driver2.png";
import driver3 from "./images/driver3.png";
import driver4 from "./images/driver4.png";
import driver5 from "./images/driver5.png";

import instagramIcon from "./icons/instagram.svg";
import linkedinIcon from "./icons/linkedin.svg";

/* ----------------------------------------------------
   Массив водіїв з соціальними мережами
---------------------------------------------------- */
const drivers = [
  {
    id: 1,
    name: "Олександр",
    exp: "Досвід роботи: 5 років",
    avatar: driver1,
    socials: [
      { type: "instagram", to: "/drivers/oleksandr/instagram", icon: instagramIcon },
      { type: "linkedin", to: "/drivers/oleksandr/linkedin", icon: linkedinIcon },
    ],
  },
  {
    id: 2,
    name: "Володимир",
    exp: "Досвід роботи: 7 років",
    avatar: driver2,
    socials: [
      { type: "instagram", to: "/drivers/volodymyr/instagram", icon: instagramIcon },
      { type: "linkedin", to: "/drivers/volodymyr/linkedin", icon: linkedinIcon },
    ],
  },
  {
    id: 3,
    name: "Ірина",
    exp: "Досвід роботи: 1 рік",
    avatar: driver3,
    socials: [
      { type: "instagram", to: "/drivers/iryna/instagram", icon: instagramIcon },
      { type: "linkedin", to: "/drivers/iryna/linkedin", icon: linkedinIcon },
    ],
  },
  {
    id: 4,
    name: "Михайло",
    exp: "Досвід роботи: 1 рік",
    avatar: driver4,
    socials: [
      { type: "instagram", to: "/drivers/mykhailo/instagram", icon: instagramIcon },
      { type: "linkedin", to: "/drivers/mykhailo/linkedin", icon: linkedinIcon },
    ],
  },
  {
    id: 5,
    name: "Юлія",
    exp: "Досвід роботи: 2 роки",
    avatar: driver5,
    socials: [
      { type: "instagram", to: "/drivers/yuliya/instagram", icon: instagramIcon },
      { type: "linkedin", to: "/drivers/yuliya/linkedin", icon: linkedinIcon },
    ],
  },
];

/* ----------------------------------------------------
   Компонент
---------------------------------------------------- */
export default function DriversSwiper() {
  return (
    <section className={styles.drivers}>
      <div className={styles.drivers__top}>
        <h2 className={styles.drivers__title}>Наші водії</h2>
      </div>

      <Swiper
        aria-label="Список водіїв"
        spaceBetween={20}
        grabCursor={true}
        slidesPerView={5}
        breakpoints={{
          1200: { slidesPerView: 5 },
          992: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {drivers.map((driver) => (
          <SwiperSlide key={driver.id}>
            <div className={styles.card}>
              
              <img
                src={driver.avatar}
                className={styles.avatar}
                alt={`Водій ${driver.name}`}
              />

              <h3 className={styles.name}>{driver.name}</h3>
              <p className={styles.exp}>{driver.exp}</p>

              <div className={styles.social}>
                {driver.socials.map((s) => (
                  <Link key={s.type} to={s.to} aria-label={s.type}>
                    <img
                      src={s.icon}
                      className={styles.icon}
                      alt={`${driver.name} ${s.type}`}
                    />
                  </Link>
                ))}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

