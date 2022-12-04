import React from 'react'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Home from './components/pages/Home'

import Home from './components/Home'
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
    
    <Home/>

    </div>
   
  )
}

export default App
