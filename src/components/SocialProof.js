import React from "react";
import Slider from "react-slick"
import * as S from './styled'

import avatar1 from '../images/avatar1.png'
import avatar2 from '../images/avatar2.png'

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
                  <div className="flex flex-col items-center transform  -translate-y-10">
                    <img className="w-20" src={avatar1} alt="Avatar1" />
                    <h2 className="text-lg font-bold text-preto text-center">Karine Pereira</h2>
                    <div className="p-2">
                      <p className="text-center text-preto text-proof">"Fui à ótica Santa Luzia comprar uma lente  de grau e uma armação para minha necessidade de enxergar melhor de perto. Gostei muito da experiência, pelo atendimento e atenção além das qualidades e variedades que os produtos oferecem!!!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full h-64 ">
              <div className="flex flex-col w-full h-full items-center justify-center ">
                <div className="bg-white flex flex-col w-3/4 h-40 rounded-lg shadowBox">
                  <div className="flex flex-col items-center transform  -translate-y-10">
                    <img className="w-20" src={avatar2} alt="Avatar1" />
                    <h2 className="text-lg font-bold text-preto text-center">Lara Pereira</h2>
                    <div className="p-2">
                    <p className="text-center text-preto text-proof">
                    Primeiramente não tenho o que por nem tirar com o atendimento, pessoas completamente educadas
                      e atenciosas. Tive uma ótima experiência com as lentes de filtro azul, tenho aulas em Ead fico muito em frente ao computador me 
                       ajudou muito com as dores de cabeça!
                    </p>
                    </div>
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