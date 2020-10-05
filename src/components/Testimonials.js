import React from "react"

const Testimonials = () => {
  return (
    <section className="bg-orange-200 pb-10 md:pt-10">
      <h1 className="text-3xl md:text-4xl xl:text-4xl px-10 md:px-0 font-poppins font-light pt-20 pb-10 xl:pb-16 lg:pt-16 text-center tracking-wide">
        What Our Customers Are Saying
      </h1>
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-6 md:col-span-6 mx-auto px-10 md:px-24 lg:px-10 xl:pl-32 lg:flex lg:flex-col lg:justify-between xl:text-lg">
          <p className="py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
            “Great food, friendly service; warm place on a chilly morning.”
          </p>
          <p className="py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
            “We stopped here everyday during our visit to Farmville.The
            employees were so friendly and everything we had was delicious.Very
            relaxed environment.”
          </p>
          <p className="py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
            “Tons of options, some vegan, vegetarian diet options also.”
          </p>
        </div>
        <div className="lg:col-span-6 md:col-span-6 mx-auto px-10 md:px-24 lg:px-10 xl:pr-32 xl:px-16 lg:flex lg:flex-col lg:justify-between xl:text-lg">
          <p className="py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
            “Nice atmosphere, really friendly staff, and excellent coffee…worth
            the stop for a mid afternoon coffee!”
          </p>
          <p className="py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
            “Great menu, nice live music variety, friendly and polite staff,
            easy parking.”
          </p>
          <p className="py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
            They have everything! Breakfast, sandwiches, coffee, baked goods,
            ice cream, ground coffee for purchase, and, apparently, live music!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
