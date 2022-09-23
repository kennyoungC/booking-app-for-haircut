/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react"

const Address = (props) => {
  return (
    <div className="container mx-auto py-16 px-4 gap-5 text-center">
      <div>
        <h2 className="text-center text-xl font-bold ">Address</h2>
        <address className="py-3">
          Universiteto Gatve 8, Akademija, Kaunas. Lithuania
        </address>
      </div>
      <div className="mapouter flex justify-center">
        <div className="gmap_canvas hidden  lg:block">
          <iframe
            width="900"
            height="600"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=universiteto%20gatve%208%20Akademija&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
        <div className="gmap_canvas hidden  md:block lg:hidden">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=universiteto%20gatve%208%20Akademija&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
        <div className="gmap_canvas hidden sm:block md:hidden">
          <iframe
            width="500"
            height="420"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=universiteto%20gatve%208%20Akademija&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
        <div className="gmap_canvas block sm:hidden">
          <iframe
            width="360"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=universiteto%20gatve%208%20Akademija&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Address
