import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProdukList = () => {
  const [produks, setProduks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/produk')
      .then(response => response.json())
      .then(data => setProduks(data))
      .catch(error => console.error('Error fetching produk:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/produk/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setProduks(produks.filter(produk => produk.id_produk !== id));
      })
      .catch(error => console.error('Error deleting produk:', error));
  };

  return (
    <div>
      <h1>List of Produk</h1>
      <Link to="/add">Add New Produk</Link>
      <ul>
        {produks.map(produk => (
          <li key={produk.id_produk}>
            {produk.nama_produk} - {produk.harga} - {produk.id_kategori}
            <Link to={`/edit/${produk.id_produk}`}>Edit</Link>
            <button onClick={() => handleDelete(produk.id_produk)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProdukList;
