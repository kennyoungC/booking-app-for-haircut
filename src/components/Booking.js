import React from "react"

const Booking = () => {
  return (
    <div className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-5 bg-gray-200">
      <div>
        <h3 className="text-center text-xl font-bold pb-3">Book Appointment</h3>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="date"
            >
              Pick a Date<span className="text-red-700">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="time"
            >
              What time?<span className="text-red-700">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="time"
              type="time"
              required
            />
          </div>
          <div className=" relative hidden ">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Available Time</option>
              <option>2pm</option>
              <option>3pm</option>
              <option>4pm</option>
              <option>5pm</option>
              <option>6pm</option>
              <option>7pm</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold "
              for="email"
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
