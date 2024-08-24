import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProdukList from './components/ProdukList';
import AddProduk from './components/AddProduk';
import EditProduk from './components/EditProduk';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProdukList />} />
          <Route path="/add" element={<AddProduk />} />
          <Route path="/edit/:id" element={<EditProduk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;