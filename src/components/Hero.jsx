import Button from "./Button";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-pink-50/80 via-rose-50/40 to-white overflow-hidden py-16 lg:py-24">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100/80 border border-pink-200 rounded-full text-pink-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                        <span>✨ Fresh Hand-Crafted Bouquets</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] tracking-tight">
                        Fresh Flowers <br />
                        <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                            For Every Special Moment 🌸
                        </span>
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed font-normal">
                        Temukan berbagai kerajinan buket bunga segar berkualitas tinggi untuk ulang tahun, wisuda, pernikahan, hingga momen tak terlupakan bersama orang tersayang.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
                        <Link to="/shop">
                            <Button size="lg" className="w-full sm:w-auto shadow-pink-500/30">
                                🛒 Shop Now
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                Learn More
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="pt-8 grid grid-cols-3 gap-4 border-t border-pink-200/60 max-w-md mx-auto md:mx-0 text-center md:text-left">
                        <div>
                            <p className="font-extrabold text-xl text-gray-900">100%</p>
                            <p className="text-xs text-gray-500 font-medium">Bunga Segar</p>
                        </div>
                        <div>
                            <p className="font-extrabold text-xl text-gray-900">Same Day</p>
                            <p className="text-xs text-gray-500 font-medium">Pengiriman Cepat</p>
                        </div>
                        <div>
                            <p className="font-extrabold text-xl text-gray-900">4.9 ★</p>
                            <p className="text-xs text-gray-500 font-medium">Ribuan Review</p>
                        </div>
                    </div>
                </div>

                {/* Hero Image Section */}
                <div className="relative flex justify-center items-center">
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=800&auto=format&fit=crop&q=80"
                            alt="Fresh Flower Bouquet"
                            className="w-full max-w-lg h-[420px] object-cover"
                        />
                    </div>
                    {/* Floating Glassmorphic Card */}
                    <div className="absolute -bottom-6 -left-4 sm:left-4 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-4 max-w-xs animate-bounce-slow">
                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-2xl">
                            💐
                        </div>
                        <div>
                            <p className="font-bold text-sm text-gray-900">Premium Packaging</p>
                            <p className="text-xs text-gray-500">Gratis Kartu Ucapan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}