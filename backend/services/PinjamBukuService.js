module.exports = exports = (app, pool) => {
    app.get('/api/PinjamBuku', (req, res) => {
        const query = 'SELECT * FROM pinjam_buku where is_active = true'
        pool.query(query, (error, result) => {
            if (error) {
                res.send(400, {
                    success: false,
                    data: error,
                })
            } else {
                res.send(200, {
                    success: true,
                    data: result.rows,
                })
            }
        })
    })

    app.get('/api/PinjamBuku/:id', (req, res) => {
        const { id } = req.params
        const PinjamBukubyid = `select * from pinjam_buku where id = ${id}`
        pool.query(PinjamBukubyid, (error, result) => {
            if (error) {
                return res.send(500, {
                    success: false,
                    error: "an erro occured"
                })
            } else {
                return res.send(200, {
                    success: true,
                    data: result.rows[0]
                })
            }
        })
    })

    app.post("/api/addPinjamBuku", (req, res) => {
        const { nama_buku, nama_peminjam, is_active } = req.body;
        const query = `insert into pinjam_buku (Nama_Buku, Nama_Peminjam,Pengembalian, is_active, create_by, create_date)
                            VALUES('${nama_buku}','${nama_peminjam}',false,${is_active},'admin','now()');`;
        pool.query(query, (error, result) => {
            if (error) {
                return res.send(500, {
                    success: false,
                    error: "an Error Occoured 1"
                })
            } else {
                return res.send(201, {
                    success: true,
                    data: `${nama_buku} was seved`
                })
            }
        })

    })

    app.put('/api/updatePinjamBuku/:id', (request, response) => {
        const { nama_buku, nama_peminjam, pengembalian, is_active } = request.body
        const { id } = request.params

        const query = `Update pinjam_buku
                        set Nama_Buku = '${nama_buku}',
                        Nama_Peminjam = '${nama_peminjam}',
                        Pengembalian = '${pengembalian}',   
                        is_active = ${is_active},
                        modify_by = 'admin',
                        modify_date = now()
                        where id = ${id}`

        pool.query(query, (error, result) => {
            console.log(query)
            if (error) {
                return response.send(500, {
                    success: false,
                    data: error,
                })
            } else {
                return response.send(200, {
                    success: true,
                    data: "data updated"
                })
            }
        })

    })

    app.put("/api/deletePinjamBuku/:id", (request, response) => {
        const { id } = request.params

        const query = `Update pinjam_buku
                       set is_active = false,
                       modify_by = 'admin',
                       modify_date = now()
                       where id = ${id};`

        pool.query(query, (error, result) => {
            if (error) {
                return response.send(400, {
                    success: false,
                    data: error,
                })
            } else {
                return response.send(200, {
                    success: true,
                    data: 'Data has been delete',
                })
            }
        })
    })
}