import { Link } from 'react-router-dom'

function ProviderDashboard() {

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-purple-600 mb-10">
        Provider Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Add Services
          </h2>

          <p className="text-gray-600 mb-6">
            Add new services for customers.
          </p>

          <Link
            to="/add-service"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl"
          >
            Add Service
          </Link>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Manage Services
          </h2>

          <p className="text-gray-600 mb-6">
            Edit or delete your services.
          </p>

          <Link
            to="/manage-services"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Manage Services
          </Link>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Manage Bookings
          </h2>

          <p className="text-gray-600 mb-6">
            Accept, reject and manage customer bookings.
          </p>

          <Link
            to="/manage-bookings"
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Manage Bookings
          </Link>

        </div>

      </div>

    </div>
  )
}

export default ProviderDashboard