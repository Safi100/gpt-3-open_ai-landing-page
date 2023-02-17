import React from 'react'
import Header from './components/header/Header'
import Companies from './components/companies/Companies'
import Overview from './components/overview/Overview'
import Feature from './components/feature/Feature'
import './app.css'
const App = () => {
  return (
    <div className='gradient__bg'>
      <Header />
      <Companies />
      <div className='wrapper'><Overview /></div> 
      <Feature />
    </div>
  )
}

export default App