"use client"; // karena menggunakan useState

import { useState } from "react";
import { ShoppingBag, Star, TrendingUp, ShieldCheck, Truck, Clock } from "lucide-react";

export default function ProductPage() {
  // Array gambar produk (bisa diganti dengan URL lain)
  const productImages = [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1703174319257-bbacb50fee9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNraW4lMjBjYXJlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const [mainImage, setMainImage] = useState(productImages[0]);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Navbar sederhana ala e-commerce */}
      <nav className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-rose-600">Glow.Inc</div>
          <div className="flex gap-4 items-center">
            <input 
              type="text" 
              placeholder="Cari produk..." 
              className="hidden md:block border rounded-lg px-4 py-2 w-64 text-sm"
            />
            <button className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-rose-700">
              Masuk
            </button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-slate-500">
        <span>Home</span> &gt; <span>Kecantikan</span> &gt; <span className="text-slate-800">Serum Ajaib</span>
      </div>

      {/* Product Detail Section - dua kolom */}
      <section className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-8">
        {/* Kiri: Gambar produk */}
        <div>
          <div className="bg-slate-100 aspect-square rounded-xl overflow-hidden border">
            <img 
              src={mainImage}
              alt="Serum Ajaib" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 mt-4">
            {productImages.map((img, index) => (
              <div 
                key={index} 
                className={`w-16 h-16 bg-slate-100 rounded border overflow-hidden cursor-pointer transition ${mainImage === img ? 'ring-2 ring-rose-500' : ''}`}
                onClick={() => setMainImage(img)}
              >
                <img 
                  src={img} 
                  alt={`thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Kanan: Detail produk */}
        <div>
          {/* Nama produk */}
          <h1 className="text-2xl font-semibold">Serum Ajaib Anti Penuaan</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-sm text-slate-500">4.9 (128 rating)</span>
          </div>

          {/* Harga */}
          <div className="mt-4">
            <span className="text-3xl font-bold text-rose-600">Rp99.000</span>
            <span className="ml-2 text-sm line-through text-slate-400">Rp125.000</span>
            <span className="ml-2 bg-rose-100 text-rose-600 px-2 py-1 rounded text-xs font-semibold">-20%</span>
          </div>

          {/* Info pengiriman */}
          <div className="mt-6 border-t pt-4 space-y-3">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-slate-500" />
              <span className="text-sm">Gratis ongkir ke seluruh Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-500" />
              <span className="text-sm">Pengiriman cepat 2-3 hari</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-slate-500" />
              <span className="text-sm">Garansi 100% uang kembali</span>
            </div>
          </div>

          {/* Varian */}
          <div className="mt-6">
            <p className="font-medium mb-2">Varian Kemasan</p>
            <div className="flex gap-2">
              <button className="border rounded-lg px-4 py-2 text-sm hover:border-rose-500">30 ml</button>
              <button className="border rounded-lg px-4 py-2 text-sm hover:border-rose-500">50 ml</button>
              <button className="border rounded-lg px-4 py-2 text-sm hover:border-rose-500">100 ml</button>
            </div>
          </div>

          {/* Jumlah */}
          <div className="mt-6">
            <p className="font-medium mb-2">Jumlah</p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 border rounded">-</button>
              <span className="w-12 text-center">1</span>
              <button className="w-8 h-8 border rounded">+</button>
              <span className="text-sm text-slate-500 ml-4">Stok: 250</span>
            </div>
          </div>

          {/* Tombol aksi */}
          <div className="mt-8 flex gap-3">
            <button className="flex-1 bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" /> Beli Sekarang
            </button>
            <button className="flex-1 border border-rose-600 text-rose-600 py-3 rounded-lg font-semibold hover:bg-rose-50">
              + Keranjang
            </button>
          </div>

          {/* Informasi tambahan */}
          <div className="mt-6 text-sm text-slate-500 border-t pt-4">
            <p className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> 1.2k terjual dalam 24 jam terakhir</p>
          </div>
        </div>
      </section>
    </main>
  );
}