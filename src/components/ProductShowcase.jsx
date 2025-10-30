export default function ProductShowcase() {
  const products = [
    { name: "Essence Udang", price: "Rp45.000", img: "/assets/udang.png" },
    { name: "Essence Ikan Mas", price: "Rp50.000", img: "/assets/ikanmas.png" },
    { name: "Essence Vanila", price: "Rp40.000", img: "/assets/vanila.png" },
  ];

  return (
    <section className="bg-[#121212] py-16 text-center text-white">
      <h2 className="text-3xl font-bold text-amber-400 mb-10">Produk Unggulan</h2>
      <div className="grid md:grid-cols-3 gap-8 px-8 md:px-24">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img src={p.img} alt={p.name} className="w-40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-amber-400 mb-3">{p.price}</p>
            <button className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-semibold">
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
