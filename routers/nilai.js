const express = require ('express')
const routerNilai = express.Router()
// const connection = require('../db/db.js')
const ctrNilai = require('../controllers/nilai')

//nilai
routerNilai.get('/nilai/:nis', ctrNilai.getNilaiByNis)
routerNilai.get('/nilai/:nis/:/kelas', ctrNilai.getByNilaiNisKelas)
routerNilai.get('/nilai/:nis', (req,res) => {
    const qstring = "SELECT * FROM siswa2";
    connection.query(qstring, (err,data)  => {
        if (err) {
            console.log("error:", err);
            res.status(500).send({
                message : err.message || "Terjadi kesalahan saat get data"
            });
        }
        else res.send(data)
    });
})

routerNilai.get('/nilai/:nis/:kelas', (req,res) => {
    const qstring = "SELECT * FROM siswa2";
    connection.query(qstring, (err,data)  => {
        if (err) {
            console.log("error:", err);
            res.status(500).send({
                message : err.message || "Terjadi kesalahan saat get data"
            });
        }
        else res.send(data)
    });
})
module.exports = routerNilai

