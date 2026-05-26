require('dotenv').config()
const express = require('express')
const cors = require('cors')
const serviceRoutes = require('./routes/serviceRoutes')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const app = express()
connectDB()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/bookings', bookingRoutes)
app.get('/', (req, res) => {
  res.send('Backend Server Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})