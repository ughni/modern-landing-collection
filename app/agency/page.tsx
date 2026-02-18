import { BarChart, Globe, Zap, Users, TrendingUp, Award, ChevronRight, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export default function AgencyPage() {
  const services = [
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Kami membantu Anda memahami data pelanggan dan pasar untuk pengambilan keputusan yang lebih cerdas.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Perluas jangkauan bisnis Anda ke pasar internasional dengan strategi digital yang tepat.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Dari ide hingga peluncuran dalam hitungan minggu, tanpa mengorbankan kualitas.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Tingkatkan konversi dan pendapatan dengan kampanye berbasis data dan optimasi berkelanjutan.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const works = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1674&auto=format&fit=crop",
    },
    {
      title: "Mobile App Design",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1740&auto=format&fit=crop",
    },
    {
      title: "Digital Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1740&auto=format&fit=crop",
    }
  ];

  const testimonials = [
    {
      quote: "Nexus Corp membantu kami meningkatkan traffic website sebesar 200% dalam 3 bulan. Tim mereka sangat profesional dan responsif.",
      name: "Andi Pratama",
      role: "CEO, TokoKita",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
    },
    {
      quote: "Strategi digital yang mereka rancang tepat sasaran. Kami berhasil menjangkau pasar baru yang sebelumnya sulit ditembus.",
      name: "Siti Nurhaliza",
      role: "Marketing Manager, FesyenIndo",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    },
    {
      quote: "Pelayanan cepat dan hasil memuaskan. Mereka seperti bagian dari tim internal kami.",
      name: "Budi Santoso",
      role: "Founder, EduTech",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1740&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-cyan-500 selection:text-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-cyan-400">NEXUS.CORP</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-cyan-400 transition">Home</a>
            <a href="#" className="hover:text-cyan-400 transition">Work</a>
            <a href="#" className="hover:text-cyan-400 transition">Services</a>
            <a href="#" className="hover:text-cyan-400 transition">About</a>
            <a href="#" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          <button className="border border-cyan-500/30 px-5 py-2 rounded-full text-sm hover:bg-cyan-500 hover:text-black transition">
            Partner With Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16 max-w-7xl mx-auto text-center">
        <div className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wide">
          ✦ DIGITAL SOLUTIONS 2026 ✦
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          We Build <span className="text-cyan-400">Future.</span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
          Helping brands scale their business through data-driven strategies and cutting-edge technology.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          <div>
            <div className="text-4xl font-bold text-cyan-400">50+</div>
            <div className="text-slate-400 text-sm">Clients Worldwide</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-400">120+</div>
            <div className="text-slate-400 text-sm">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-400">5+</div>
            <div className="text-slate-400 text-sm">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider">WHAT WE DO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Layanan Unggulan</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group relative p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-cyan-500 transition-all hover:-translate-y-1 duration-300 overflow-hidden">
              <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition`}></div>
              <service.icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">OUR WORK</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Proyek Terbaru</h2>
          </div>
          <button className="hidden md:flex items-center gap-1 text-cyan-400 hover:underline">
            Lihat Semua <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {works.map((work, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl border border-slate-700 aspect-square">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <div>
                  <p className="text-xs text-cyan-400 mb-1">{work.category}</p>
                  <h3 className="font-bold">{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Apa Kata Klien</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Mengembangkan Bisnis Anda?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Mari diskusikan kebutuhan digital Anda bersama tim ahli kami. Gratis konsultasi awal.
          </p>
          <button className="bg-cyan-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30">
            Mulai Kerjasama
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">NEXUS.CORP</h3>
            <p className="text-slate-400 text-sm">Membangun masa depan digital dengan inovasi dan data.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400">Data Analytics</a></li>
              <li><a href="#" className="hover:text-cyan-400">Global Reach</a></li>
              <li><a href="#" className="hover:text-cyan-400">Fast Execution</a></li>
              <li><a href="#" className="hover:text-cyan-400">Growth Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400">About</a></li>
              <li><a href="#" className="hover:text-cyan-400">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@nexus.corp</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +62 812 3456 7890</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Jakarta, Indonesia</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-cyan-400"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cyan-400"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-cyan-400"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-slate-600 text-sm mt-12 border-t border-slate-800 pt-6">
          © 2025 Nexus Corp. All rights reserved.
        </div>
      </footer>
    </main>
  );
}