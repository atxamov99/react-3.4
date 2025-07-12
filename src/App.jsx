import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Section from './components/Section'

const App = () => {
  return (
    <div className='bg-black text-white'>
      <Header />
      <Main />
      <Section />
      <Footer />
    </div>
  )
}


export default App