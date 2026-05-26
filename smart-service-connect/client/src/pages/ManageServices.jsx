import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

function ManageServices() {

  const [services, setServices] = useState([])

  const provider = JSON.parse(
    localStorage.getItem('user')
  )

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {

    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/services`,
      )

      const providerServices = res.data.filter(
        (service) =>
          service.providerId === provider._id
      )

      setServices(providerServices)

    } catch (error) {

      console.log(error)

    }
  }

  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/services/${id}`,
      )

      toast.success('Service Deleted')

      fetchServices()

    } catch (error) {

      console.log(error)

    }
  }

  const handleEdit = async (service) => {

    const newTitle = prompt(
      'Enter new title',
      service.title
    )

    const newDescription = prompt(
      'Enter new description',
      service.description
    )

    const newPrice = prompt(
      'Enter new price',
      service.price
    )

    try {

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/services/${service._id}`,
        {
          title: newTitle,
          description: newDescription,
          price: newPrice,
        }
      )

      toast.success('Service Updated')

      fetchServices()

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center text-purple-600 mb-12">
        Manage Services
      </h1>

      {services.length === 0 ? (

        <div className="text-center text-2xl text-gray-500">
          No Services Added
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service) => (

            <div
              key={service._id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600 mb-5">
                  {service.description}
                </p>

                <div className="flex justify-between items-center mb-6">

                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold">
                    {service.category}
                  </span>

                  <p className="font-bold text-blue-600 text-xl">
                    ₹ {service.price}
                  </p>

                </div>

                <div className="flex gap-4">

                  <button
                    onClick={() =>
                      handleEdit(service)
                    }
                    className="flex-1 bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(service._id)
                    }
                    className="flex-1 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  )
}

export default ManageServices