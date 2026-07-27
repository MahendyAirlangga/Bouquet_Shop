import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Roses", "Tulips", "Graduation", "Wedding"];

    const products = [
        {
            id: 1,
            name: "Royal Rose Bouquet",
            price: "150.000",
            image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700",
            tag: "Best Seller",
            rating: 4.9,
        },
        {
            id: 2,
            name: "Spring Tulip Bouquet",
            price: "200.000",
            image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=700",
            tag: "Popular",
            rating: 4.8,
        },
        {
            id: 3,
            name: "Golden Sunflower Shine",
            price: "180.000",
            image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=700",
            tag: "New",
            rating: 5.0,
        },
        {
            id: 4,
            name: "White Lily Elegance",
            price: "220.000",
            image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=700",
            tag: "Limited",
            rating: 4.9,
        },
        {
            id: 5,
            name: "Purple Orchid Luxury",
            price: "350.000",
            image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=700",
            tag: "Premium",
            rating: 4.7,
        },
        {
            id: 6,
            name: "Fresh Daisy Garden",
            price: "120.000",
            image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=700",
            tag: "Trending",
            rating: 4.8,
        },
    ];

    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <Hero />

            {/* Features Banner */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-pink-50 via-white to-rose-50 rounded-3xl border border-pink-100/80 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-2xl">
                            🚚
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Gratis Ongkir</h4>
                            <p className="text-xs text-gray-500">Min. Belanja Rp 150k</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-2xl">
                            🌹
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">100% Bunga Segar</h4>
                            <p className="text-xs text-gray-500">Langsung dari Perkebunan</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl">
                            💌
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Kartu Ucapan Gratis</h4>
                            <p className="text-xs text-gray-500">Pesan Custom Bebas</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
                            ⚡
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Pengiriman Sameday</h4>
                            <p className="text-xs text-gray-500">Sampai Dalam 3 Jam</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Catalog Section */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
                    <span className="text-pink-600 text-sm font-extrabold uppercase tracking-widest">
                        Pilihan Terfavorit
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                        Best Seller Flowers 💐
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        Koleksi karangan bunga paling disukai untuk memberikan kesan mendalam bagi penerima.
                    </p>
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center justify-center gap-3 overflow-x-auto pb-4 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${
                                activeCategory === cat
                                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20 scale-105"
                                    : "bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link to="/shop">
                        <Button variant="secondary" size="lg" className="shadow-sm">
                            Lihat Semua Koleksi Bunga →
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Testimonials Banner */}
            <section className="bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
                    <div className="space-y-3">
                        <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Kata Pelanggan Kami
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black">
                            Ribuan Kebahagiaan Telah Terkirim 💕
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4 text-left">
                            <div className="text-amber-300 text-lg">★★★★★</div>
                            <p className="text-pink-50 text-sm leading-relaxed">
                                "Bunganya masih sangat segar pas nyampe! Kartu ucapannya ditulis rapi banget. Pacar saya suka banget sama bunganya!"
                            </p>
                            <div>
                                <p className="font-bold text-sm">Amanda R.</p>
                                <p className="text-xs text-pink-200">Surabaya</p>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4 text-left">
                            <div className="text-amber-300 text-lg">★★★★★</div>
                            <p className="text-pink-50 text-sm leading-relaxed">
                                "Pengiriman sameday cepat banget, kurang dari 3 jam udah sampai lokasi wisuda adik saya. Kualitas buketnya sangat luar biasa."
                            </p>
                            <div>
                                <p className="font-bold text-sm">Budi Santoso</p>
                                <p className="text-xs text-pink-200">Jakarta</p>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4 text-left">
                            <div className="text-amber-300 text-lg">★★★★★</div>
                            <p className="text-pink-50 text-sm leading-relaxed">
                                "Rangkaian mawar warnanya cerah dan wangi alami. Packing rapi tidak ada yang rusak. Recommended floral shop!"
                            </p>
                            <div>
                                <p className="font-bold text-sm">Clara V.</p>
                                <p className="text-xs text-pink-200">Bandung</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}