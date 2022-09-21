import Address from "./components/Address"
import Booking from "./components/Booking"
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
    </div>
  )
}

export default App
