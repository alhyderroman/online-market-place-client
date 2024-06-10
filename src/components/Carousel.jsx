// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Slide from './Slide';
import bgimg1 from '../assets/images/carousel1.jpg'
import bgimg2 from '../assets/images/carousel2.jpg'
import bgimg3 from '../assets/images/carousel3.jpg'

export default function Carousel() {

  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination,Navigation]}
       
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide image={bgimg1} text='Indulge in culinary excellence at our restaurant.'></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bgimg2} text='Every dish tells a story of flavor and passion.'></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bgimg3} text='Join us for an unforgettable dining experience.'></Slide>
        </SwiperSlide>
     
        
       
     
      </Swiper>
    </div>
  );
}
