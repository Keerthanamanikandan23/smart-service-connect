const Booking = require('../models/Booking')

const createBooking = async (req, res) => {

  try {

    const booking = await Booking.create(req.body)

    res.status(201).json(booking)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

const getBookings = async (req, res) => {

  try {

    const bookings = await Booking.find()
      .populate('userId')
      .populate('serviceId')

    res.status(200).json(bookings)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

const deleteBooking = async (req, res) => {

  try {

    await Booking.findByIdAndDelete(req.params.id)

    res.status(200).json({
      message: 'Booking Cancelled',
    })

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

const updateBookingStatus = async (req, res) => {

  try {

    const booking = await Booking.findById(req.params.id)

    if (!booking) {

      return res.status(404).json({
        message: 'Booking Not Found',
      })

    }

    booking.status = req.body.status

    await booking.save()

    res.status(200).json({
      message: 'Booking Status Updated',
      booking,
    })

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

module.exports = {
  createBooking,
  getBookings,
  deleteBooking,
  updateBookingStatus,
}