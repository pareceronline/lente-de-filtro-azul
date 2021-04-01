import React from 'react'

import * as S from './styled'

import logo from '../images/logo-preto.png'

const Address = () => (
  <S.ContainerAddress>
    <div className="flex flex-col w-full mt-5 p-3 md:p-0">
      <div className="flex flex-col w-full py-5">
        <img className="w-32" src={logo} alt="Logo" />
        <span className="text-base text-preto font-bold mt-3">Endereço: Lorem Ipsum is simply dummy text </span>
        <span className="text-base text-preto font-bold">Telefone: (35) 99999-9999</span>
        <span className="text-base text-preto font-bold">Email: mail@mail.com</span>
      </div>
    </div>
  </S.ContainerAddress>
)

export default Address