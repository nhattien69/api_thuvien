'use strict';

const eventData = require('../data/events');

//SinhVien
const getSV = async (req, res, next) => {
    try{
        const events = await eventData.getSV();
        res.send(events);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getoneSV = async (req, res, next) => {
    try{
        const IdSV = req.params.idsv;
        const oneEvent = await eventData.getSVById(IdSV);
        res.send(oneEvent);
//        console.log(IdSV);
    }catch (error) {
        res.status(400).send(error.message);
//        console.log(IdSV);
    }
}

const addSV = async (req, res, next) => {
    try{
        const data = req.body;
        const created = await eventData.addSV(data);
        console.log(data)
        res.send(created);
    }catch (error) {
        console.log(data)
        res.status(400).send(error.message);
    }
}

const updateSV = async (req, res, next) => {
    try{
        const data = req.body;
        const updated = await eventData.updateSV(data);
        res.send(updated);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

//Sach
const getSach = async (req, res, next) => {
    try{
        const events = await eventData.getSach();
        res.send(events);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const getoneSach = async (req, res, next) => {
    try{
        const IdSach = req.params.idsach;
        const oneEvent = await eventData.getoneSach(IdSach);
        res.send(oneEvent);
//        console.log(IdSV);
    }catch (error) {
        res.status(400).send(error.message);
//        console.log(IdSV);
    }
}

const addSach = async (req, res, next) => {
    try{
        const data = req.body;
        const created = await eventData.addSach(data);
        console.log(data)
        res.send(created);
    }catch (error) {
        console.log(data)
        res.status(400).send(error.message);
    }
}

const updateSach = async (req, res, next) => {
    try{
        const data = req.body;
        const updated = await eventData.updateSach(data);
        res.send(updated);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

//DauSach

const getDauSach = async (req, res, next) => {
    try{
        const events = await eventData.getDauSach();
        res.send(events);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getSV,
    getoneSV,
    addSV,
    updateSV,
    getSach,
    getoneSach,
    addSach,
    updateSach,
    getDauSach
}