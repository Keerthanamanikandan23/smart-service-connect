import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
function AddService() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const handleAddService = async (e) => {
    
    e.preventDefault()
    setLoading(true)
    try {

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/services`,
        {
           title,
           description,
           category,
           price,
           image,
           providerId: JSON.parse(
           localStorage.getItem('user')
          )._id,
        }
      )

      toast.success('Service Added Successfully')

      console.log(res.data)
      setLoading(false)
      setTitle('')
      setDescription('')
      setCategory('')
      setPrice('')
      setImage('')

    } catch (error) {
      setLoading(false)
      console.log(error)

    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 flex items-center justify-center px-6 py-12">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-2xl w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center text-white mb-3">
          Add New Service
        </h1>

        <p className="text-gray-200 text-center mb-10">
          Publish your professional service for customers
        </p>

        <form
          onSubmit={handleAddService}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Service Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 outline-none"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 outline-none"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 outline-none h-32"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 outline-none"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-gray-200 outline-none"
          />

          <button className="w-full bg-white text-purple-700 py-4 rounded-2xl font-bold hover:bg-gray-100 transition">

            {loading ? 'Adding...' : 'Add Service'}

          </button>

        </form>

      </div>

    </div>
  )
}

export default AddService