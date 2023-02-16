import React from 'react'
import Header from './components/header/Header'
import Companies from './components/companies/Companies'
import './app.css'
const App = () => {
  return (
    <div className='gradient__bg'>
      <Header />
      <Companies />
    </div>
  )
}

export default App