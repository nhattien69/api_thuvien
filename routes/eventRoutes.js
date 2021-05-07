'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router()

const {getSV, getoneSV, addSV, updateSV, getSach, getoneSach, } = eventController;

//Sinhvien
router.get('/getsv' , getSV);
router.get('/getonesv/:idsv',getoneSV)
router.post('/addsv',addSV);
router.post('/updatesv',updateSV);

//Sach
router.get('/getsach', getSach);
router.get('/getonesach/:idsach',getoneSach)
router.post('/addsach',eventController.addSach)
router.post('/updatesach',eventController.updateSach)

//DauSach
router.get('/getdausach', eventController.getDauSach)


module.exports = {
    routes: router
}