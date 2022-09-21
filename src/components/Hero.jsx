import React, { useEffect, useState } from "react"

const Hero = () => {
  const [slider, setSlider] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlider(!slider)
    }, 3000)
    return () => {
      clearInterval(timer)
    }
  }, [slider])

  const slide1 = (
    <>
      <div
        className={`max-w-xl text-center sm:text-left transform transition-all duration-150 ease-out scale-${
          slider ? 0 : 1
        } ${slider ? "hidden" : "block"}`}
      >
        <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
          Welcome To Silas Haircut
        </p>
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Best Haircut Salon
          <strong className="block font-extrabold text-rose-700">
            in City.
          </strong>
        </h1>

        <div className="flex flex-wrap mt-8 text-center gap-4">
          <a
            href="/"
            className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
          >
            Book An Appointment Now!!!
          </a>
        </div>
      </div>
    </>
  )
  const slide2 = (
    <>
      <div
        className={`max-w-xl text-center sm:text-left transform transition-all duration-150 ease-out scale-${
          slider ? 1 : 0
        } ${!slider ? "hidden" : "block"}`}
      >
        <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
          Welcome To Silas Haircut
        </p>
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Best Hair Salon for a
          <strong className="block font-extrabold text-rose-700">
            Professional Look.
          </strong>
        </h1>

        <div className="flex flex-wrap mt-8 text-center gap-4">
          <a
            href="/"
            className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
          >
            Book An Appointment Now!!!
          </a>
        </div>
      </div>
    </>
  )
  return (
    <>
      <section className="relative bg-center bg-no-repeat bg-cover bg-[url(https://i.pinimg.com/736x/b1/6c/fb/b16cfba3336d3be3fcf24ccf54169d24.jpg)]">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative px-4 py-32 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex">
          {slide2}
          {slide1}
        </div>
      </section>
    </>
  )
}

export default Hero
