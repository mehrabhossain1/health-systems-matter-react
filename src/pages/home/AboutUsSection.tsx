import AboutSectionCard from "@/components/ui/about/AboutSectionCard";
import aboutbg from "../../assets/about/dots-block-aqua.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import "../../App.css";

const AboutUsSection = () => {
  return (
    <section
      className="relative py-12 pb-40 bg-center bg-cover bg-slate-700"
      style={{
        backgroundImage: `url(${aboutbg})`,
      }}
    >
      {/* Optional: Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-screen-xl mx-auto">
        {/* Title with horizontal line */}
        <div className="flex items-center gap-10 py-10 pb-20 mb-5">
          <h2
            className="pl-10 text-6xl font-semibold text-white"
            style={{ fontFamily: "Clash Display" }}
          >
            About
          </h2>
          <div className="flex-1 ml-4 border-t border-white"></div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3.3,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <AboutSectionCard
              title="About HSM"
              description="52 percent of maternal deaths occur in the postpartum period..."
              bgColor="bg-[#f5f5dc]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <AboutSectionCard
              title="Vision and Mission"
              description="28 states saw drug overdose deaths increase by more than 30 percent..."
              bgColor="bg-[#d1e0e0]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <AboutSectionCard
              title="Activities and Approach"
              description="At least 3.8 million people have lost their Medicaid coverage..."
              bgColor="bg-[#f4e1d2]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <AboutSectionCard
              title="Testimonials"
              description="At least 3.8 million people have lost their Medicaid coverage..."
              bgColor="bg-[#e2f4e1]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutUsSection;
