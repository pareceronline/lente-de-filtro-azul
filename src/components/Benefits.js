import React from 'react'

import * as S from './styled'

import benefits01 from '../images/benefits01.jpg'
import benefits02 from '../images/benefits02.jpg'
import benefits03 from '../images/benefits03.jpg'
import benefits04 from '../images/benefits04.jpg'
import benefits05 from '../images/benefits05.jpg'

const Benefits = () => (
  <S.ContainerBenefits>

      {/* Card 1 */}
      <div id="1" className="flex flex-col md:flex-row w-full py-8">

        <div className="bg-red-400 flex flex-col w-full md:w-1/2 clip-right">
          <img src={benefits01} alt="imagem 1" />
        </div>

        <div className="flex flex-col w-full md:w-1/2 justify-center px-3 md:p-0">
          <h2 className="text-2xl text-preto font-bold leading-6 mt-2 md:mt-0">1. Evite dores de cabeças constantes</h2>
          <p className="text-lg text-preto mt-2">
            Se a sua rotina exige que você passe longas horas conectados 
            no computador ou no celular, então seus óculos com toda certeza 
            precisam ter o filtro da luz azul.
          </p>
          <p className="text-lg text-preto mt-2">
          A iluminação desses aparelhos tem 2 tons de azul. Um deles que é 
          positivo e estimula nossa produtividade (turquesa) e o outro que 
          é responsável por desencadear a fadiga ocular e o ressecamento dos 
          olhos (violeta). O filtro azul  permite que suas lentes filtrem essas
          duas tonalidades, permitindo apenas que a turquesa chegue nos seus olhos.
          </p>
        </div >

      </div>


      {/* Card 02 */}
      <div id="2" className="flex flex-col-reverse md:flex-row w-full py-8">

      <div className="flex flex-col w-full md:w-1/2 justify-center px-3 md:p-0">
          <h2 className="text-2xl text-preto font-bold leading-6 mt-2 md:mt-0">Melhore seu sono</h2>
          <p className="text-lg text-preto mt-2">
          Como comentamos, existem dois tipos de luz azul que são 
          emitidas dos celulares e computadores. A violeta é a mais 
          prejudicial para a sua saúde, pois além dos problemas já citados, 
          também mexe com o seu relógio biológico. Ela estimula o cérebro a 
          ficar sempre alerta e reduz a produção da melatonina, o hormônio 
          responsável pelo seu descanso no período da noite.
          </p>
          <p className="text-lg text-preto mt-2">
          Então o filtro nas lentes impede que esse feixe chegue na sua 
          retina e suas noites de sono estão garantidas.
          </p>
        </div >

        <div className="bg-red-400 flex flex-col w-full md:w-1/2 clip-left">
          <img src={benefits02} alt="imagem 1" />
        </div>

      </div>

      {/* Card 3 */}
      <div id="3" className="flex flex-col md:flex-row w-full py-8">

        <div className="bg-red-400 flex flex-col w-full md:w-1/2 clip-right">
          <img src={benefits03} alt="imagem 1" />
        </div>

        <div className="flex flex-col w-full md:w-1/2 justify-center px-3 md:p-0">
          <h2 className="text-2xl text-preto font-bold leading-6 mt-2 md:mt-0">3. Enxergue com mais conforto</h2>
          <p className="text-lg text-preto mt-2">
          Ao investir em óculos com filtros de luz azul, você está investindo 
          no conforto da sua visão. Assim como acontece com as dores de cabeça, 
          sem o impacto da luz violeta na sua retina, sintomas como olhos 
          lacrimejantes e visão embaçada não serão mais parte da sua rotina.
          </p>
        </div >

      </div>

      {/* Card 04 */}
      <div id="4" className="flex flex-col-reverse md:flex-row w-full py-8">

      <div className="flex flex-col w-full md:w-1/2 justify-center px-3 md:p-0">
          <h2 className="text-2xl text-preto font-bold leading-6 mt-2 md:mt-0">4. Ideal para qualquer pessoa e óculos</h2>
          <p className="text-lg text-preto mt-2">
          Uma das grandes vantagens das lentes  filtro azul é que pode ser usada 
          em qualquer idade. De crianças a idosos, essa proteção não tem desvantagens 
          ou contraindicações. Inclusive tem se tornado cada vez mais populares entre
           os mais jovens por conta do tempo que eles passam no celular.
          </p>
          <p className="text-lg text-preto mt-2">
          Além disso, essa tecnologia pode ser aplicada tanto em óculos de grau quanto sem. 
          Caso você não tenha problemas de visão, mas mesmo assim quer proteger-se da 
          luz azul é completamente possível.
          </p>
        </div >

        <div className="bg-red-400 flex flex-col w-full md:w-1/2 clip-left">
          <img src={benefits04} alt="imagem 1" />
        </div>

      </div>  

      {/* Card 5 */}
      <div id="5" className="flex flex-col md:flex-row w-full py-8">

        <div className="bg-red-400 flex flex-col w-full md:w-1/2 clip-right">
          <img src={benefits05} alt="imagem 1" />
        </div>

        <div className="flex flex-col w-full md:w-1/2 justify-center px-3 md:p-0">
          <h2 className="text-2xl text-preto font-bold leading-6 mt-2 md:mt-0">5. Diga adeus a visão embaçada</h2>
          <p className="text-lg text-preto mt-2">
          Ao ficarmos muito tempo na frente do computador e do celular 
          sem a proteção correta é muito comum ficarmos com a visão embaçada.
           Como já comentamos, isso é um dos efeitos da luz azul-violeta que é 
           completamente filtrada pelas lentes de filtro azul .
          </p>
          <p className="text-lg text-preto mt-2">
          A iluminação desses aparelhos tem 2 tons de azul. Um deles que é 
          positivo e estimula nossa produtividade (turquesa) e o outro que 
          é responsável por desencadear a fadiga ocular e o ressecamento dos 
          olhos (violeta). O filtro azul  permite que suas lentes filtrem essas
          duas tonalidades, permitindo apenas que a turquesa chegue nos seus olhos.
          </p>
        </div >

      </div>          

      
  </S.ContainerBenefits>
)

export default Benefits