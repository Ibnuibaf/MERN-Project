import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import DiariesPage from './pages/DiariesPage'
import DashboardPage from './pages/DashboardPage'
import CreatediaryPage from './pages/CreatediaryPage'
 

function App() {

  return (
    <div className='min-h-screen bg-slate-500'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/login' element={ <LoginPage/> } />
          <Route path='/register' element={ <SignupPage/> } />
          <Route path='/profile' element={ <ProfilePage/> } />
          <Route path='/diary' element={ <DiariesPage/> } />
          <Route path='/create' element={ <CreatediaryPage/> } />
          <Route path='/admin' element={ <DiariesPage/> } />
          <Route path='/admin/dashboard' element={ <DashboardPage/> } />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
