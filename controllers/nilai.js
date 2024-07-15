const connection = require ('../db/db.js')

module.exports = {
    getNilaiByNis : (req,res) => {
        const qstring = `SELECT matapelajaran.kdMp, matapelajaran.matapelajaran, nilai.guru,
                            matapelajaran.kelas, nilai.kelas, nilai.nilai
                        FROM nilai
                        INNER JOIN matapelajaran
                        ON nilai.kdMp = matapelajaran.kdMp
                        WHERE nilai.nis = ${req.params.nis};`;
        connection.query(qstring,(err,data) =>{
            if (err) {
                console.log("error:", err);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat get data"
                });
            }
            else res.send(data)
        })
    },
    getByNilaiNisKelas : (req,res) => {
        const qstring = `SELECT matapelajaran.kdMp, matapelajaran.matapelajaran, nilai.guru,
                            matapelajaran.waktu, nilai.kelas, nilai.nilai
                        FROM nilai
                        INNER JOIN matapelajaran
                        ON nilai.kdMp = matapelajaran.kdMp
                        WHERE nilai.nis = ${req.params.nis} AND nilai.kelas = ${req.params.kelas};`;
        connection.query(qstring,(err,data) =>{
            if (err) {
                console.log("error:", err);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat get data"
                });
            }
            else res.send(data)
        });
    }
}