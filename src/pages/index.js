import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import VisitUs from "../components/VisitUs"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      heroclass="min-h-screen flex justify-center items-center flex-col"
    />
    <VisitUs />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "hero-image.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
