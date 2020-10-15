import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/About";

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="h-56 md:h-80 mt-24 text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide bg-gradient-to-r from-orange-500 to-orange-900 flex justify-center items-center">
      <h1 className="font-poppins">About Us</h1>
    </div>
    <About />
  </Layout>
);

export default AboutPage;
