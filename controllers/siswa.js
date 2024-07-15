const connection = require ("../db/db");

module.exports = {
    getswa: (req,res) => {
        const qstring = "SELECT * FROM siswa2";
        connection.query(qstring, (err,data)  => {
            if (err) {
                console.log("error:", err.message);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat get data"
                });
            }
            else res.send(data)
        });
    },
}
