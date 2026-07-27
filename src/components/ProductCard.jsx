import Button from "./Button";
import { Link } from "react-router-dom";

export default function ProductCard({
    id,
    image,
    name,
    price,
    rating = 4.9,
    tag = "Best Seller"
}) {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1">
            {/* Image Container with Overlay Badge & Wishlist Button */}
            <div className="relative overflow-hidden aspect-square bg-gray-100">
                {tag && (
                    <span className="absolute top-3 left-3 z-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {tag}
                    </span>
                )}
                
                <button
                    type="button"
                    className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-pink-500 hover:bg-white shadow-sm transition-all active:scale-90"
                    title="Add to Wishlist"
                >
                    ♥
                </button>

                <Link to={`/product/${id || 1}`}>
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </Link>
            </div>

            {/* Product Info */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold mb-1">
                        <span>★</span>
                        <span>{rating}</span>
                        <span className="text-gray-400 font-normal ml-1">(48 Reviews)</span>
                    </div>

                    <Link to={`/product/${id || 1}`}>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-1">
                            {name}
                        </h3>
                    </Link>
                </div>

                {/* Price and Cart Button */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-gray-50">
                    <div>
                        <span className="text-xs text-gray-400 font-medium block">Price</span>
                        <span className="text-xl font-black text-pink-600">
                            Rp {price}
                        </span>
                    </div>

                    <Link to="/cart">
                        <Button size="sm" className="shadow-pink-500/20">
                            + Add
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}