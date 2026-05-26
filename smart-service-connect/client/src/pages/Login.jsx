import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
function Login({ role = 'user' }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {

    e.preventDefault()
    setLoading(true)
    try {

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          email,
          password,
        }
      )

      localStorage.setItem(
        'token',
        res.data.token
      )

      localStorage.setItem(
        'user',
        JSON.stringify(res.data.user)
      )

      toast.success(res.data.message)
      setLoading(false)
      if (res.data.user.role === 'provider') {

           navigate('/provider-dashboard')

      } else {

           navigate('/user-dashboard')

      }

    } catch (error) {
      setLoading(false)
      toast.error(error.response.data.message)

    }
  }

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center px-6">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-white mb-3">

            {role === 'provider'
              ? 'Provider Login'
              : 'User Login'}

          </h1>

          <p className="text-gray-200 text-center mb-8">
            Welcome back to Smart Service Connect
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 outline-none"
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 outline-none"
            />

            <button
              className="w-full bg-white text-blue-700 py-4 rounded-2xl font-bold hover:bg-gray-100 transition"
            >
              {loading ? 'Loading...' : 'Login'}
            </button>

            <div className="text-center mt-4">

              <Link
                to={
                  role === 'provider'
                    ? '/provider-register'
                    : '/register'
                }
                className="text-white font-semibold hover:underline"
              >
                Don’t have an account? Register
              </Link>

            </div>

          </form>

        </div>

      </div>

    </>
  )
}

export default Login