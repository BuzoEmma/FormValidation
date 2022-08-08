import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import Login from './Components/Login'
// import Module from './Components/Module'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'}  element={ <Form/>} />
        <Route path={'login'}  element={ <Login/>} />
        <Route path={'dashboard'}  element={ <Dashboard/>} />
      </Routes>
     {/* <Module /> */}
    </div>
  )
}

export default App