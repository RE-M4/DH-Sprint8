/* eslint-disable no-unused-vars */
import React from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './assets/css/app.css'
import SideBar from './components/SideBar'
import ContentWrapper from './components/ContentWrapper'

function App() {

  return (
    <div id='wrapper'>
      <SideBar />
      <ContentWrapper />
    </div>
  )
}

export default App
