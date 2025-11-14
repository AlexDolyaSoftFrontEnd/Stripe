import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import styles from "./DriversSwiper.module.css";


import driver1 from "./images/driver1.png";
import driver2 from "./images/driver2.png";
import driver3 from "./images/driver3.png";
import driver4 from "./images/driver4.png";
import driver5 from "./images/driver5.png";


import instagramIcon from "./icons/instagram.svg";
import linkedinIcon from "./icons/linkedin.svg";

const drivers = [
  {
    id: 1,
    name: "Олександр",
    exp: "Досвід роботи: 5 років",
    avatar: driver1,
    socials: {
      instagram: "/drivers/oleksandr/instagram",
      linkedin: "/drivers/oleksandr/linkedin",
    },
  },
  {
    id: 2,
    name: "Володимир",
    exp: "Досвід роботи: 7 років",
    avatar: driver2,
    socials: {
      instagram: "/drivers/volodymyr/instagram",
      linkedin: "/drivers/volodymyr/linkedin",
    },
  },
  {
    id: 3,
    name: "Ірина",
    exp: "Досвід роботи: 1 рік",
    avatar: driver3,
    socials: {
      instagram: "/drivers/iryna/instagram",
      linkedin: "/drivers/iryna/linkedin",
    },
  },
  {
    id: 4,
    name: "Михайло",
    exp: "Досвід роботи: 1 рік",
    avatar: driver4,
    socials: {
      instagram: "/drivers/mykhailo/instagram",
      linkedin: "/drivers/mykhailo/linkedin",
    },
  },
  {
    id: 5,
    name: "Юлія",
    exp: "Досвід роботи: 2 роки",
    avatar: driver5,
    socials: {
      instagram: "/drivers/yuliya/instagram",
      linkedin: "/drivers/yuliya/linkedin",
    },
  },
];

export default function DriversSwiper() {
  return (
    <section className={styles.drivers}>
      <div className={styles.drivers__top}>
        <h2 className={styles.drivers__title}>Наші водії</h2>
        <Link to="/drivers" className={styles.drivers__all}>
          Усі водії (7)
        </Link>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        grabCursor={true}
        breakpoints={{
          1200: { slidesPerView: 5 },
          992: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {drivers.map((d) => (
          <SwiperSlide key={d.id}>
            <div className={styles.card}>
              <img src={d.avatar} className={styles.avatar} alt={d.name} />

              <h3 className={styles.name}>{d.name}</h3>
              <p className={styles.exp}>{d.exp}</p>

              <div className={styles.social}>
                <Link to={d.socials.instagram}>
                  <img src={instagramIcon} className={styles.icon} alt="instagram" />
                </Link>

                <Link to={d.socials.linkedin}>
                  <img src={linkedinIcon} className={styles.icon} alt="linkedin" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

