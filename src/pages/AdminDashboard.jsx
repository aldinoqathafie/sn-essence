import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Package,
  Users,
  ShoppingBag,
  BarChart3,
  Settings,
  Plus,
  X,
  Edit,
  Trash2,
} from "lucide-react";
import redisFetch from "../redisClient";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("products");
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    img: "",
  });

  // Ambil data produk dari Redis
  const fetchProducts = async () => {
    try {
      const data = await redisFetch("products");
      if (data) setProducts(data);
    } catch (err) {
      console.error("Gagal ambil data produk:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Simpan ke Redis (update via Upstash REST)
  const saveToRedis = async (updated) => {
    try {
      await fetch(
        `${import.meta.env.VITE_UPSTASH_REDIS_REST_URL}/set/products`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updated),
        }
      );
      setProducts(updated);
    } catch (err) {
      console.error("Gagal menyimpan ke Redis:", err);
    }
  };

  // Logout
  const handleLogout = () => {
    alert("Admin telah logout!");
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    navigate(isMobile ? "/MobileLogin" : "/PCLogin");
  };

  // Tambah / Edit produk
  const handleSave = async () => {
    if (!formData.name || !formData.price || !formData.stock) {
      alert("Lengkapi semua field!");
      return;
    }

    let updated;
    if (editingProduct) {
      updated = products.map((p) =>
        p.id === editingProduct.id ? { ...p, ...formData } : p
      );
      alert("Produk diperbarui!");
    } else {
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        price: formData.price,
        stock: parseInt(formData.stock),
        img: formData.img || "",
      };
      updated = [...products, newProduct];
      alert("Produk ditambahkan!");
    }

    await saveToRedis(updated);
    setShowModal(false);
  };

  // Hapus produk
  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus produk ini?")) {
      const updated = products.filter((p) => p.id !== id);
      await saveToRedis(updated);
    }
  };

  const openModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData(product);
    } else {
      setEditingProduct(null);
      setFormData({ name: "", price: "", stock: "", img: "" });
    }
    setShowModal(true);
  };

  return (
    <div className="flex min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-widest text-center py-5 border-b border-gray-700">
            ACE DECALS ADMIN
          </h1>
          <nav className="flex flex-col mt-4">
            {[
              { key: "dashboard", label: "Dashboard", icon: <BarChart3 /> },
              { key: "products", label: "Produk", icon: <Package /> },
              { key: "orders", label: "Pesanan", icon: <ShoppingBag /> },
              { key: "users", label: "Pengguna", icon: <Users /> },
              { key: "settings", label: "Pengaturan", icon: <Settings /> },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveMenu(item.key)}
                className={`flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-800 transition ${
                  activeMenu === item.key ? "bg-gray-800" : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 m-4 rounded-md transition"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {activeMenu === "products" && (
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold">Kelola Produk</h2>
              <button
                onClick={() => openModal()}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                <Plus className="w-4 h-4" /> Tambah Produk
              </button>
            </div>

            <table className="w-full border-collapse bg-white shadow rounded-xl overflow-hidden">
              <thead className="bg-black text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Nama Produk</th>
                  <th className="py-3 px-4 text-left">Harga</th>
                  <th className="py-3 px-4 text-left">Stok</th>
                  <th className="py-3 px-4 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-4">{p.name}</td>
                    <td className="py-3 px-4">{p.price}</td>
                    <td className="py-3 px-4">{p.stock}</td>
                    <td className="py-3 px-4 space-x-2">
                      <button
                        onClick={() => openModal(p)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm inline-flex items-center gap-1"
                      >
                        <Edit className="w-4 h-4" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm inline-flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" /> Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-semibold mb-4">
              {editingProduct ? "Edit Produk" : "Tambah Produk"}
            </h3>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nama Produk"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Harga (misal Rp25.000)"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="number"
                placeholder="Stok"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="URL Gambar (opsional)"
                value={formData.img}
                onChange={(e) =>
                  setFormData({ ...formData, img: e.target.value })
                }
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md border hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
