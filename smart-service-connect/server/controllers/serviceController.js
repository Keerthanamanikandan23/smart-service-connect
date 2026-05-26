const Service = require('../models/Service')

const createService = async (req, res) => {
  try {

    const service = await Service.create(req.body)

    res.status(201).json(service)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

const getServices = async (req, res) => {
  try {

    const services = await Service.find()

    res.status(200).json(services)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

const deleteService = async (req, res) => {
  try {

    await Service.findByIdAndDelete(req.params.id)

    res.status(200).json({
      message: 'Service Deleted Successfully',
    })

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

const updateService = async (req, res) => {
  try {

    const updatedService =
      await Service.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      )

    res.status(200).json(updatedService)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}
module.exports = {
  createService,
  getServices,
  deleteService,
  updateService,
}