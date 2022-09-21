import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

const Testimonials = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-16 px-4 gap-5 text-center w-[100%] md:w-[50%] ">
        <h2 className="text-center text-xl font-bold my-4"> Testimonials</h2>

        <Carousel>
          <div>
            <img
              src="https://menshaircuts.org/wp-content/uploads/2018/02/15801958_199155813883837_1497595799796711424_n1-e1518501398182.jpg"
              alt="/"
            />

            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>
                "Silas is excellent with curly hair. Best haircut I’ve ever had!
                The team are friendly and professional, always enjoy my visit
                there!." - Samason
              </p>
            </blockquote>
          </div>
          <div>
            <img
              src="https://menshaircuts.org/wp-content/uploads/2018/02/15801958_199155813883837_1497595799796711424_n1-e1518501398182.jpg"
              alt="/"
            />

            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>
                "This is the second time I’ve had my hair cut by silas, he is
                absolutely amazing! It wasn’t even that expensive, and I was in
                control the whole time!." - Pascal
              </p>
            </blockquote>
          </div>
          <div>
            <img
              src="https://menshaircuts.org/wp-content/uploads/2018/02/15801958_199155813883837_1497595799796711424_n1-e1518501398182.jpg"
              alt="/"
            />

            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p>
                "Loved my Hair Haircut, it was fantastic. Just a perfect Cut." -
                Pamilerin
              </p>
            </blockquote>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials
