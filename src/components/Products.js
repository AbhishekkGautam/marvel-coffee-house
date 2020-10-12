import React from "react";
import Product from "./Product";
import { graphql, useStaticQuery } from "gatsby";

const Products = () => {
  const data = useStaticQuery(graphql`
    {
      products: allContentfulCoffeeProduct {
        edges {
          node {
            id
            title
            price
            image {
              fluid(maxHeight: 426) {
                src
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return (
    <section className="bg-orange-200 py-12 md:py-20">
      <div className="max-w-screen-lg mx-auto w-5/6 xl:w-3/4">
        <h1 className="text-center text-4xl lg:text-5xl font-poppins font-light pt-6 lg:pt-8 tracking-wide mb-12 md:mb-20">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-10 gap-y-8 lg:gap-y-16 xl:col-gap-16">
          {data.products.edges.map(({ node: product }) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
