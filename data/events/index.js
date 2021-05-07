'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getSV = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.findSv);
        return list.recordset;
    }catch (error) {
        return error.message;
    }
}

const getSVById = async (IdSV) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneEvent = await pool.request()
                         .input('IdSV' , sql.Int, IdSV)
                         .query(sqlQueries.findSvbyId);
        return oneEvent.recordset;
    }catch (error) {
        return error.message;
    }
}

const addSV = async (userData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const NgayLamThe = new Date();
        const NgayHetHan = new Date();
        const insertSV = await pool.request()
                            .input('HoTen', sql.NVarChar(50), userData.HoTen)
                            .input('Email', sql.NVarChar(50), userData.Email)
                            .input('MatKhau', sql.NVarChar(50), userData.MatKhau)
                            .input('SoDT', sql.NVarChar(50), userData.SoDT)
                            .input('NgayLamThe', sql.Date, NgayLamThe)
                            .input('NgayHetHan', sql.Date, NgayHetHan)
                            .input('TinhTrang', sql.NVarChar(50), userData.TinhTrang)
                            .query(sqlQueries.addSv);
        //console.log(userData)
        return insertSV.recordset;

    }catch (error) {
        //console.log(userData.HoTen)
        return error.message;
    }
}

const updateSV = async (userData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('Email', sql.NVarChar(50), userData.Email)
                        .input('HoTen', sql.NVarChar(50), userData.HoTen)
                        .input('MatKhau', sql.NVarChar(50), userData.MatKhau)
                        .input('SoDT', sql.NVarChar(50), userData.SoDT)
                        .input('TinhTrang', sql.NVarChar(50), userData.TinhTrang)
                        .query(sqlQueries.updateSv)
        return update.recordset;
    }catch (error) {
        return error.message;
    }
}

//Sach
const getSach = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.findSach);
        return list.recordset;
    }catch (error) {
        return error.message;
    }
}

const getoneSach = async (IdSach) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const oneEvent = await pool.request()
                         .input('IdSach' , sql.NVarChar(50), IdSach)
                         .query(sqlQueries.findoneSach);
        return oneEvent.recordset;
    }catch (error) {
        return error.message;
    }
}

const addSach = async (SachData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertSach = await pool.request()
                        .input('IdSach', sql.NVarChar(50), SachData.IdSach)
                        .input('IdTacGia', sql.NVarChar(50), SachData.IdTacGia)
                        .input('IdTheLoai', sql.NVarChar(50), SachData.IdTheLoai)
                        .input('IdNhaXuatBan', sql.NVarChar(50), SachData.IdNhaXuatBan)
                        .input('TenSach', sql.NVarChar(50), SachData.TenSach)
                        .input('MoTa', sql.NText, SachData.MoTa)
                        .input('NamSanXuat', sql.NVarChar(50), SachData.NamSanXuat)
                        .input('HinhAnh', sql.NText, SachData.HinhAnh)
                        .query(sqlQueries.addSach)
        return insertSach.recordset;
    }catch (error) {
        return error.message;
    }
}

const updateSach = async (SachData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('IdSach', sql.NVarChar(50), SachData.IdSach)
                        .input('IdTheLoai', sql.NVarChar(50), SachData.IdTheLoai)
                        .input('IdNhaXuatBan', sql.NVarChar(50), SachData.IdNhaXuatBan)
                        .input('TenSach', sql.NVarChar(50), SachData.TenSach)
                        .input('MoTa', sql.NText, SachData.MoTa)
                        .input('NamSanXuat', sql.NVarChar(50), SachData.NamSanXuat)
                        .input('HinhAnh', sql.NText, SachData.HinhAnh)
                        .query(sqlQueries.updateSach)
        return update.recordset;
    }catch (error) {
        return error.message;
    }
}

//DauSach
const getDauSach = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.findDauSach);
        return list.recordset;
    }catch (error) {
        return error.message;
    }
}

module.exports = {
    getSV,
    addSV,
    getSVById,
    updateSV,
    getSach,
    getoneSach,
    addSach,
    updateSach,
    getDauSach
}