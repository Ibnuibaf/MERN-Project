import React from 'react'
import Footer from '../components/Footer'
import Dashboard from '../components/Dashboard'
import AdminHeader from '../components/AdminHeader'

function DashboardPage() {
  return (
    <div>
      <AdminHeader/>
      <Dashboard/>
      <Footer/>
    </div>
  )
}

export default DashboardPage