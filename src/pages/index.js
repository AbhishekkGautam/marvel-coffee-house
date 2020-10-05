import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import VisitUs from "../components/VisitUs"
import CateringSection from "../components/CateringSection"
import MusicSection from "../components/MusicSection"
import Testimonials from "../components/Testimonials"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      heroclass="min-h-screen flex justify-center items-center flex-col"
    />
    <VisitUs />
    <CateringSection />
    <MusicSection />
    <Testimonials />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "hero-image.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
