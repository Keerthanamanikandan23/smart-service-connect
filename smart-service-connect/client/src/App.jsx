import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Services from './pages/Services'
import AddService from './pages/AddService'
import MyBookings from './pages/MyBookings'
import ProtectedRoute from './components/ProtectedRoute'
import ProviderLogin from './pages/ProviderLogin'
import ProviderRegister from './pages/ProviderRegister'
import UserDashboard from './pages/UserDashboard'
import ProviderDashboard from './pages/ProviderDashboard'
import CategoryServices from './pages/CategoryServices'
import ManageBookings from './pages/ManageBookings'
import ManageServices from './pages/ManageServices'
function App() {
  return (
    <div>
      {window.location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
           path="/user-dashboard"
           element={
           <ProtectedRoute>
           <UserDashboard />
           </ProtectedRoute>
          }
        />

        <Route
          path="/provider-dashboard"
          element={
          <ProtectedRoute>
          <ProviderDashboard />
          </ProtectedRoute>
        }
       />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route
            path="/services/:category"
            element={
            <ProtectedRoute>
            <CategoryServices />
            </ProtectedRoute>
            }
        />
        <Route path="/provider-login" element={<ProviderLogin />} />
        <Route path="/provider-register" element={<ProviderRegister />} />
        <Route
            path="/add-service"
            element={
            <ProtectedRoute>
            <AddService />
            </ProtectedRoute>
           }
        />
        <Route
           path="/my-bookings"
           element={
           <ProtectedRoute>
           <MyBookings />
           </ProtectedRoute>
          }
        />
        <Route
           path="/manage-bookings"
           element={
           <ProtectedRoute>
           <ManageBookings />
           </ProtectedRoute>
          }
        />
        <Route
          path="/manage-services"
          element={
          <ProtectedRoute>
          <ManageServices />
          </ProtectedRoute>
         }
        />
      </Routes>
    </div>
  )
}

export default App