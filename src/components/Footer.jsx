import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
                {/* Brand Column */}
                <div className="space-y-4 md:col-span-1">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-black text-white">
                        <span>🌸</span>
                        <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                            BloomCraft
                        </span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Toko bunga segar premium terpercaya. Menghadirkan keindahan dan kebahagiaan di setiap momen istimewa Anda.
                    </p>
                    <div className="flex gap-3 pt-2">
                        {["instagram", "facebook", "whatsapp", "tiktok"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-pink-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold capitalize"
                            >
                                {social[0].toUpperCase()}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold text-base">Navigasi Utama</h4>
                    <ul className="space-y-2.5 text-sm text-gray-400">
                        <li><Link to="/" className="hover:text-pink-400 transition-colors">Beranda</Link></li>
                        <li><Link to="/shop" className="hover:text-pink-400 transition-colors">Katalog Bunga</Link></li>
                        <li><Link to="/about" className="hover:text-pink-400 transition-colors">Tentang Kami</Link></li>
                        <li><Link to="/contact" className="hover:text-pink-400 transition-colors">Kontak</Link></li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold text-base">Kategori Bunga</h4>
                    <ul className="space-y-2.5 text-sm text-gray-400">
                        <li><Link to="/shop" className="hover:text-pink-400 transition-colors">Buket Mawar</Link></li>
                        <li><Link to="/shop" className="hover:text-pink-400 transition-colors">Buket Tulip</Link></li>
                        <li><Link to="/shop" className="hover:text-pink-400 transition-colors">Bunga Wisuda</Link></li>
                        <li><Link to="/shop" className="hover:text-pink-400 transition-colors">Karangan Papan</Link></li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold text-base">Buletin Diskon 10%</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        Dapatkan promo eksklusif dan voucher potongan harga langsung ke inbox Anda.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                        <input
                            type="email"
                            placeholder="Alamat email Anda"
                            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl py-2.5 text-sm hover:from-pink-600 hover:to-rose-600 transition-all shadow-md shadow-pink-500/20"
                        >
                            Daftar Sekarang
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                <p>© 2026 BloomCraft Floral Studio. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gray-400">Syarat & Ketentuan</a>
                    <a href="#" className="hover:text-gray-400">Kebijakan Privasi</a>
                </div>
            </div>
        </footer>
    );
}