import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Create from '../components/Create'
import ProtectedHeader from '../components/ProtectedHeader'

function CreatediaryPage() {
  return (
    <div>
      <ProtectedHeader/>
      <Create/>
      <Footer/>
    </div>
  )
}

export default CreatediaryPage