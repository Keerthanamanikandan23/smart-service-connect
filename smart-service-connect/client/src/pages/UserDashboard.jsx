import { Link } from 'react-router-dom'

function UserDashboard() {

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        Welcome Back 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Browse Services
          </h2>

          <p className="text-gray-600 mb-6">
            Explore electricians, plumbers,
            tutors and more.
          </p>

          <Link
            to="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            View Services
          </Link>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            My Bookings
          </h2>

          <p className="text-gray-600 mb-6">
            Check all your booked services.
          </p>

          <Link
            to="/my-bookings"
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            View Bookings
          </Link>

        </div>

      </div>

    </div>
  )
}

export default UserDashboard