
const express = require('express')
const router = express.Router()
const {
    newContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact
} = require('../controllers/controller')

// router.get('/book', getAllContacts)
// router.get('/book/:id', getContactById)
router.post('/book', newContact)
// router.put('/book/:id', updateContact)
// router.delete('/book/:id', deleteContact)

module.exports = router