/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { arrowLeft, arrowRight } from "../assets/icons";

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute bottom-0 md:bottom-4 min-[1400px]:bottom-8 md:left-[19rem] lg:left-[22rem] min-[1350px]:left-[30.25rem] min-[1400px]:left-[32.5rem]  flex items-end gap-x-[2.4rem] pl-2">
        <button
            className="p-1 lg:p-2 rounded-full shadow bg-tertiary-1000"
            onClick={prev}
        >
            <img src={arrowLeft} alt="arrow left icon" />
        </button>
        <button
            className="p-1 lg:p-2 rounded-full shadow bg-tertiary-1000"
            onClick={next}
        >
            <img src={arrowRight} alt="arrow right icon" />
        </button>
      </div>
    </div>
  )
}

export default Carousel;