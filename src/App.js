import React from 'react'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (

    <div className='App'> 
    {/* <Router>
      <Navbar/>
        <Routes>
        <Route path = '/' element={<Home />}></Route>
       
        </Routes>
        <Footer/>
    </Router> */}
    <Header/>
    <Home/>
    <Footer/>
    
    </div>
   
  )
}

export default App
