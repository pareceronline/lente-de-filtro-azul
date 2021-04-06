import React from "react"
import SEO from "./SEO"
import Header from '../components/Header'

import logobellmont from '../images/logo-bellmont.png'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main>{children}</main>
        <footer className="bg-preto flex justify-between items-center p-4">
          <div>
            <span className="text-white" style={{fontSize: "10px"}}>® 2021 - Todos os direito reservados | Ótica Santa Luzia</span>
          </div>
          <div>
            <a href="https://bellmontsistema.com.br" target="_blank" rel="noopener noreferrer" ><img  className="w-20" src={logobellmont} alt="Logo Bellmont Sistema" /></a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
