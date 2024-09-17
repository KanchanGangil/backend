const express = require('express')
const TenderController = require('../controllers/TenderController')
const UserController = require('../controllers/UseController')
const router = express.Router()


//TenderController
router.post('/tenderinsert', TenderController.Tender_insert)
router.get('/gettenders', TenderController.getTenders)
router.get('/viewtender/:id', TenderController.viewTender)
router.post('/updatetender/:id', TenderController.updateTender)
router.get('/deletetender/:id', TenderController.deleteTender)

//UserController
router.post('/userinsert', UserController.userInset)
router.get('/getalluser', UserController.getAllUser)
router.get('/viewuser/:id', UserController.viewUser)
router.post('/updateuser/:id', UserController.updateUser)
router.get('/deleteuser/:id', UserController.deleteUser)


module.exports = router