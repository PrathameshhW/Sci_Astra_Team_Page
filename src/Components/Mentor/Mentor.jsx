import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Mentor.css";

const Mentor = () => {
  const url = "https://randomuser.me/api/?results=100";
  const [data, setData] = useState([]);
  const numUsersToDisplay = 9;
  const numbersToAdd = 9;

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data.results))
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);

  return (
    <div className="m-wrapper">
      <div className="flexColStart innerWidth paddings m-container">
        <span className="primaryHeading gradientText">Meet Your Mentors</span>
        <span className="primaryText">Biology</span>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            960: {
              slidesPerView: 4,
            },
            720: {
              slidesPerView: 3,
            },
            540: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {data.slice(0, numUsersToDisplay).map((item, index) => (
            <SwiperSlide>
              <div className="s-card" key={index}>
                <img src={item.picture.medium} alt="" width={90} />
                <span>
                  {item.name.first} <br />
                  {item.name.last}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="primaryText">Chemistry</span>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            960: {
              slidesPerView: 4,
            },
            720: {
              slidesPerView: 3,
            },
            540: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {data.slice(9, 18).map((item, index) => (
            <SwiperSlide>
              <div className="s-card" key={index}>
                <img src={item.picture.medium} alt="" width={90} />
                <span>
                  {item.name.first} <br />
                  {item.name.last}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="primaryText">Physics</span>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            960: {
              slidesPerView: 4,
            },
            720: {
              slidesPerView: 3,
            },
            540: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {data.slice(18, 27).map((item, index) => (
            <SwiperSlide>
              <div className="s-card" key={index}>
                <img src={item.picture.medium} alt="" width={90} />
                <span>
                  {item.name.first} <br />
                  {item.name.last}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="primaryText">Mathematics</span>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            960: {
              slidesPerView: 4,
            },
            720: {
              slidesPerView: 3,
            },
            540: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {data.slice(27, 36).map((item, index) => (
            <SwiperSlide>
              <div className="s-card" key={index}>
                <img src={item.picture.medium} alt="" width={90} />
                <span>
                  {item.name.first} <br />
                  {item.name.last}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Mentor;
