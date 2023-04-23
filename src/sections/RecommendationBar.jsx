import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ProductCard } from "../components";
import { Services } from "../services";
import { useEffect, useRef, useState } from "react";

const RecommendationBar = () => {
  const swiper = useRef();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Services.Product.getAll({ limit: 12, skip: 0 }).then((productEdge) => {
      setProducts(productEdge.products);
    });
  }, []);

  return (
    <div className="swiper__wrapper">
      <div className="swiper__header">
        <div className="swiper__header__title">You may also like</div>
        <div className="swiper__button__group">
          <button onClick={() => swiper.current.swiper.slidePrev()}>
            <ArrowLeftIcon />
          </button>
          <button onClick={() => swiper.current.swiper.slideNext()}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      <div className="swiper__content">
        <Swiper
          ref={swiper}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={2}
          slidesPerGroup={1}
          breakpoints={{
            768: {
              slidesPerView: 4,
              slidesPerGroup: 3,
              spaceBetween: 25,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendationBar;
