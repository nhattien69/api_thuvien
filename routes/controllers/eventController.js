'use strict';

const eventData = require('../data/events');

const getUsers = async (req, res, next) => {
    try{
        const events = await eventData.getUsers();
        res.send(events);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

// const getById = async (req, res, next) => {
//     try{
//         const userId = req.params.id;
//         const oneEvent = await eventData.getById(userId);
//         res.send(oneEvent); 
//     }catch (error) {
//         res.status(400).send(error.message);
//     }
// }

const addUser = async (req, res, next) => {
    try{
        const data = req.body;
        const created = await eventData.createUser(data);
        res.send(created);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try{
        const userId = req.params.id;
        const data = req.body;
        const updated = await eventData.updateUser(userId,data);
        res.send(updated);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getUsers,
    // getById,
    addUser,
    updateUser
}