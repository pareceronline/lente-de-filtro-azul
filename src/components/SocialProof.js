import React from "react";
import Slider from "react-slick"
import * as S from './styled'

import avatar1 from '../images/avatar1.png'

const SocialProof = () => {

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
      <div className="flex flex-col w-full justify-center items-center mt-12 md:mt-16 ">
        <div className="flex flex-col w-full md:w-3/5 ">
          <Slider {...settings}>

            <div className="flex w-full h-64 ">
              <div className="flex flex-col w-full h-full items-center justify-center ">
                <div className="bg-white flex flex-col w-4/6 h-40 rounded-lg shadowBox">
                  <div className="flex flex-col items-center transform  -translate-y-12">
                    <img className="w-24" src={avatar1} alt="Avatar1" />
                    <h2 className="text-lg font-bold text-preto">Patrícia</h2>
                    <p className="text-sm text-center text-preto">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full h-64">
              <div className="flex flex-col w-full h-full items-center justify-center">
                <div className="bg-white flex flex-col w-4/6 h-40 rounded-lg shadowBox">
                  <div className="flex flex-col items-center transform  -translate-y-12">
                    <img className="w-24" src={avatar1} alt="Avatar1" />
                    <h2 className="text-lg font-bold text-preto">Jessica</h2>
                    <p className="text-sm text-center text-preto">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full h-64">
              <div className="flex flex-col w-full h-full items-center justify-center ">
                <div className="bg-white flex flex-col w-4/6 h-40 rounded-lg shadowBox">
                  <div className="flex flex-col items-center transform  -translate-y-12">
                    <img className="w-24" src={avatar1} alt="Avatar1" />
                    <h2 className="text-lg font-bold text-preto">Amanda</h2>
                    <p className="text-sm text-center text-preto">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you"</p>
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </S.ContainerCarousel>
  );
}

export default SocialProof