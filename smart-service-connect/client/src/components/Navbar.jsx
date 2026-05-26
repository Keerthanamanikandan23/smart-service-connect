import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  const user = JSON.parse(
    localStorage.getItem('user')
  )

  const handleLogout = () => {

    localStorage.removeItem('token')

    localStorage.removeItem('user')

    navigate('/')

  }

  return (

    <nav className="bg-white shadow-md px-10 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-blue-600">
        Smart Service Connect
      </h1>

      <div className="flex items-center gap-8 text-lg font-semibold">

        {!token ? (

          <>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>

          </>

        ) : user?.role === 'provider' ? (

          <>

            <Link to="/provider-dashboard">
              Dashboard
            </Link>

            <Link to="/add-service">
              Add Service
            </Link>

            <Link to="/manage-bookings">
              Manage Bookings
            </Link>

          </>

        ) : (

          <>

            <Link to="/user-dashboard">
              Dashboard
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/my-bookings">
              My Bookings
            </Link>

          </>

        )}

        {token && (

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-3 rounded-2xl hover:bg-red-600"
          >
            Logout
          </button>

        )}

      </div>

    </nav>

  )
}

export default Navbar