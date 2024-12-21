import './App.css'
import React from 'react'
import ToggleButton from './components/ToggleButton'
import GTMOfferings from './components/GTMOfferings'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <div className='flex justify-center p-4 pb-2'>
        <ToggleButton />
      </div>
      <main>
        <GTMOfferings />
      </main>
      <Footer />
    </div>
  )
}

export default App
