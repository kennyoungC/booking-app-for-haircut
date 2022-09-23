import React, { useState } from "react"

const avaibleTime = [
  "8AM",
  "10AM",
  "12AM",
  "2PM",
  "4PM",
  "6PM",
  "8PM",
  "10PM",
  "12PM",
]

const Booking = () => {
  const [bookings, setBookings] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
  })
  return (
    <div className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-5 bg-gray-400">
      <div>
        <h3 className="text-center text-xl font-bold pb-3">Book Appointment</h3>
        <form>
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
              Pick a Date<span className="text-red-700">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              required
              value={bookings.date}
              onChange={(e) =>
                setBookings({ ...bookings, date: e.target.value })
              }
            />
          </div>
          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="time"
            >
              What time?<span className="text-red-700">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="time"
              type="time"
              required
            />
          </div> */}
          <div className="mb-4">
            <h2 className="block text-gray-700 text-sm font-bold mb-2">
              Available Times<span className="text-red-700">*</span>
            </h2>
            <div className="grid grid-cols-6 gap-2">
              {avaibleTime.map((time) => (
                <button
                  type="button"
                  className="hover:bg-gray-700 hover:text-white bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 text-center"
                  onClick={() => setBookings({ ...bookings, time })}
                  key={time}
                >
                  {time}
                </button>
              ))}
            </div>
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
            type="button"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-center text-xl font-bold pb-3">
          Pending Appointment(s)
        </h3>
        <div>
          <p className="text-center">
            There are currently no Pending Appointment!!!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Booking
