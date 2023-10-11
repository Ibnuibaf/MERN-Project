import React from 'react'
import Diary from '../components/Diary'
import Header from '../components/Header'
import ProtectedHeader from '../components/ProtectedHeader'
import Footer from '../components/Footer'

function DiariesPage() {
  return (
    <div>
      <ProtectedHeader/>
      <Diary/>
      <Footer/>
    </div>
  )
}

export default DiariesPage