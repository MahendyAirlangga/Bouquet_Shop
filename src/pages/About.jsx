import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-pink-600 text-sm font-extrabold uppercase tracking-widest">
                    Tentang BloomCraft
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
                    Merangkai Senyum & Kebahagiaan di Setiap Helai Kelopak 🌸
                </h1>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    BloomCraft berdiri sejak 2020 dengan misi menghadirkan keindahan bunga segar pilihan langsung ke tangan orang-orang tercinta Anda dengan estetika rangkaian modern.
                </p>
            </div>

            {/* Story Image & Text Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-pink-100 relative group">
                    <img
                        src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800"
                        alt="Florist Crafting Bouquet"
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Kualitas Perkebunan Terbaik untuk Momen Tak Terlupakan
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Kami bekerja sama langsung dengan para petani bunga lokal di dataran tinggi Indonesia. Setiap bunga dipetik segar di pagi hari, disortir berdasarkan standar keharuman dan warna, lalu dirangkai oleh florist berpengalaman kami.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="bg-pink-50 p-4 rounded-2xl border border-pink-100">
                            <span className="text-2xl block mb-1">🌿</span>
                            <h4 className="font-bold text-gray-900 text-sm">100% Eco-Friendly</h4>
                            <p className="text-xs text-gray-500 mt-0.5">Kemasan ramah lingkungan</p>
                        </div>
                        <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100">
                            <span className="text-2xl block mb-1">💐</span>
                            <h4 className="font-bold text-gray-900 text-sm">Custom Arrangement</h4>
                            <p className="text-xs text-gray-500 mt-0.5">Bisa riquest tema & warna</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="space-y-10">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900">Nilai-Nilai Utama Kami</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-8">
                    <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm text-center space-y-3 hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-3xl mx-auto text-pink-600">
                            ✨
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">Kesegaran Terjamin</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Bunga dijamin bertahan segar hingga 5-7 hari dengan panduan perawatan terbaik dari kami.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm text-center space-y-3 hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center text-3xl mx-auto text-rose-600">
                            🎨
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">Estetika Modern</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Desain buket selalu mengikui tren floral art kontemporer dengan perpaduan warna yang harmonis.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm text-center space-y-3 hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl mx-auto text-amber-600">
                            🤝
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">Pelayanan Sepenuh Hati</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                            Tim CS & Florist siap mendampingi Anda memilih buket terbaik untuk momen bahagia.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-3xl p-10 text-white text-center space-y-6 shadow-xl">
                <h2 className="text-3xl font-black">Siap Mengirimkan Bunga Hari Ini?</h2>
                <p className="text-pink-100 text-sm max-w-xl mx-auto">
                    Pesan sebelum jam 15:00 WIB untuk pengiriman sameday langsung ke lokasi penerima.
                </p>
                <Link to="/shop">
                    <Button variant="secondary" size="lg" className="shadow-lg">
                        Jelajahi Toko Bunga Now →
                    </Button>
                </Link>
            </div>
        </div>
    );
}