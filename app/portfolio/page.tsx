import {
  ArrowUpRight,
  Camera,
  PenTool,
  Mail,
  MapPin,
  Calendar,
  Heart,
} from "lucide-react";

export default function PortfolioPage() {
  const works = [
    {
      title: "Aplikasi Keuangan Pribadi",
      category: "UI/UX Design",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
    },
    {
      title: "Rebranding Kopi Lokal",
      category: "Branding",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1674&auto=format&fit=crop",
    },
    {
      title: "Foto Produk UMKM",
      category: "Photography",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1595055118207-6cba5ac4ee7b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZvdG8lMjBQcm9kdWt8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Website Pribadi",
      category: "Web Design",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1740&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-700">
      {/* Header sederhana */}
      <header className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-serif font-bold text-slate-800">
            Andi Saputra
          </h1>
          <p className="text-sm text-slate-500">Desainer Visual & Fotografer</p>
        </div>
        <nav className="flex gap-6 text-sm">
          <a href="#work" className="hover:text-amber-600 transition">
            Karya
          </a>
          <a href="#about" className="hover:text-amber-600 transition">
            Tentang
          </a>
          <a href="#contact" className="hover:text-amber-600 transition">
            Kontak
          </a>
        </nav>
      </header>

      {/* Hero personal */}
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Foto profil (placeholder) */}
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-amber-100 overflow-hidden border-4 border-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
              alt="Andi Saputra"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Teks perkenalan */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-4">
              👋 Tersedia untuk proyek freelance
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Halo, saya Andi
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Saya membantu brand dan individu mewujudkan ide menjadi desain
              yang indah dan fungsional. Berbasis di Kajen, saya suka tantangan
              visual dan bercerita lewat gambar.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-amber-500 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-600 transition flex items-center gap-2 shadow-md"
              >
                <Mail className="w-5 h-5" /> Kerjasama
              </a>
              <a
                href="#work"
                className="border border-slate-300 px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition"
              >
                Lihat Karya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistik personal */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-amber-600">4+</p>
            <p className="text-sm text-slate-500">Tahun pengalaman</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-600">24</p>
            <p className="text-sm text-slate-500">Proyek selesai</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-600">12</p>
            <p className="text-sm text-slate-500">Klien puas</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-600">8</p>
            <p className="text-sm text-slate-500">Penghargaan</p>
          </div>
        </div>
      </section>

      {/* Karya terbaru */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
            Karya Terbaru
          </h3>
          <p className="text-slate-500 mb-8">
            Beberapa proyek yang saya kerjakan dengan penuh cinta.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {works.map((work, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">
                      {work.category}
                    </span>
                    <span className="text-xs text-slate-400">{work.year}</span>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">
                    {work.title}
                  </h4>
                  <p className="text-sm text-slate-500">
                    Desain yang mengutamakan pengalaman pengguna dan estetika.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="border border-slate-300 px-8 py-3 rounded-full text-sm font-medium hover:bg-slate-100 transition inline-flex items-center gap-2">
              Lihat semua proyek <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Tentang Saya */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
              Tentang Saya
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Saya adalah desainer visual yang berbasis di Kajen, Jawa Tengah.
              Lulusan Desain Komunikasi Visual tahun 2020, saya telah bekerja
              dengan berbagai klien dari startup hingga UMKM. Saya percaya
              desain yang baik adalah yang mampu bercerita dan menyelesaikan
              masalah.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Di luar pekerjaan, saya suka memotret kegiatan sehari-hari, ngopi
              di tempat baru, dan main gitar. Saya juga aktif di komunitas
              desain lokal.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4">Informasi Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <span>andi.saputra@email.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Kajen, Pekalongan</span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-amber-500" />
                <span>Tersedia Senin - Jumat</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="p-2 bg-slate-200 rounded-full hover:bg-slate-300 transition"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-slate-200 rounded-full hover:bg-slate-300 transition"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-500">
          <p>
            © 2025 Andi Saputra. Dibuat dengan{" "}
            <Heart className="w-4 h-4 inline text-amber-500" /> di Kajen.
          </p>
        </div>
      </footer>
    </main>
  );
}
