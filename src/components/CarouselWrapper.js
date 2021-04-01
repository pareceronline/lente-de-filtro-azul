import React from 'react'
import { Link } from 'gatsby'

import * as S from './styled'
import Subscribe from '../components/Subscribe'
import Carousel from '../components/Carousel'
import modelo from '../images/modelo2.png'
import logo from '../images/logo-preto.png'

const CarouselWrapper = () => (
 <S.ContainerCarouselWrapper>
  <div className="flex flex-row w-full">

    <div className="hidden md:flex flex-col items-center w-1/2">
      <img src={modelo} alt="Modelo" />
    </div>

    <div className="flex flex-row w-full md:w-1/2 items-end mb-3">

      <div className="flex flex-col w-full items-center">
        <Carousel />

        <div className="flex flex-col w-full mb-3">
          <ul>
            <li className="font-bold text-base text-preto"><Link to="/#1"><span>Evite dores de cabeças constantes.</span></Link></li>
            <li className="font-bold text-base text-preto"><Link to="#2"><span>Melhore seu sono</span></Link></li>
            <li className="font-bold text-base text-preto"><Link to="#3"><span>Enxergue com mais conforto</span></Link></li>
            <li className="font-bold text-base text-preto"><Link to="#4"><span>Ideal para qualquer pessoa e óculos</span></Link></li>
            <li className="font-bold text-base text-preto"><Link to="#5"><span>Diga adeus a visão embaçada</span></Link></li>
          </ul>
        </div>

        <div className="flex flex-col w-full items-center mt-8 md:mt-0">
          <div className="flex flex-col w-3/4 bg-white rounded-lg items-center shadowBox">
            <img className="w-32 mt-3" src={logo} alt="Logo" />
            <strong className="text-base text-center text-preto">Faça agora mesmo seu orçamento com a gente!</strong>
            <div className="flex w-full p-3">
            <Subscribe/>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
 </S.ContainerCarouselWrapper>
)

export default CarouselWrapper