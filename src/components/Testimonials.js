import React from "react"

const Testimonials = () => {
  return (
    <section className="bg-orange-200 pb-10 xl:pb-32 md:pt-10 xl:pt-16">
      <h1 className="text-3xl md:text-4xl xl:text-4xl px-10 md:px-0 font-poppins font-light pt-20 pb-10 xl:pb-16 lg:pt-16 text-center tracking-wide">
        What Our Customers Are Saying
      </h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around mx-auto px-10 md:px-24 lg:px-10 xl:pl-32 xl:text-lg">
        <p className="lg:w-5/12 py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
          “Great food, friendly service; warm place on a chilly morning.”
        </p>
        <p className="lg:w-5/12 py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
          “We stopped here everyday during our visit to Farmville.The employees
          were so friendly and everything we had was delicious.Very relaxed
          environment.”
        </p>
        <p className="lg:w-5/12 py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
          “Tons of options, some vegan, vegetarian diet options also.”
        </p>
        <p className="lg:w-5/12 py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
          “Nice atmosphere, really friendly staff, and excellent coffee…worth
          the stop for a mid afternoon coffee!”
        </p>
        <p className="lg:w-5/12 py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
          “Great menu, nice live music variety, friendly and polite staff, easy
          parking.”
        </p>
        <p className="lg:w-5/12 py-3 px-3 my-3 md:my-4 lg:my-3 xl:px-5 xl:py-5 bg-white rounded-md">
          They have everything! Breakfast, sandwiches, coffee, baked goods, ice
          cream, ground coffee for purchase, and, apparently, live music!
        </p>
      </div>
    </section>
  )
}

export default Testimonials
