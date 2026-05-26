import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

function MyBookings() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem('user')
      )

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/bookings`,
      )

      const userBookings = res.data.filter(
        (booking) => booking.userId._id === user._id
      )

      setBookings(userBookings)

    } catch (error) {

      console.log(error)

    }
  }

  const handleCancelBooking = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/bookings/${id}`
      )

      toast.success('Booking Cancelled')

      fetchBookings()

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center mb-12 text-blue-600">
        My Bookings
      </h1>

      {bookings.length === 0 ? (

        <div className="text-center text-2xl text-gray-500 mt-20">
          No bookings found
        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {bookings
            .filter((booking) => booking.serviceId)
            .map((booking) => (

              <div
                key={booking._id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >

                <img
                  src={booking.serviceId.image}
                  alt={booking.serviceId.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <div className="flex justify-between items-center mb-4">

                    <h2 className="text-2xl font-bold">
                      {booking.serviceId.title}
                    </h2>

                    <span
  className={`px-4 py-2 rounded-xl text-sm font-semibold

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

                  </div>

                  <p className="text-gray-600 mb-5">
                    {booking.serviceId.description}
                  </p>

                  <div className="space-y-3 mb-6">

                    <p className="font-bold text-blue-600 text-xl">
                      ₹ {booking.serviceId.price}
                    </p>

                    <p className="text-gray-700">
                      📅 Booking Date:
                      {' '}
                      {new Date(
                        booking.bookingDate
                      ).toLocaleDateString()}
                    </p>

                    <p className="text-gray-700">
                      ⏳ Status:
                      {' '}
                      {booking.status}
                    </p>

                  </div>

                  {booking.status !== 'Cancelled' && (

                    <button
                      onClick={() =>
                        handleCancelBooking(booking._id)
                      }
                      className="w-full bg-red-500 text-white py-3 rounded-2xl hover:bg-red-600"
                    >
                      Cancel Booking
                    </button>

                  )}

                </div>

              </div>

            ))}

        </div>

      )}

    </div>
  )
}

export default MyBookings