import Button from "../components/Button";
import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-7xl mx-auto py-16 px-6 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-pink-600 text-sm font-extrabold uppercase tracking-widest">
                    Hubungi Kami
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-gray-900">
                    Kami Siap Membantu Anda 💌
                </h1>
                <p className="text-gray-500 text-base">
                    Punya pertanyaan seputar rangkaian bunga custom atau pengiriman instan? Hubungi tim florist kami.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 items-start">
                {/* Contact Information Cards */}
                <div className="space-y-6">
                    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-2xl text-pink-600 shrink-0">
                            📍
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Alamat Galeri</h3>
                            <p className="text-gray-600 text-sm mt-1">
                                Jl. Raya Mawar No. 88, Surabaya, Jawa Timur, Indonesia
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-2xl text-rose-600 shrink-0">
                            📞
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Telepon / WA</h3>
                            <p className="text-gray-600 text-sm mt-1">+62 812-3456-7890</p>
                            <p className="text-xs text-gray-400 mt-0.5">Respon cepat 08:00 - 21:00 WIB</p>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl text-amber-600 shrink-0">
                            ✉️
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Email Support</h3>
                            <p className="text-gray-600 text-sm mt-1">support@bloomcraft.com</p>
                        </div>
                    </div>
                </div>

                {/* Form Container */}
                <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-8 shadow-md">
                    {submitted ? (
                        <div className="text-center py-12 space-y-4">
                            <span className="text-5xl block">🎉</span>
                            <h2 className="text-2xl font-bold text-gray-900">Pesan Anda Telah Terkirim!</h2>
                            <p className="text-gray-500 text-sm max-w-md mx-auto">
                                Tim Florist kami akan segera menghubungi Anda kembali melalui WhatsApp atau Email.
                            </p>
                            <Button onClick={() => setSubmitted(false)} variant="secondary">
                                Kirim Pesan Lain
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                                Form Konsultasi & Pesan
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Nama Anda</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Budi Santoso"
                                        className="w-full border border-gray-200 rounded-xl p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email / No WhatsApp</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="08123456789 atau email@domain.com"
                                        className="w-full border border-gray-200 rounded-xl p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Subjek Pesan</label>
                                <input
                                    type="text"
                                    placeholder="Contoh: Tanya Rangkaian Bunga Pernikahan"
                                    className="w-full border border-gray-200 rounded-xl p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Pesan Anda</label>
                                <textarea
                                    required
                                    rows="5"
                                    placeholder="Tuliskan detail pertanyaan atau buket custom yang Anda inginkan..."
                                    className="w-full border border-gray-200 rounded-xl p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full shadow-pink-500/30">
                                🚀 Kirim Pesan Sekarang
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}