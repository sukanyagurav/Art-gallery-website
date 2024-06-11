import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Location from "./components/Location/Location"


function App() {

  return (
    <>
    <BrowserRouter>

     <Routes >
      <Route path='/' element={<>
        <Header/>
        <Main/>
      </>} exact />
      <Route path='/location' element={<Location/>} />
     </Routes>
     <Footer/>

    </BrowserRouter>
    </>
  )
}

export default App
