const express = require ('express')
const routerSwa = express.Router()
constswa = require("../controllers/siswa")
const ctrUser = require('../controllers/user')

//Siswa
// routerSwa.get('/siswa', ctrswa.getswa)
routerSwa.get('/siswa',ctrUser.authenticate, ctrSwa.getSwa)

routerSwa.get('/siswa/:nis', (req,res) => {
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

routerSwa.post('/siswa', (req,res) => {
    const siswaBaru = req.body;

    connection.query("INSERT INTO siswa2 SET ?", siswaBaru,(err) => {
        if (err) {
            console.log("error:", err);
            res.status(500).send({
                message : err.message || "Terjadi kesalahan saat insert data"
            });
        }
        else
            res.send(siswaBaru)
    });
})

routerSwa.put('/siswa/:nis', (req,res) => {
    const nis = req.params.nis;
    const swa = req.body;
    const qstring = `UPDATE siswa2 
                     SET nis = '${swa.nis}', nama = '${swa.nama}',  angkatan= '${swa.angkatan}', sekolah = '${swa.sekolah}'`;
    connection.query(qstring, (err,data)  => {
        if (err) {
            res.status(500).send({
                message : "Error updating siswa with NIS" + nis
            });
        }
        else if (data.affectedRows ==0){
            res.status(404).send({
                message: `NOT found siswa with NIS $ {nis}.`
            });
        }
        else {
            console.log("update siswa:", {nis:nis, ...swa});
            res.send({nis: nis, ...swa});
        }
    });
})

routerSwa.delete('/siswa/:nis', (req,res) => {
    const nis = req.params.nis;
    const qstring = `DELETE siswa2 WHERE nis = '${nis} `
    connection.query(qstring, (err,data)  => {
        if (err) {
            res.status(500).send({
                message : "Error deleting siswa with NIS" + nis
            });
        }
        else if (data.affectedRows ==0){
            res.status(404).send({
                message: `NOT found siswa with NIS $ {nis}.`
            });
        }
        else res.send(`siswa dengan nis = ${nis} telah terhapus`);
    });
})

module.exports = routerSwa;