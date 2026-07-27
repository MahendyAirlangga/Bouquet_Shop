import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-pink-100/60 sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Brand Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 text-2xl font-black tracking-tight group"
                >
                    <span className="text-3xl transform group-hover:rotate-12 transition-transform duration-300">🌸</span>
                    <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                        BloomCraft
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center gap-8 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`relative py-1 transition-colors duration-200 ${
                                    isActive(link.path)
                                        ? "text-pink-600 font-bold"
                                        : "text-gray-600 hover:text-pink-600"
                                }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse" />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Action Icons */}
                <div className="flex items-center gap-5">
                    <Link
                        to="/cart"
                        className="relative p-2.5 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                        title="Shopping Cart"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-extrabold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                            3
                        </span>
                    </Link>

                    <Link
                        to="/login"
                        className="p-2.5 bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-600 rounded-xl transition-all duration-200 hover:scale-105"
                        title="Account Login"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </Link>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-pink-600 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-pink-100 px-6 py-4 space-y-3 animate-fadeIn">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-2 text-base font-semibold ${
                                isActive(link.path) ? "text-pink-600" : "text-gray-600"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}