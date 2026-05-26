import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

function ManageBookings() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {

    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/bookings`,
      )

      const provider = JSON.parse(
  localStorage.getItem('user')
)

const providerBookings = res.data.filter(
  (booking) =>
    booking.serviceId?.providerId === provider._id
)

setBookings(providerBookings)

    } catch (error) {

      console.log(error)

    }
  }

  const updateStatus = async (id, status) => {

    try {

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/bookings/${id}`,
        {
          status,
        }
      )

      toast.success(`Booking ${status}`)

      fetchBookings()

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center text-purple-600 mb-12">
        Manage Bookings
      </h1>

      {bookings.length === 0 ? (

        <div className="text-center text-2xl text-gray-500">
          No Bookings Available
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {bookings
            .filter((booking) => booking.serviceId)
            .map((booking) => (

              <div
                key={booking._id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >

                <img
                  src={booking.serviceId.image}
                  alt={booking.serviceId.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold mb-3">
                    {booking.serviceId.title}
                  </h2>

                  <p className="text-gray-600 mb-4">
                    Customer:
                    {' '}
                    {booking.userId?.name}
                  </p>

                  <p className="text-gray-600 mb-4">
                    📅
                    {' '}
                    {new Date(
                      booking.bookingDate
                    ).toLocaleDateString()}
                  </p>

                  <div className="flex justify-between items-center mb-5">

                    <span
  className={`px-4 py-2 rounded-xl font-semibold

  ${
    booking.status === 'Pending'
      ? 'bg-yellow-100 text-yellow-700'

      : booking.status === 'Confirmed'
      ? 'bg-green-100 text-green-700'

      : 'bg-red-100 text-red-700'
  }`}
>

  {booking.status}

</span>

                    <p className="font-bold text-blue-600">
                      ₹ {booking.serviceId.price}
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <button
                      onClick={() =>
                        updateStatus(
                          booking._id,
                          'Confirmed'
                        )
                      }
                      className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          booking._id,
                          'Rejected'
                        )
                      }
                      className="flex-1 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
                    >
                      Reject
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

export default ManageBookings