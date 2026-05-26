const express = require('express')

const router = express.Router()

const {
  createService,
  getServices,
  deleteService,
  updateService,
} = require('../controllers/serviceController')

router.post('/', createService)

router.get('/', getServices)
router.delete('/:id', deleteService)
router.put('/:id', updateService)
module.exports = router