import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduk = () => {
  const [namaProduk, setNamaProduk] = useState('');
  const [harga, setHarga] = useState('');
  const [idKategori, setIdKategori] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/produk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nama_produk: namaProduk, harga, id_kategori: idKategori }),
    })
      .then(response => response.json())
      .then(() => navigate('/'))
      .catch(error => console.error('Error adding produk:', error));
  };

  return (
    <div>
      <h1>Add New Produk</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nama Produk:
          <input
            type="text"
            value={namaProduk}
            onChange={(e) => setNamaProduk(e.target.value)}
          />
        </label>
        <br />
        <label>
          Harga:
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </label>
        <br />
        <label>
          ID Kategori:
          <input
            type="text"
            value={idKategori}
            onChange={(e) => setIdKategori(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Produk</button>
      </form>
    </div>
  );
};

export default AddProduk;