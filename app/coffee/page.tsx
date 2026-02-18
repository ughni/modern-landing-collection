import { Coffee, MapPin, Star, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function CoffeePage() {
  const menuItems = [
    {
      name: "Espresso",
      description: "Single origin Gayo, dark roast",
      price: "Rp 25K",
      image: "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVzcHJlc3NvfGVufDB8fDB8fHww"
    },
    {
      name: "Cappuccino",
      description: "Dengan foam lembut dan sentuhan kayu manis",
      price: "Rp 32K",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1742&auto=format&fit=crop"
    },
    {
      name: "V60 Pour Over",
      description: "Manual brew dengan biji pilihan",
      price: "Rp 38K",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1740&auto=format&fit=crop"
    },
    {
      name: "Affogato",
      description: "Espresso + gelato vanilla homemade",
      price: "Rp 45K",
      image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1798&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-amber-50 font-serif">
      {/* Navbar dengan efek blur */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-neutral-900/80 border-b border-neutral-800">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-widest text-amber-500">
            KOPI.SENJA
          </div>
          <div className="hidden md:flex gap-8 text-sm tracking-widest text-neutral-300">
            <a href="#" className="hover:text-amber-500 transition">BERANDA</a>
            <a href="#" className="hover:text-amber-500 transition">MENU</a>
            <a href="#" className="hover:text-amber-500 transition">LOKASI</a>
            <a href="#" className="hover:text-amber-500 transition">CERITA KAMI</a>
            <a href="#" className="hover:text-amber-500 transition">KONTAK</a>
          </div>
          <button className="bg-amber-600 text-neutral-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-amber-500 transition">
            Pesan Online
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-amber-500 text-sm tracking-widest uppercase">
            <Star className="w-4 h-4 fill-amber-500" />
            <span>Specialty Coffee • Since 2018</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium leading-tight">
            Rasakan <br />
            <span className="text-amber-500 italic">Ketenangan</span> <br />
            Dalam Secangkir.
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-md font-sans">
            Biji kopi pilihan dari dataran tinggi Gayo, diseduh dengan hati oleh barista berpengalaman. Tempat terbaik untuk menyendiri atau berdiskusi.
          </p>
          <div className="flex flex-wrap gap-4 font-sans pt-4">
            <button className="bg-amber-600 text-neutral-900 px-8 py-3 rounded-full font-bold hover:bg-amber-500 transition shadow-lg shadow-amber-600/30">
              Lihat Menu
            </button>
            <button className="border border-neutral-700 px-8 py-3 rounded-full hover:bg-neutral-800 transition flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Lokasi Kami
            </button>
          </div>
        </div>

        {/* Visual Kanan dengan Gambar Kopi */}
        <div className="relative h-125 rounded-t-full rounded-b-[200px] overflow-hidden border border-neutral-700 shadow-2xl shadow-amber-900/30">
          <img 
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop" 
            alt="Secangkir kopi dengan latar gelap" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-2xl font-bold">#KopiSenja</p>
            <p className="text-sm text-neutral-300">Setiap tegukan punya cerita</p>
          </div>
          {/* Efek asap/glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-600 rounded-full blur-[100px] opacity-20"></div>
        </div>
      </section>

      {/* Signature Menu Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-amber-500 tracking-widest text-sm uppercase">Signature</span>
          <h2 className="text-4xl md:text-5xl font-medium mt-2">Menu Andalan Kami</h2>
          <p className="text-neutral-400 font-sans max-w-2xl mx-auto mt-4">
            Disajikan dengan resep spesial yang hanya bisa kamu temukan di Kopi Senja
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, idx) => (
            <div key={idx} className="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 hover:scale-105 transition duration-300">
              <div className="h-64 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-amber-500">{item.name}</h3>
                  <span className="bg-amber-600/20 text-amber-400 px-2 py-1 rounded-full text-sm font-bold">{item.price}</span>
                </div>
                <p className="text-neutral-400 text-sm font-sans">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lokasi & Suasana */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <span className="text-amber-500 tracking-widest text-sm uppercase">Temukan Kami</span>
          <h2 className="text-4xl font-medium">Suasana Hangat di Tengah Kota</h2>
          <p className="text-neutral-400 font-sans leading-relaxed">
            Terletak di jantung kota Kajen, Kopi Senja menawarkan interior industrial yang dipadukan dengan sentuhan kayu dan pencahayaan temaram. Cocok untuk bekerja, ngobrol santai, atau sekadar menikmati kesunyian.
          </p>
          <div className="space-y-3 font-sans">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span>Jl. Pahlawan No. 45, Kajen</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>Buka setiap hari: 08.00 - 22.00</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-500" />
              <span>+62 812 3456 7890</span>
            </div>
          </div>
          <button className="border border-amber-600 text-amber-500 px-8 py-3 rounded-full font-bold hover:bg-amber-600 hover:text-neutral-900 transition inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Buka Google Maps
          </button>
        </div>
        <div className="order-1 md:order-2">
          <div className="h-96 rounded-3xl overflow-hidden border border-neutral-700">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1742&auto=format&fit=crop" 
              alt="Suasana kafe" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-neutral-800 p-10 rounded-3xl border border-neutral-700 text-center">
          <div className="flex justify-center gap-1 text-amber-500 mb-6">
            {[1,2,3,4,5].map((i) => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <p className="text-xl md:text-2xl italic text-neutral-200 max-w-3xl mx-auto">
            "Kopi terenak di Kajen! Suasananya cozy, pelayanan ramah, dan harga bersahabat. Wajib coba V60-nya."
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-12 bg-neutral-600 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold">Sarah Wijaya</p>
              <p className="text-sm text-neutral-400">Pengunjung setia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">KOPI.SENJA</h3>
            <p className="text-neutral-400 text-sm font-sans">Setiap tegukan adalah cerita. Nikmati momen terbaikmu bersama kami.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-neutral-400 font-sans">
              <li><a href="#" className="hover:text-amber-500">Espresso</a></li>
              <li><a href="#" className="hover:text-amber-500">Cappuccino</a></li>
              <li><a href="#" className="hover:text-amber-500">V60</a></li>
              <li><a href="#" className="hover:text-amber-500">Affogato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Informasi</h4>
            <ul className="space-y-2 text-sm text-neutral-400 font-sans">
              <li><a href="#" className="hover:text-amber-500">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-amber-500">Lokasi</a></li>
              <li><a href="#" className="hover:text-amber-500">Karir</a></li>
              <li><a href="#" className="hover:text-amber-500">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-neutral-600 text-sm font-sans mt-12 border-t border-neutral-800 pt-6">
          © 2025 Kopi Senja. All rights reserved.
        </div>
      </footer>
    </main>
  );
}