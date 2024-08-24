import sqlite3

# Koneksi ke database SQLite
conn = sqlite3.connect('./database/database.db')
cursor = conn.cursor()

# Menampilkan data dari tabel kategori_produk
print("Kategori Produk:")
cursor.execute('SELECT * FROM kategori_produk')
kategori_produk = cursor.fetchall()
for row in kategori_produk:
    print(row)

# Menampilkan data dari tabel produk
print("\nProduk:")
cursor.execute('SELECT * FROM produk')
produk = cursor.fetchall()
for row in produk:
    print(row)

# Menutup koneksi
conn.close()
