import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    const relatedProducts = [
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
    ];

    return (
        <div className="max-w-7xl mx-auto py-10 px-6 space-y-16">
            {/* Breadcrumb Navigation */}
            <nav className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Link to="/" className="hover:text-pink-600">Home</Link>
                <span>/</span>
                <Link to="/shop" className="hover:text-pink-600">Shop</Link>
                <span>/</span>
                <span className="text-gray-900 font-bold">Royal Rose Bouquet</span>
            </nav>

            {/* Product Detail Main Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Product Image */}
                <div className="space-y-4">
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-pink-100 bg-gray-50 aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800"
                            alt="Royal Rose Bouquet"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Product Information */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Best Seller 🌹
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black text-gray-900">
                            Royal Rose Bouquet
                        </h1>

                        <div className="flex items-center gap-3 text-sm pt-1">
                            <div className="flex items-center text-amber-400 font-bold">
                                ★★★★★ <span className="text-gray-800 ml-1">4.9</span>
                            </div>
                            <span className="text-gray-300">•</span>
                            <span className="text-gray-500 font-medium">128 Reviews</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-emerald-600 font-semibold">In Stock</span>
                        </div>
                    </div>

                    <div className="text-3xl font-black text-pink-600">
                        Rp 150.000
                    </div>

                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Rangkaian mawar merah pilihan berkualitas tinggi yang ditata indah dengan balutan kertas wrapping mewah. Cocok untuk hadiah ulang tahun, ungkapan cinta, maupun merayakan momen spesial.
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-gray-100 text-xs text-gray-600 font-medium">
                        <div className="flex items-center gap-2">
                            <span>✅ 100% Bunga Mawar Segar</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>💌 Gratis Kartu Ucapan Custom</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🎀 Pita & Wrapping Premium</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🚚 Pengiriman Instan Sameday</span>
                        </div>
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="space-y-4 pt-2">
                        <div className="flex items-center gap-4">
                            <label className="font-semibold text-gray-700 text-sm">Jumlah:</label>
                            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3.5 py-2 text-gray-600 hover:bg-gray-200 font-bold text-lg"
                                >
                                    -
                                </button>
                                <span className="px-5 font-bold text-gray-900">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3.5 py-2 text-gray-600 hover:bg-gray-200 font-bold text-lg"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link to="/cart" className="flex-1">
                                <Button size="lg" className="w-full shadow-pink-500/30">
                                    🛒 Add to Cart
                                </Button>
                            </Link>
                            <Link to="/checkout" className="flex-1">
                                <Button size="lg" variant="secondary" className="w-full">
                                    ⚡ Buy Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Information Tabs */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-6">
                <div className="flex border-b border-gray-100 gap-8">
                    <button
                        onClick={() => setActiveTab("description")}
                        className={`pb-4 font-bold text-base transition-colors border-b-2 ${
                            activeTab === "description"
                                ? "border-pink-600 text-pink-600"
                                : "border-transparent text-gray-400 hover:text-gray-600"
                        }`}
                    >
                        Deskripsi Produk
                    </button>
                    <button
                        onClick={() => setActiveTab("care")}
                        className={`pb-4 font-bold text-base transition-colors border-b-2 ${
                            activeTab === "care"
                                ? "border-pink-600 text-pink-600"
                                : "border-transparent text-gray-400 hover:text-gray-600"
                        }`}
                    >
                        Cara Perawatan Bunga
                    </button>
                </div>

                {activeTab === "description" ? (
                    <div className="text-gray-600 space-y-3 text-sm leading-relaxed">
                        <p>
                            Buket Royal Rose terdiri dari 12 tangkai mawar segar pilihan yang dipetik langsung pada pagi hari. Setiap tangkai dibersihkan durinya secara cermat dan dirangkai oleh florist profesional kami.
                        </p>
                        <p>
                            Sudah termasuk kartu ucapan custom (tulis pesan Anda pada catatan saat checkout) serta pita satin elegan.
                        </p>
                    </div>
                ) : (
                    <div className="text-gray-600 space-y-3 text-sm leading-relaxed">
                        <p>1. Potong tangkai bagian bawah secara miring sekitar 1-2 cm sebelum dimasukkan ke dalam vas air bersih.</p>
                        <p>2. Ganti air vas setiap 1-2 hari sekali dan hindari meletakkan bunga di bawah paparan sinar matahari langsung.</p>
                    </div>
                )}
            </div>

            {/* Related Products */}
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Produk Serupa yang Mungkin Anda Suka</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}