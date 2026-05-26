import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
function Register({ role = 'user' }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedRole, setSelectedRole] = useState(role)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e) => {

    e.preventDefault()
    setLoading(true)
    try {

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          name,
          email,
          password,
          role: selectedRole,
        }
      )

      toast.success(res.data.message)
      setLoading(false)
      navigate('/login')

    } catch (error) {
      setLoading(false)
      toast.error(error.response.data.message)

    }
  }

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 flex items-center justify-center px-6">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-white mb-3">

            {role === 'provider'
              ? 'Provider Register'
              : 'User Register'}

          </h1>

          <p className="text-gray-200 text-center mb-8">
            Create your Smart Service Connect account
          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 outline-none"
            />

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

            {role === 'user' && (

              <select
                value={selectedRole}
                onChange={(e) =>
                  setSelectedRole(e.target.value)
                }
                className="w-full p-4 rounded-2xl bg-white/20 text-white outline-none"
              >

                <option
                  value="user"
                  className="text-black"
                >
                  User
                </option>

                <option
                  value="provider"
                  className="text-black"
                >
                  Service Provider
                </option>

              </select>

            )}

            <button className="w-full bg-white text-green-700 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">

              {loading ? 'Loading...' : 'Register'}

            </button>

          </form>

        </div>

      </div>

    </>
  )
}

export default Register