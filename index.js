const express = require('express');
const app = express();
const db = require('./models');
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, async () => {
    console.log('Server started on port 3000');
});

db.sequelize.sync()
// Sinkronisasi model Sequelize dengan database (membuat tabel jika belum ada)
.then(() => {
app.listen(3000, () => {
    // Menjalankan server Express di port 3000 setelah database siap
    console.log('Server started');
    // Menampilkan pesan di console bahwa server berhasil dijalankan
    });
})
.catch((err) => {
    // Menangani error jika terjadi kegagalan sinkronisasi database
    console.log(err);
});