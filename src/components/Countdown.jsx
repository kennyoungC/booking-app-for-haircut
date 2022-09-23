import React, { useEffect, useState } from "react"

const HOURS = 1000 * 60 * 60
const MINUTES = 1000 * 60
const Countdown = ({ date }) => {
  console.log(date.getHours() + ":" + date.getMinutes())
  const [countdown, setCountdown] = useState({
    day: "",
    sec: "",
    hour: "",
    minute: "",
  })

  const timerEndDate = new Date(new Date(date).getTime())

  const updateTimer = () => {
    const currentTime = new Date().getTime()
    const difference = timerEndDate.getTime() - currentTime

    const remainingDays = Math.floor(difference / (HOURS * 24))
    const remainingHours = Math.floor((difference % (HOURS * 24)) / HOURS)
    const remainingMinutes = Math.floor((difference % HOURS) / MINUTES)
    const remainingSeconds = Math.floor((difference % MINUTES) / 1000)

    const formattedDays =
      remainingDays < 10 ? `0${remainingDays}` : `${remainingDays}`
    const formattedHours =
      remainingHours < 10 ? `0${remainingHours}` : `${remainingHours}`
    const formattedMinutes =
      remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`

    setCountdown({
      day: formattedDays,
      sec: formattedSeconds,
      minute: formattedMinutes,
      hour: formattedHours,
    })
  }

  useEffect(() => {
    setInterval(updateTimer, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className=" flex gap-6 xl:justify-center xl:items-center md:gap-5 ">
      <div>
        <div className="rounded-lg shadow-xl bg-secondaryDark border w-14 h-14 lg:w-12 lg:h-12 flex items-center justify-center relative">
          <div className="bg-veryDarkBlue w-2 h-2 rounded-lg absolute -left-1"></div>
          <div className="bg-veryDarkBlue w-2 h-2 rounded-lg absolute -right-1"></div>

          <h1 id="days" className="text-primary text-xl">
            {countdown.day}
          </h1>
        </div>
        <h5 className="uppercase text-secondary mt-2 text-xs sm:text-sm text-center">
          days
        </h5>
      </div>

      <div>
        <div className="rounded-lg shadow-xl bg-secondaryDark border w-14 h-14 lg:w-12 lg:h-12  flex items-center justify-center relative">
          <div className="bg-veryDarkBlue w-2 h-2 rounded-lg absolute -left-1"></div>
          <div className="bg-veryDarkBlue w-2 h-2 rounded-lg absolute -right-1"></div>

          <h1 id="hours" className="text-primary text-xl">
            {countdown.hour}
          </h1>
        </div>
        <h5 className="uppercase text-secondary mt-2 text-xs sm:text-sm text-center">
          hours
        </h5>
      </div>

      <div>
        <div className="rounded-lg shadow-xl bg-secondaryDark border w-14 h-14 lg:w-12 lg:h-12 flex items-center justify-center relative">
          <div className="bg-veryDarkBlue w-2 h-2 rounded-lg absolute -left-1"></div>
          <div className="bg-veryDarkBlue w-2 h-2 rounded-lg absolute -right-1"></div>

          <h1 id="minutes" className="text-primary text-xl">
            {countdown.minute}
          </h1>
        </div>
        <h5 className="uppercase text-secondary mt-2 text-xs sm:text-sm text-center">
          minutes
        </h5>
      </div>

      <div>
        <div className="rounded-lg shadow-xl bg-secondaryDark border w-14 h-14 lg:w-12 lg:h-12 flex items-center justify-center relative">
          <div className="bg-veryDarkBlue w-2 h-2 rounded-lg absolute -left-1"></div>
          <div className="bg-veryDarkBlue w-2 h-2 rounded-lg absolute -right-1"></div>

          <h1 id="seconds" className="text-primary text-xl">
            {countdown.sec}
          </h1>
        </div>
        <h5 className="uppercase text-secondary mt-2 text-xs sm:text-sm text-center">
          seconds
        </h5>
      </div>
    </div>
  )
}

export default Countdown
