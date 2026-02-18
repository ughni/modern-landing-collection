import { CheckCircle, Clock, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar dengan efek blur */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-slate-200/60">
        <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <div className="font-bold text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SneakClean.
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30">
            Hubungi Kami
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri */}
        <div className="space-y-6 animate-in slide-in-from-left duration-700">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            🔥 Promo: Diskon 20% Cuci Pertama
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Sepatu Kotor? <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Terima Beres.
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Layanan cuci sepatu premium dengan teknologi Deep Clean.
            Gratis antar-jemput untuk wilayah Kajen & sekitarnya.
            Garansi bersih atau uang kembali.
          </p>

          <ul className="space-y-3 pt-2">
            {[
              "Pengerjaan Kilat 24 Jam",
              "Chemical Aman (Tidak Merusak Lem)",
              "Gratis Ongkir Antar Jemput",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 font-medium">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-4 flex gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all hover:scale-105">
              Booking Sekarang
            </button>
            <button className="px-8 py-3 rounded-lg font-bold text-slate-600 border border-slate-300 hover:bg-slate-100 transition-all hover:border-slate-400">
              Lihat Harga
            </button>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="relative animate-in slide-in-from-right duration-700">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-200 hover:shadow-3xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-xl">Paket Fast Clean</h3>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </span>
            </div>
            <div className="text-4xl font-extrabold text-slate-900 mb-2">
              Rp 35.000
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Cocok untuk pemakaian harian.
            </p>

            <div className="space-y-4 border-t pt-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Estimasi Selesai</p>
                  <p className="font-bold text-sm">Besok Sore (24 Jam)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Pengiriman</p>
                  <p className="font-bold text-sm">Gratis Antar Jemput</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Garansi</p>
                  <p className="font-bold text-sm">Uang Kembali</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-slate-900 text-white py-3 rounded-lg font-bold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Pilih Paket Ini
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}