import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const Product = ({ product }) => {
  return (
    <div className="">
      <div className="bg-white ml-2 rounded-lg overflow-hidden shadow-lg border">
        <div className="relative">
          <Img
            className="w-full h-40 object-cover"
            fluid={product.image.fluid}
            alt="card-image"
          />
          <p className="text-base lg:text-sm xl:text-base rounded-tl tracking-wide font-light pt-2 absolute bottom-0 right-0 bg-black text-white px-4 py-2">
            ${product.price}
          </p>
        </div>
        <div className="px-6 py-3 md:px-4 text-center">
          <h1 className="text-xl py-2">{product.title}</h1>
          <Link to="/about">
            <button
              className="snipcart-add-item w-4/5 text-sm py-2 px-4 mt-3 mb-3 rounded-md bg-orange-300 hover:bg-black hover:text-white transition-all duration-500 ease-linear"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-url="www.marvelcoffee.netlify.app/checkout"
              data-item-image={product.image.fluid.src}
              data-item-name={product.title}
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
