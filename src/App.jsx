import Toolbox from "./Component/Navigation/Toolbox"
import About from "./Pages/About"
import Home from "./Pages/Home"
import {Route, Routes} from 'react-router-dom'
import PageNotFound from "./Pages/PageNotFound"
import CardsDetails from "./Pages/CardsDetails"
function App() {
  return (
    <>
    <Toolbox/>
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/card/:id' element={<CardsDetails />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      </>
  )
}

export default App
