import Address from "./components/Address"
import Booking from "./components/Booking"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Booking />
      <Address />
    </div>
  )
}

export default App
