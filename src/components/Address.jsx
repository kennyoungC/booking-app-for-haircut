import React from "react"

const Address = (props) => {
  return (
    <div className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-5 ">
      <div>
        <h2 className="text-center text-xl font-bold">Address</h2>
        <address>Universiteto Gatve 8, Akademija, Kaunas. Lithuania</address>
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=universiteto%20gatve%208%20Akademija&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Address
