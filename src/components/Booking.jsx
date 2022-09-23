import React, { useState } from "react"
import Countdown from "./Countdown"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import setHours from "date-fns/setHours"
import setMinutes from "date-fns/setMinutes"
import format from "date-fns/format"

const Booking = () => {
  const [appointments, setAppointments] = useState([])

  const [bookings, setBookings] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    number: "",
  })

  const submitHandler = (e) => {
    e.preventDefault()

    const newBookings = bookings
    setAppointments([...appointments, newBookings])
    setBookings({
      date: "",
      time: "",
      name: "",
      email: "",
      number: "",
    })
  }

  return (
    <div className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-5 bg-gray-400">
      <div>
        <h3 className="text-center text-xl font-bold pb-3">Book Appointment</h3>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Name<span className="text-red-700">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              required
              value={bookings.name}
              onChange={(e) =>
                setBookings({ ...bookings, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Phone Number<span className="text-red-700">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="tel"
              required
              value={bookings.number}
              onChange={(e) =>
                setBookings({ ...bookings, number: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Pick a Date<span className="text-red-700">*</span>
            </label>
            <DatePicker
              selected={bookings.date}
              onChange={(date) => setBookings({ ...bookings, date })}
              minDate={new Date()}
              filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              isClearable
              showTimeSelect
              minTime={setHours(setMinutes(new Date(), 0), 10)}
              maxTime={setHours(setMinutes(new Date(), 30), 23)}
              excludeTimes={[
                setHours(setMinutes(new Date(), 0), 17),
                setHours(setMinutes(new Date(), 30), 18),
                setHours(setMinutes(new Date(), 30), 19),
                setHours(setMinutes(new Date(), 30), 17),
              ]}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="email"
            >
              Email
            </label>
            <p className="text-xs mb-2">
              Please include your email if you want to receive notification 1hr
              before you Appointment time
            </p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={bookings.email}
              onChange={(e) =>
                setBookings({ ...bookings, email: e.target.value })
              }
            />
          </div>
          <button
            className=" block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
            type="submit"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-center text-xl font-bold pb-3 ">
          Pending Appointment(s)
        </h3>
        <div className="overflow-y-scroll h-[400px] flex flex-col gap-6">
          {appointments.length === 0 && (
            <p className="text-center text-2xl">
              There are currently no Pending Appointment!!!
            </p>
          )}
          {appointments.length !== 0 &&
            appointments.map((bookings, i) => (
              <div
                key={i}
                className="grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-0  border shadow-lg p-4"
              >
                <div className="flex flex-col gap-1">
                  <p className=" text-xl font-semibold">
                    Customer Name:{" "}
                    <span className="text-base font-normal">
                      {bookings.name}
                    </span>
                  </p>
                  <p className=" text-xl font-semibold">
                    Date:{" "}
                    <span className="text-base font-normal">
                      {format(bookings.date, "yyyy MMMM dd")}
                    </span>
                  </p>
                  <p className=" text-xl font-semibold">
                    Time:{" "}
                    <span className="text-base font-normal">
                      {format(bookings.date, "K:mma")}
                    </span>
                  </p>
                </div>
                <Countdown date={bookings.date} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Booking
