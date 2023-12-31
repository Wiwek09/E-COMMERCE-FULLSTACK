import React from 'react'
import Pay from './Pay'
import Success from './Success'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/pay" element={< Pay />} />
      </Routes>
      <Routes>
        <Route path="/success" element={< Success />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App