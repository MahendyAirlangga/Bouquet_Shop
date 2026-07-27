import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Royal Rose Bouquet",
            price: 150000,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300",
        },
        {
            id: 2,
            name: "Spring Tulip Bouquet",
            price: 200000,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=300",
        },
    ]);

    const updateQuantity = (id, delta) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = subtotal > 200000 ? 0 : 20000;
    const total = subtotal + shipping;

    return (
        <div className="max-w-7xl mx-auto py-12 px-6 space-y-8">
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900">
                Shopping Cart 🛒
            </h1>

            {/* Free Shipping Progress Indicator */}
            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between text-sm font-semibold text-pink-700">
                    <span>
                        {subtotal >= 200000
                            ? "🎉 Selamat! Anda mendapatkan Gratis Ongkir!"
                            : `Tambah Rp ${(200000 - subtotal).toLocaleString("id-ID")} lagi untuk Gratis Ongkir!`}
                    </span>
                    <span>{Math.min(100, Math.round((subtotal / 200000) * 100))}%</span>
                </div>
                <div className="w-full h-2.5 bg-pink-200/60 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (subtotal / 200000) * 100)}%` }}
                    />
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 items-start">
                {/* Cart Items List */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-16 bg-white border border-gray-100 rounded-3xl space-y-4">
                            <span className="text-5xl block">🌸</span>
                            <p className="text-gray-500 font-medium">Keranjang belanja Anda masih kosong.</p>
                            <Link to="/shop">
                                <Button>Mulai Belanja Now</Button>
                            </Link>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-5"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-gray-100"
                                />

                                <div className="flex-1 space-y-1">
                                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                                        {item.name}
                                    </h3>
                                    <p className="text-pink-600 font-bold text-base">
                                        Rp {item.price.toLocaleString("id-ID")}
                                    </p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="px-2.5 py-1 text-gray-600 hover:bg-gray-200 font-bold"
                                            >
                                                -
                                            </button>
                                            <span className="px-3 font-semibold text-sm">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="px-2.5 py-1 text-gray-600 hover:bg-gray-200 font-bold"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-xs text-gray-400 hover:text-red-500 font-medium transition-colors ml-auto sm:ml-0"
                                        >
                                            Hapus
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Order Summary Card */}
                <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-md space-y-6">
                    <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                        Ringkasan Pesanan
                    </h2>

                    <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="font-semibold text-gray-900">
                                Rp {subtotal.toLocaleString("id-ID")}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Estimasi Ongkir</span>
                            <span className="font-semibold text-gray-900">
                                {shipping === 0 ? (
                                    <span className="text-emerald-600 font-bold">GRATIS</span>
                                ) : (
                                    `Rp ${shipping.toLocaleString("id-ID")}`
                                )}
                            </span>
                        </div>
                        <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-black text-gray-900">
                            <span>Total Tagihan</span>
                            <span className="text-pink-600 text-xl">
                                Rp {total.toLocaleString("id-ID")}
                            </span>
                        </div>
                    </div>

                    {/* Voucher Input */}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Kode Promo"
                            className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                        <Button variant="secondary" size="sm">
                            Pakai
                        </Button>
                    </div>

                    <Link to="/checkout">
                        <Button className="w-full py-3.5 shadow-pink-500/30">
                            Lanjut ke Checkout →
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}