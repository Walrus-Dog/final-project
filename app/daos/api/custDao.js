const con = require("../../config/db_config");
const daoCommon = require("../common/daoCommon");

const custDao = {
    ...daoCommon,

    table: "CustomerStories",

    create:(req, res) => {
        if (Object.keys (req.body).length === 0) {
            res.json ({
                "error": true,
                "message": "No fields to create!"
            })
        } else {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);

            con.execute(
                `Insert into customer stories set ${fields.join("=?,")}=?`,
                (error, rows) => {
                    if(!error) {
                        if(rows.length === 1) {
                            res.json(...rows)
                        } else {
                            res.json(rows)
                        }
                    } else {
                        console.log("Dao Error", error)
                        res.send("Error Creating Record")
                    }
                }
            )
        }
    },

    update:(req, res) => {
        if(isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Is not a number"
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
                `UPDATE CustomerStories SET ${fields.join("=?,")}=? WHERE CustomerStories_id=?`,
                [...values, req.params.id],
                (error, dbres) => {
                    if(!error) {
                        if(dbres.length === 1) {
                            res.send(`Changed ${dbres.changedRows}`)
                        } else {
                            res.send(`Changed ${debres.changedRows}`)
                        }
                    } else {
                        res.send("Error Updating")
                        console.log("CustomerStories error", error)
                    }
                }
            )
        }
    }
}

module.exports = custDao;
