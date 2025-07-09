import Toolbox from "./Component/Navigation/Toolbox"
import About from "./Pages/About"
import Home from "./Pages/Home"
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <Toolbox/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      </>
  )
}

export default App
