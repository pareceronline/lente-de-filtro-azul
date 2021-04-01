import React from 'react'

import * as S from './styled'

import logo from '../images/logo-preto.png'

const Address = () => (
  <S.ContainerAddress>
    <div className="flex flex-col w-full mt-5 p-3 md:p-0">
      <div className="flex flex-col w-full py-5">
        <img className="w-32" src={logo} alt="Logo" />
        <span className="text-base hover:underline text-preto font-bold mt-3">
          <a href="https://goo.gl/maps/qUxKYZFkgzFKMw4P8" target="_blank" rel="noopener noreferrer">Endereço: Presidente Arthur Bernardes 1017 - Alfenas - Minas Gerais</a>
        </span>
        <span className="text-base hover:underline text-preto font-bold"><a href="tel:(35)99961-3341" target="_blank" rel="noopener noreferrer">Telefone: (35) 99961-3341</a></span>
        <span className="text-base hover:underline text-preto font-bold">Email: <a href="mailto:oticasantaluzia35@gmail.com " target="_blank" rel="noopener noreferrer">oticasantaluzia35@gmail.com</a></span>
        <span className="text-base hover:underline text-preto font-bold"><a href="https://instagram.com/oticasantaluziaalfenas" target="_blank" rel="noopener noreferrer">Instagram: @oticasantaluziaalfenas</a></span>
      </div>
    </div>
  </S.ContainerAddress>
)

export default Address