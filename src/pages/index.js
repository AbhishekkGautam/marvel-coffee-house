import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import VisitUs from "../components/VisitUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection heroclass="min-h-screen flex justify-center items-center flex-col" />
    <VisitUs />
  </Layout>
)

export default IndexPage
