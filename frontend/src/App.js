import Navbar from "./components/Navbar"
import Home from "./Home"
import "./styles/global"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}
export default App;