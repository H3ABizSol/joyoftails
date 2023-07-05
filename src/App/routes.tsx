import React from 'react'
import { HomePage } from '../container'
import { Route, Routes} from "react-router-dom"



const routes = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default routes