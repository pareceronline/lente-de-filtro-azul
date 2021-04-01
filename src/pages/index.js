import React from "react"
import Layout from "../components/Layout"
import CarouselWrapper from '../components/CarouselWrapper'
import SocialProof from '../components/SocialProof'
import SubsbribeSection from "../components/SubsbribeSection"
import Benefits from "../components/Benefits"
import Address from "../components/Address"


export default () => {
  return (
    <Layout>
      <main className="max-w-6xl flex-grow mx-auto flex flex-col justify-around">
        <CarouselWrapper />
        <SocialProof />
        <Benefits />
        <SubsbribeSection />
        <Address />
      </main>
    </Layout>
  )
}
