import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function CategoryServices() {

  const { category } = useParams()

  const [services, setServices] = useState([])
  const [bookingDate, setBookingDate] = useState('')

  const user = JSON.parse(
    localStorage.getItem('user')
  )

  useEffect(() => {
    fetchServices()
  }, [category])

  const fetchServices = async () => {

    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/services`,
      )

      const filteredServices = res.data.filter(
        (service) =>
          service.category?.toLowerCase() ===
          category.toLowerCase()
      )

      setServices(filteredServices)

    } catch (error) {

      console.log(error)

    }
  }

  const handleBooking = async (serviceId) => {

    if (!bookingDate) {
      return toast.error('Select booking date')
    }

    try {

      await axios.post(
        'http://localhost:5000/api/bookings',
        {
          userId: user._id,
          serviceId,
          bookingDate,
        }
      )

      toast.success('Booking Confirmed')

      setBookingDate('')

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center text-blue-600 mb-12">

        {category.charAt(0).toUpperCase() +
          category.slice(1)} Services

      </h1>

      {services.length === 0 ? (

        <div className="text-center text-2xl text-gray-500">
          No Providers Available
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service) => (

            <div
              key={service._id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <div className="flex justify-between items-center mb-4">

                  <h2 className="text-2xl font-bold">
                    {service.title}
                  </h2>

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold">
                    Available
                  </span>

                </div>

                <p className="text-gray-600 mb-5">
                  {service.description}
                </p>

                <div className="flex justify-between items-center mb-5">

                  <p className="text-xl font-bold text-blue-600">
                    ₹ {service.price}
                  </p>

                  <div className="text-yellow-500 font-bold">
                    ⭐ 4.8
                  </div>

                </div>

                {user?.role === 'user' && (

                  <>

                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) =>
                        setBookingDate(e.target.value)
                      }
                      className="w-full p-3 border rounded-xl mb-4"
                    />

                    <button
                      onClick={() =>
                        handleBooking(service._id)
                      }
                      className="w-full bg-blue-600 text-white py-3 rounded-2xl hover:bg-blue-700"
                    >
                      Book Now
                    </button>

                  </>

                )}

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  )
}

export default CategoryServices