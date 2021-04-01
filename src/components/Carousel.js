import React from "react";
import Slider from "react-slick"
import * as S from './styled'

import ImagemLogfo from '../images/logo.png'

const Carousel = () => {

  var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      initialSlide: 0,
  };

  return (
    <S.ContainerCarousel>
      <div className="flex flex-col w-full">
        <Slider {...settings}>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={ImagemLogfo}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={ImagemLogfo}/>
            </div>
          </div>
        </Slider>
      </div>
    </S.ContainerCarousel>
  );
}

export default Carousel