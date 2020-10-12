import React, { Component } from "react";
import Img from "gatsby-image";

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category;
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ["all", ...categories];
  return categories;
};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges),
    };
  }

  handleItems = category => {
    let tempItems = [...this.state.items];
    if (category === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems };
      });
    } else {
      let items = tempItems.filter(({ node }) => node.category === category);
      this.setState(() => {
        return { coffeeItems: items };
      });
    }
  };

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="mt-8 md:mt-10 mb-24">
          <div className="max-w-screen-lg mx-auto w-5/6 md:w-3/4">
            {/*Categories*/}
            <div className="flex items-start justify-between md:justify-evenly flex-wrap mb-12 md:mb-16">
              {this.state.categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="py-2 px-8 mt-5 text-xs lg:text-lg capitalize rounded lg:py-2 lg:px-10 hover:text-white hover:bg-orange-700 border border-orange-700 focus:outline-none transition-all duration-300 ease-linear"
                    onClick={() => {
                      this.handleItems(category);
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            {/*Items*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 col-gap-10 gap-y-8 xl:col-gap-16">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div className="flex" key={node.id}>
                    <div className="">
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="pl-5">
                      <div className="flex justify-between">
                        <h2 className="text-base capitalize font-medium md:text-xl xl:text-2xl">
                          {node.title}
                        </h2>
                        <p className="bg-orange-200 text-base md:text-xl xl:text-2xl px-2 rounded-md">
                          ${node.price}
                        </p>
                      </div>
                      <p className="text-xs md:text-sm lg:text-xs xl:text-sm pt-3 md:pt-5 lg:pt-4">
                        {node.description.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="w-4/5">
          <div className="">
            <h1>There are no items to display.</h1>
          </div>
        </section>
      );
    }
  }
}
