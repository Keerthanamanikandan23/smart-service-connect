import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}

      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center px-6">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-12 rounded-3xl shadow-2xl text-center max-w-5xl w-full">

          <p className="text-blue-200 uppercase tracking-widest mb-4 font-semibold">
            Trusted Home Service Marketplace
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Smart Service Connect
          </h1>

          <p className="text-gray-200 text-xl mb-12 max-w-3xl mx-auto">
            Find trusted professionals for plumbing,
            electrical work, painting, cleaning,
            tutoring and much more — all in one place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white py-4 rounded-2xl text-lg font-semibold transition"
            >
              User Login
            </Link>

            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-600 hover:scale-105 text-white py-4 rounded-2xl text-lg font-semibold transition"
            >
              User Register
            </Link>

            <Link
              to="/provider-login"
              className="bg-purple-500 hover:bg-purple-600 hover:scale-105 text-white py-4 rounded-2xl text-lg font-semibold transition"
            >
              Provider Login
            </Link>

            <Link
              to="/provider-register"
              className="bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white py-4 rounded-2xl text-lg font-semibold transition"
            >
              Provider Register
            </Link>

          </div>

        </div>

      </div>

      {/* FEATURES SECTION */}

      <div className="py-24 px-10 bg-white">

        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-gray-100 p-10 rounded-3xl shadow-lg text-center">

            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              Trusted Professionals
            </h3>

            <p className="text-gray-600">
              Connect with verified electricians,
              plumbers, cleaners, tutors and more.
            </p>

          </div>

          <div className="bg-gray-100 p-10 rounded-3xl shadow-lg text-center">

            <h3 className="text-2xl font-bold mb-4 text-green-600">
              Easy Booking
            </h3>

            <p className="text-gray-600">
              Book services instantly with a simple
              and user-friendly interface.
            </p>

          </div>

          <div className="bg-gray-100 p-10 rounded-3xl shadow-lg text-center">

            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              Secure Platform
            </h3>

            <p className="text-gray-600">
              Safe authentication and secure booking
              system powered by MERN stack.
            </p>

          </div>

        </div>

      </div>

      {/* HOW IT WORKS */}

      <div className="py-24 px-10 bg-gray-100">

        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-white p-10 rounded-3xl shadow-lg text-center">

            <div className="text-5xl mb-6">
              1️⃣
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Register
            </h3>

            <p className="text-gray-600">
              Create a user or provider account in seconds.
            </p>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg text-center">

            <div className="text-5xl mb-6">
              2️⃣
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Explore Services
            </h3>

            <p className="text-gray-600">
              Browse through available professional services.
            </p>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg text-center">

            <div className="text-5xl mb-6">
              3️⃣
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Book Easily
            </h3>

            <p className="text-gray-600">
              Book services and manage everything from dashboard.
            </p>

          </div>

        </div>

      </div>

      {/* FOOTER */}

      <footer className="bg-black text-white py-10 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Smart Service Connect
        </h2>

        <p className="text-gray-400">
          MERN Stack Service Marketplace Platform
        </p>

      </footer>

    </div>
  )
}

export default Home