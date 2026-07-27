import ProductCard from "../components/ProductCard";

export default function Shop() {
    const products = [
        {
            id: 1,
            name: "Rose Bouquet",
            price: "150.000",
            image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700",
        },
        {
            id: 2,
            name: "Tulip Bouquet",
            price: "200.000",
            image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=700",
        },
        {
            id: 3,
            name: "Sunflower",
            price: "180.000",
            image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=700",
        },
        {
            id: 4,
            name: "Lily Dream",
            price: "220.000",
            image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=700",
        },
        {
            id: 5,
            name: "Orchid Pot",
            price: "350.000",
            image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=700",
        },
        {
            id: 6,
            name: "Daisy Bunch",
            price: "120.000",
            image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=700",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold text-center mb-4">Our Flower Catalog</h1>
            <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
                Explore our beautiful, hand-picked fresh flower arrangements perfect for any occasion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
