import React from "react"

import * as S from "./styled"

import logo from "../images/logo-whatsapp.png"

const WhatsApp = () => (
  <S.ContainerWhatsApp>
    <a
      href="https://api.whatsapp.com/send?phone=5535999613341&text=Ol%C3%A1.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20seu%20produto!"
      target="_blank"
    >
      <img src={logo} alt="Logo WhatsApp" />
    </a>
  </S.ContainerWhatsApp>
)

export default WhatsApp
