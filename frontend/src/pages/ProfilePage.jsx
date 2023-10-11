import React from 'react'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import ProtectedHeader from '../components/ProtectedHeader'

function ProfilePage() {
  return (
    <div>
      <ProtectedHeader/>
      <Profile/>
      <Footer/>
    </div>
  )
}

export default ProfilePage