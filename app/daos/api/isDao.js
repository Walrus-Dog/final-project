const con = require("../../config/db_config");
const daoCommon = require("../common/daoCommon");

const isDao = {
    ...daoCommon,

    table: "InStock",

    create:(req, res) => {
        if (Object.keys(req.body).length === 0) {
            res.json ({
                "error": true,
                "message": "No Fields to Create"
            })
        } else {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);

            con.execute(
                `INSERT INTO InStock SET ${fields.join("=?,")}=?`,
                (error, rows) => {
                    if(!error) {
                        if(rows.length === 1) {
                            res.json(...rows)
                        } else {
                            res.json(rows)
                        }
                    } else {
                        console.log("Dao Error!". error)
                        res.send("Error Creating Record")
                    }
                }
            )
        }
    },

    update: (req, res) => {
        if(isNaN(req.paramns.id)) {
            res.json({
                "error": true,
                "message": "Is not a number!"
            })
        } else if(Object.keys(req.body) === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);

            con.execute(
                `UPDATE InStock SET ${fields.join("=?,")}=? WHERE InStock_id=?`,
                [...values, req.paramns.id],
                (error, dbres) => {
                    if(!error) {
                        if(dbres.length === 1) {
                            res.send(`Changed ${dbres.changedRows}`)
                        } else {
                            res.send(`Changed ${dbres.changedRows}`)
                        }
                    } else {
                        res.send("Error Updating")
                        console.log("InStock Dao Error")
                    }
                }
            )
        }
    },

    findByName: (req, res) => {
        con.execute(
            "SELECT * FROM InStock WHERE is_name=?",
            [is_name],
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                }
            }
        )
    },

    findById: (res, table, id) => {
        con.query(
            `SELECT * FROM ${table} WHERE is_id=${id}`,
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
    }
}

module.exports = isDao;