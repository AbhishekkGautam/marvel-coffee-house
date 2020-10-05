import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const CateringSection = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "burger.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="pt-10 pb-5 md:py-20 bg-orange-200">
      <div className="max-w-screen-lg mx-auto w-5/6">
        <h1 className="text-center text-4xl md:text-4xl lg:text-5xl font-poppins font-light pt-6 lg:pt-8 tracking-wide">
          Catering
        </h1>
        <div className="py-10 mb-5 flex flex-col md:flex-row items-center">
          <div className="w-5/6 md:w-full">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
          <div className="mt-4 md:ml-10 lg:pl-24">
            <p className="text-lg font-light md:text-base lg:text-xl pt-8 md:pt-0  md:text-left leading-relaxed">
              We offer various catering options, from sandwich platters to boxed
              lunches. To discuss catering options and place an order,
              <br />
              <span className="font-semibold"> please call 434-392-5282.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CateringSection
