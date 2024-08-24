import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduk = () => {
  const { id } = useParams();
  const [namaProduk, setNamaProduk] = useState('');
  const [harga, setHarga] = useState('');
  const [idKategori, setIdKategori] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/produk/${id}`)
      .then(response => response.json())
      .then(data => {
        setNamaProduk(data.nama_produk);
        setHarga(data.harga);
        setIdKategori(data.id_kategori);
      })
      .catch(error => console.error('Error fetching produk:', error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/produk/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nama_produk: namaProduk, harga, id_kategori: idKategori }),
    })
      .then(response => response.json())
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating produk:', error));
  };

  return (
    <div>
      <h1>Edit Produk</h1>
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
        <button type="submit">Update Produk</button>
      </form>
    </div>
  );
};

export default EditProduk;