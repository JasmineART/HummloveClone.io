import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-3xl font-display text-cork-800">Humm Love</h1>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-sand-100 via-cork-50 to-sage-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-display text-cork-900 mb-6">
            Sustainable Luxury
          </h2>
          <p className="text-xl md:text-2xl text-cork-700 mb-8 max-w-3xl mx-auto">
            Discover our collection of handcrafted vegan leather accessories made from natural cork.
            Beautiful, sustainable, and ethical.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Shop Collection</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-sage-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-terracotta-200 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}

function ProductCard({ name, price, image, description }) {
  return (
    <div className="card">
      <div className="aspect-square bg-gradient-to-br from-cork-200 to-sand-200 flex items-center justify-center">
        <span className="text-cork-400 text-4xl">🌿</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display text-cork-900 mb-2">{name}</h3>
        <p className="text-cork-600 mb-4 text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-cork-800">${price}</span>
          <button className="bg-cork-600 hover:bg-cork-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  const products = [
    { name: 'Cork Tote Bag', price: 89.99, description: 'Spacious and sustainable everyday bag' },
    { name: 'Cork Wallet', price: 45.99, description: 'Slim design with RFID protection' },
    { name: 'Cork Backpack', price: 129.99, description: 'Perfect for work or travel' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-display text-cork-900 text-center mb-12">Featured Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { icon: '🌱', title: 'Sustainable', description: 'Made from renewable cork harvested without harming trees' },
    { icon: '💚', title: 'Vegan', description: '100% cruelty-free and animal-friendly materials' },
    { icon: '✨', title: 'Handcrafted', description: 'Each piece is carefully crafted by skilled artisans' },
  ];

  return (
    <section className="bg-gradient-to-r from-sage-50 to-cork-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display text-cork-900 text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-display text-cork-900 mb-2">{value.title}</h3>
              <p className="text-cork-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-cork-900 text-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-display mb-4">Humm Love</h3>
            <p className="text-sand-300">
              Sustainable vegan leather boutique dedicated to bringing you beautiful, 
              eco-friendly accessories.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-display mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sand-300 hover:text-sand-100 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-sand-300 hover:text-sand-100 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sand-300 hover:text-sand-100 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-display mb-4">Connect</h4>
            <p className="text-sand-300 mb-4">Follow us on social media</p>
            <div className="flex space-x-4">
              <span className="text-2xl cursor-pointer hover:text-sand-100 transition-colors">📷</span>
              <span className="text-2xl cursor-pointer hover:text-sand-100 transition-colors">📘</span>
              <span className="text-2xl cursor-pointer hover:text-sand-100 transition-colors">🐦</span>
            </div>
          </div>
        </div>
        <div className="border-t border-sand-700 mt-8 pt-8 text-center text-sand-300">
          <p>&copy; 2025 Humm Love. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Values />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/HummloveClone.io">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={
              <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-display text-cork-900 mb-8">Products</h1>
                <p className="text-cork-700">Product catalog coming soon...</p>
              </div>
            } />
            <Route path="/about" element={
              <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-display text-cork-900 mb-8">About Us</h1>
                <p className="text-cork-700">Our story coming soon...</p>
              </div>
            } />
            <Route path="/cart" element={
              <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-display text-cork-900 mb-8">Shopping Cart</h1>
                <p className="text-cork-700">Your cart is empty.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
