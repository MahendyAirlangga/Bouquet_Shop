export default function Button({
    children,
    onClick,
    className = "",
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false
}) {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
        primary: "bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5",
        secondary: "bg-white text-pink-600 border-2 border-pink-200 hover:border-pink-500 hover:bg-pink-50 shadow-sm",
        outline: "bg-transparent text-gray-700 border border-gray-200 hover:border-pink-400 hover:text-pink-600 hover:bg-pink-50/50",
        dark: "bg-gray-900 text-white hover:bg-gray-800 shadow-md shadow-gray-900/20 hover:-translate-y-0.5"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg font-bold"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
        >
            {children}
        </button>
    );
}