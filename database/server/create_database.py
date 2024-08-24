import sqlite3

conn = sqlite3.connect('./database/database.db')
cursor = conn.cursor()

cursor.execute('''
    CREATE TABLE IF NOT EXISTS kategori_produk (
        id_kategori INTEGER PRIMARY KEY,
        nama_kategori TEXT NOT NULL
    );
''')

cursor.execute('''
    CREATE TABLE IF NOT EXISTS produk (
        id_produk INTEGER PRIMARY KEY,
        nama_produk TEXT NOT NULL,
        harga REAL NOT NULL,
        id_kategori INTEGER,
        FOREIGN KEY (id_kategori) REFERENCES kategori_produk(id_kategori)
    );
''')

conn.commit()
conn.close()
print("Database dan tabel berhasil dibuat!")