import Button from "../components/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState("qris");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="max-w-xl mx-auto py-20 px-6 text-center space-y-6">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-4xl mx-auto text-pink-600 animate-bounce">
                    🌸
                </div>
                <h1 className="text-3xl font-black text-gray-900">Pesanan Berhasil Dibuat!</h1>
                <p className="text-gray-600 leading-relaxed text-sm">
                    Terima kasih telah berbelanja di BloomCraft. Kami akan segera merangkai dan mengirimkan bunga segar Anda.
                </p>
                <Link to="/">
                    <Button size="lg" className="mt-4">Kembali ke Beranda</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto py-12 px-6 space-y-8">
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900">
                Checkout Pesanan 📋
            </h1>

            <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-10 items-start">
                {/* Form Information */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Alamat Pengiriman */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-5">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
                            <span>📍</span> Informasi Pengiriman
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Nama Lengkap</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Contoh: Budi Santoso"
                                    className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Nomor WhatsApp</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="081234567890"
                                    className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Alamat Lengkap Pengiriman</label>
                            <textarea
                                required
                                rows="3"
                                placeholder="Jalan, Nomor Rumah, Kecamatan, Kota..."
                                className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Catatan Ucapan pada Kartu (Gratis)</label>
                            <textarea
                                rows="2"
                                placeholder="Tuliskan ucapan Anda di sini... (Contoh: Happy Birthday Sayang!)"
                                className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>
                    </div>

                    {/* Metode Pembayaran */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-5">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
                            <span>💳</span> Metode Pembayaran
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                { id: "qris", name: "QRIS Instant", icon: "📱" },
                                { id: "bca", name: "BCA Virtual Account", icon: "🏦" },
                                { id: "mandiri", name: "Mandiri VA", icon: "💳" },
                            ].map((method) => (
                                <button
                                    key={method.id}
                                    type="button"
                                    onClick={() => setPaymentMethod(method.id)}
                                    className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2 cursor-pointer ${
                                        paymentMethod === method.id
                                            ? "border-pink-500 bg-pink-50/50 shadow-md ring-2 ring-pink-400/30"
                                            : "border-gray-200 hover:border-pink-200"
                                    }`}
                                >
                                    <span className="text-2xl">{method.icon}</span>
                                    <span className="font-bold text-sm text-gray-900">{method.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Summary Card */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-md space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                        Rincian Tagihan
                    </h2>

                    <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex justify-between">
                            <span>Royal Rose Bouquet (x1)</span>
                            <span className="font-semibold text-gray-900">Rp 150.000</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Spring Tulip Bouquet (x1)</span>
                            <span className="font-semibold text-gray-900">Rp 200.000</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Ongkir Sameday</span>
                            <span className="font-bold text-emerald-600">GRATIS</span>
                        </div>
                        <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-black text-gray-900">
                            <span>Total Pembayaran</span>
                            <span className="text-pink-600 text-2xl">Rp 350.000</span>
                        </div>
                    </div>

                    <Button type="submit" className="w-full py-4 shadow-pink-500/30 text-base">
                        🔒 Buat Pesanan Sekarang
                    </Button>
                </div>
            </form>
        </div>
    );
}