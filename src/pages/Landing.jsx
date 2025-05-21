import { useEffect, useState } from 'react';

const categories = [
  'Electronics', 'Fashion', 'Home', 'Toys', 'Books', 'Beauty', 'Sports', 'Automotive'
];

const products = [
  { id: 1, name: 'Wireless Earbuds', price: '$39.99', image: 'https://media.istockphoto.com/id/1059154330/photo/boombox.jpg?s=612x612&w=0&k=20&c=AYwVrPpREeFXXP0j8rC8R3eF_9WUVghBXPndGqZYSJw=' },
  { id: 2, name: 'Smart Watch', price: '$59.99', image: 'https://media.istockphoto.com/id/1059154330/photo/boombox.jpg?s=612x612&w=0&k=20&c=AYwVrPpREeFXXP0j8rC8R3eF_9WUVghBXPndGqZYSJw=' },
  { id: 3, name: 'Gaming Mouse', price: '$29.99', image: 'https://media.istockphoto.com/id/1059154330/photo/boombox.jpg?s=612x612&w=0&k=20&c=AYwVrPpREeFXXP0j8rC8R3eF_9WUVghBXPndGqZYSJw=' },
  { id: 4, name: 'Bluetooth Speaker', price: '$49.99', image: 'https://media.istockphoto.com/id/1059154330/photo/boombox.jpg?s=612x612&w=0&k=20&c=AYwVrPpREeFXXP0j8rC8R3eF_9WUVghBXPndGqZYSJw=' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">MyShop</div>
          <input
            type="text"
            placeholder="Search products..."
            className="border rounded-md px-4 py-1 w-1/2"
          />
          <div className="space-x-4">
            <button>Wishlist</button>
            <button>Cart</button>
            <button>Profile</button>
          </div>
        </div>
      </header>

      {/* Category Slider */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto whitespace-nowrap">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="inline-block bg-white rounded-full px-4 py-2 shadow text-sm mr-3 mb-2 cursor-pointer hover:bg-blue-100"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Product List */}
      <section className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
                <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
                <p className="text-blue-600 font-bold">{product.price}</p>
                <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between">
          <div>
            <h4 className="font-bold">About Us</h4>
            <p className="text-sm">We bring you the best deals and quality products.</p>
          </div>
          <div>
            <h4 className="font-bold">Links</h4>
            <ul className="text-sm space-y-1">
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Follow Us</h4>
            <p className="text-sm">Social media icons here</p>
          </div>
        </div>
        <div className="text-center text-xs mt-4">&copy; 2025 MyShop. All rights reserved.</div>
      </footer>
    </div>
  );
}
