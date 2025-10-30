import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-4 w-60 hover:scale-105 transition">
      <img src={image} alt={name} className="rounded-lg mb-3" />
      <h3 className="text-xl font-bold text-amber-900">{name}</h3>
      <p className="text-gray-700 mb-2">Rp {price}</p>
      <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600">
        Tambah
      </button>
    </div>
  );
};

export default ProductCard;
