import React from "react";
import Slider from "react-slick"
import * as S from './styled'

import imagem1 from '../images/1.png'
import imagem2 from '../images/2.png'
import imagem3 from '../images/3.png'
import imagem4 from '../images/4.png'
import imagem5 from '../images/5.png'
import imagem6 from '../images/6.png'
import imagem7 from '../images/7.png'
import imagem8 from '../images/8.png'
import imagem9 from '../images/9.png'
import imagem10 from '../images/10.png'
import imagem11 from '../images/11.png'

const Carousel = () => {

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
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
              <img className="w-32" alt="Imagem" src={imagem1}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={imagem2}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={imagem3}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={imagem4}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={imagem5}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={imagem6}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={imagem7}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={imagem8}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={imagem9}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={imagem10}/>
            </div>
          </div>
          <div className="w-full h-48">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img className="w-32" alt="Imagem" src={imagem11}/>
            </div>
          </div>
        </Slider>
      </div>
    </S.ContainerCarousel>
  );
}

export default Carousel