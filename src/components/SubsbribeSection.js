import React from 'react'

import Subscribe from '../components/Subscribe'

import * as S from './styled'

import logo from '../images/logo-preto.png'

const SubsbribeSection = () => (
  <S.ContainerSubsbribeSection>
   <div className="flex flex-col md:flex-row w-4/5 md:w-3/4  bg-white rounded-lg shadowBox">

      <div className="flex flex-col w-full text-center md:w-2/4 justify-center p-4">
        <h2 className="text-lg font-bold mb-3">Onde encontro a lente de filtro azul ?</h2>
        <span className="text-sm md:text-lg text-preto">
        Se você chegou no final desse texto e percebeu que já passou por essas situações, 
        então está na hora de investir em lentes com filtro da luz azul. Na ótica santa luzia 
        temos laboratórios homologados que utilizam equipamentos de última geração com processos 
        convencionais e tecnologia digital free form. 
        </span>
        <span className="text-sm md:text-lg mt-3 text-preto">
        Todos os nossos profissionais são altamente capacitados, dão suporte a todas as 
        questões técnicas, Garantindo assim sempre um produto de excelente qualidade ao 
        nosso cliente.
        </span>
      </div>

      <div className="flex flex-col w-full items-center justify-around md:w-2/4 p-4">
        <img className="w-32 mt-3" src={logo} alt="Logo" />
        <strong className="text-base text-center text-preto">Faça agora mesmo seu orçamento com a gente!</strong>
        <div className="flex w-full p-3">
          <Subscribe/>
        </div>
      </div>

   </div>
  </S.ContainerSubsbribeSection>
)

export default SubsbribeSection