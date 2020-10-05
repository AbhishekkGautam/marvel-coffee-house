import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const MusicSection = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "singer.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="bg-orange-300">
      <div className="grid md:grid-cols-12">
        <div className="lg:col-span-6 md:col-span-6 mx-auto">
          <h1 className="text-3xl lg:text-4xl font-poppins md:pl-8 lg:pt-16 lg:pl-12 pt-8 text-center md:text-left tracking-wide">
            Live Music
          </h1>
          <p className="text-lg font-light px-5 py-5 md:px-8 lg:text-xl lg:tracking-wide lg:pl-12 lg:pt-8">
            Join us for Open Mic every Thursday night at 6:30pm in Farmville and
            every Saturday night for Live Music from 7pm-9pm!
          </p>
        </div>
        <div className="lg:col-span-6 md:col-span-6">
          <div className="relative">
            <Img fluid={data.file.childImageSharp.fluid} />
            <p className="absolute text-white text-sm tracking-wide font-hairline inset-x-0 bottom-0 py-2 px-5">
              Caleb Elder, NBC’s Voice 2014 contestant and local musician.
              12/26/2015
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MusicSection
