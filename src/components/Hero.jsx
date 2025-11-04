import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [
    {
      title: "Trade skills, not money",
      subtitle: "Learn locally from real people",
      img: "https://i.postimg.cc/C5hh5DLD/Learn-locally-from-real-people.png",
    },
    {
      title: "Teach what you love",
      subtitle: "Help others grow and earn",
      img: "https://i.postimg.cc/PfQNHfrQ/Help-others-grow-and-earn.jpg",
    },
    {
      title: "Discover nearby talents",
      subtitle: "Music, coding, yoga & more",
      img: "https://i.postimg.cc/fTQ72Rqq/Discover-nearby-talents.jpg",
    },
  ];
  return (
    <div className="rounded-2xl overflow-hidden" data-aos="fade-up">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            
            <div

              className="h-[240px] md:h-[420px] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="bg-black/40 w-full h-full flex flex-col items-center justify-center text-center text-white p-6">
                <h2 className="text-3xl md:text-5xl font-bold">{s.title}</h2>
                <p className="opacity-90 mt-2 md:text-lg">{s.subtitle}</p>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
