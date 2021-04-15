import React from 'react'
import { Link } from 'gatsby'

import * as S from './styled'


import modelo from '../images/modelo1.png'
import logo from '../images/logo.png'

const Header = () => (
 <S.ContainerHeader>
   <div className="flex flex-col justify-center md:flex-row max-w-6xl mx-auto h-full">

    <div className="flex flex-col items-center md:items-end justify-center w-full md:w-1/2">
      <img className="w-64 md:w-full" src={logo} alt="Logo" />
      <div className="flex flex-col items-center text-center md:text-left w-10/12 h-auto">
      <h2 className="text-white text-2xl md:text-4xl">
        5 motivos para investir na lente
        de filtro azul
      </h2>
      </div>
      <div className="flex flex-col w-10/12 h-auto items-center md:items-start">
        <Link className="bg-azul hoverButton rounded-lg text-white text-lg w-48 h-12 mt-3 flex items-center content-center justify-center font-bold" to="#subscribe" aria-label="Link">ORÇAMENTO</Link>
      </div>
    </div>

    <div className="hidden md:flex flex-col items-center w-1/2">
      <img className=" absolute bottom-0 modelo1" src={modelo} alt="Imagem Modelo" style={{width: '45%'}}/>
    </div>

   </div>
 </S.ContainerHeader>
)

export default Header