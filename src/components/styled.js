import styled from 'styled-components'
import media from 'styled-media-query'

import background from '../images/background.png'


export const ContainerHeader = styled.section`
  width: 100%;
  height: 100vh;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  backdrop-filter: brightness(70%);

  .modelo1 {
    transform: rotateY(180deg);
  }
`

export const ContainerCarouselWrapper = styled.section`


  li {
    position: relative;
    left: 0;
    list-style: none;
    margin: 4px 0;
    border-left: 5px solid #0FAEBF;
    transition: 0.1s;
    cursor: pointer;


    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transform: scalex(0);
        transform-origin: left;
        transition: 0.5s;
    }

    &:hover {
        left: 10px;
        color: #0FAEBF;
    }

    span {
      margin-left: 10px;
    }
  }

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 10px;
    position: relative;
    bottom: 0;
    background-color: #ff9637;
    border-radius: 100px;

    ${media.lessThan("medium")`
      display: none;
    `}
  }
`

export const ContainerCarousel = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;

  .slick-arrow {

    &:before {
      color: #0FAEBF;

      ${media.lessThan("medium")`
      content: "";
      `}
    }
  }

  p {
    font-size: 13px;

    ${media.lessThan('small')`
      font-size: 9px;
    `}
  }
`

export const ContainerSocialProof = styled.section`
  width: 100%;
  height: 100vh;

`

export const ContentProof = styled.div`

`

export const ContainerSubsbribeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const ContainerBenefits = styled.section`
  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
  }

  .clip-right {
    clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
  }

  .clip-left {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%);
  }
`

export const ContainerAddress = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContainerWhatsApp = styled.div`
  display: absolute;
  position: fixed;
  z-index: 9999;
  right: 40px;
  bottom: 40px;
  
  img {
    width: 50px;
    height: auto;
  }
`