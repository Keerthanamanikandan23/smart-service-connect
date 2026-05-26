import { useNavigate } from 'react-router-dom'

function BackButton() {

  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/')}
      className="absolute top-6 left-6 bg-white text-blue-600 px-4 py-2 rounded-xl shadow-md font-semibold hover:bg-gray-100"
    >
      ← Back
    </button>
  )
}

export default BackButton