const express = require("express");
const con = require("../../config/db_config");

const daoCommon = {
    findAll: (res, table) => {
        con.query(
            `SELECT * FROM ${table}`,
            (error, rows) => {
                if(!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log("Dao Error", error)
                }
            }
        )
    },

    findById: (res, table, id) => {
        con.query(
            `SELECT * FROM ${table} WHERE id=${id}`,
            [id],
            (error, rows) => {
                if (!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else { 
                    console.log("Dao Common Error", error)
                }
            }
        )
    },

    countAll: (res, table) => {
        con.query(
            `SELECT COUNT(*) COUNT FROM ${table}`,
            (error, rows) => {
                if(!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log("Dao Error!", error)
                }
            }
        )
    }
}

module.exports = daoCommon