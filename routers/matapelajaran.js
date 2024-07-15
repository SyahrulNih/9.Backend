const express = require ('express')
const routerMP = express.Router()
const connection = require('../db/db.js')

// mata pelajaran
routerMP.get('/matapelajaran', (req,res) => {
    const qstring = "SELECT * FROM mapel2";
    connection.query(qstring, (err,data)  => {
        if (err) {
            console.log("error:", err.message);
            res.status(500).send({
                message : err.message || "Terjadi kesalahan saat get data"
            });
        }
        else res.send(data)
    });
})

routerMP.get('/matapelajaran/:kdMP', (req,res) => {
    const qstring = "SELECT * FROM mapel2";
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

routerMP.post('/matapelajaran', (req,res) => {
    const mapelBaru = req.body;

    connection.query("INSERT INTO mapel2 SET ?", mapelBaru,(err) => {
        if (err) {
            console.log("error:", err);
            res.status(500).send({
                message : err.message || "Terjadi kesalahan saat insert data"
            });
        }
        else
            res.send(mapelBaru)
    });
})

routerMP.put('/matapelajaran/:kdMP', (req,res) => {
    const nis = req.params.kdMP;
    const swa = req.body;
    const qstring = `UPDATE mapel2 
                     SET kdMP = '${swa.kdMP}', matapelajaran = '${swa.matapelajaran}',  waktu = '${swa.waktu}', kelas = '${swa.kelas}'`;
    connection.query(qstring, (err,data)  => {
        if (err) {
            res.status(500).send({
                message : "Error updating siswa with Kode Mapel" + kdMP
            });
        }
        else if (data.affectedRows ==0){
            res.status(404).send({
                message: `NOT found siswa with NIS $ {nis}.`
            });
        }
        else {
            console.log("update siswa:", {kdMP:kdMP, ...swa});
            res.send({kdMP: kdMP, ...swa});
        }
    });
})

routerMP.delete('/matapelajaran/:kdMP', (req,res) => {
    const nis = req.params.kdMP;
    const qstring = `DELETE mapel2 WHERE kdMP = '${kdMP} `
    connection.query(qstring, (err,data)  => {
        if (err) {
            res.status(500).send({
                message : "Error deleting siswa with NIS" + kdMP
            });
        }
        else if (data.affectedRows ==0){
            res.status(404).send({
                message: `NOT found siswa with NIS $ {nis}.`
            });
        }
        else res.send(`siswa dengan nis = ${kdMP} telah terhapus`);
    });
})
module.exports = routerMP