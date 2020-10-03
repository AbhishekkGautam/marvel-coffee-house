import React from "react"

const VisitUs = () => {
  return (
    <section className="bg-orange-200">
      <div className="bg-orange-900 p-8 w-4/5 md:w-5/6 h-auto md:h-56 md:flex justify-around items-center">
        <div className="text-white text-3xl pb-5 lg:text-4xl tracking-wide font-light">
          <h1>Visit Us</h1>
        </div>
        <div className="text-gray-200 font-light text-sm md:text-base lg:text-lg tracking-wide">
          <h1 className="pb-3">236 N. Main St. Farmville, VA 23901</h1>
          <p>
            Open Monday - Friday 7:30am-3:00pm
            <br /> Saturday 8:00am-3:00pm
            <br /> Closed on Sunday
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisitUs
