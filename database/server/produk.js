const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = new sqlite3.Database('./database/database.db');

// Create
app.post('/produk', (req, res) => {
    const { nama_produk, harga, id_kategori } = req.body;
    db.run('INSERT INTO produk (nama_produk, harga, id_kategori) VALUES (?, ?, ?)', [nama_produk, harga, id_kategori], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id_produk: this.lastID });
    });
});

// Read
app.get('/produk', (req, res) => {
    db.all('SELECT * FROM produk', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Read by ID
app.get('/produk/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM produk WHERE id_produk = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Produk tidak ditemukan' });
        }
        res.json(row);
    });
});

// Update by ID
app.put('/produk/:id', (req, res) => {
    const { id } = req.params;
    const { nama_produk, harga, id_kategori } = req.body;
    db.run('UPDATE produk SET nama_produk = ?, harga = ?, id_kategori = ? WHERE id_produk = ?', [nama_produk, harga, id_kategori, id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Produk tidak ditemukan' });
        }
        res.status(200).json({ message: 'Produk diperbarui' });
    });
});

// Delete by ID
app.delete('/produk/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM produk WHERE id_produk = ?', [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Produk tidak ditemukan' });
        }
        res.status(200).json({ message: 'Produk dihapus' });
    });
});

// Kategori Produk

// Create
app.post('/kategori_produk', (req, res) => {
    const { nama_kategori } = req.body;
    db.run('INSERT INTO kategori_produk (nama_kategori) VALUES (?)', [nama_kategori], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id_kategori: this.lastID });
    });
});

// Read
app.get('/kategori_produk', (req, res) => {
    db.all('SELECT * FROM kategori_produk', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Read by ID
app.get('/kategori_produk/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM kategori_produk WHERE id_kategori = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Kategori produk tidak ditemukan' });
        }
        res.json(row);
    });
});

// Update by ID
app.put('/kategori_produk/:id', (req, res) => {
    const { id } = req.params;
    const { nama_kategori } = req.body;
    db.run('UPDATE kategori_produk SET nama_kategori = ? WHERE id_kategori = ?', [nama_kategori, id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Kategori produk tidak ditemukan' });
        }
        res.status(200).json({ message: 'Kategori produk diperbarui' });
    });
});

// Delete by ID
app.delete('/kategori_produk/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM kategori_produk WHERE id_kategori = ?', [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Kategori produk tidak ditemukan' });
        }
        res.status(200).json({ message: 'Kategori produk dihapus' });
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});