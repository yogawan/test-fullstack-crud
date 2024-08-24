import sqlite3

conn = sqlite3.connect('./database/database.db')
cursor = conn.cursor()

cursor.execute('''
    INSERT INTO kategori_produk (nama_kategori)
    VALUES ('Elektronik')
''')
cursor.execute('''
    INSERT INTO kategori_produk (nama_kategori)
    VALUES ('Pakaian')
''')
cursor.execute('''
    INSERT INTO kategori_produk (nama_kategori)
    VALUES ('Peralatan Rumah Tangga')
''')

cursor.execute('''
    INSERT INTO produk (nama_produk, harga, id_kategori)
    VALUES ('Laptop', 7500000, 1)
''')
cursor.execute('''
    INSERT INTO produk (nama_produk, harga, id_kategori)
    VALUES ('Smartphone', 3000000, 1)
''')
cursor.execute('''
    INSERT INTO produk (nama_produk, harga, id_kategori)
    VALUES ('Jaket', 500000, 2)
''')
cursor.execute('''
    INSERT INTO produk (nama_produk, harga, id_kategori)
    VALUES ('Blender', 700000, 3)
''')

conn.commit()
conn.close()
print("Data berhasil dimasukkan ke dalam tabel!")
