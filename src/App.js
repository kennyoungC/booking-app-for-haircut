import Address from "./components/Address"
import Booking from "./components/Booking"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Booking />
      <Address />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
