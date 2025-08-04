
import { useEffect, useState } from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import Venue from './Components/Venue';
import AddsOn from './Components/AddsOn';
import Meals from './Components/Meals';

import img1 from './assets/conference room.jpg';
import img2 from './assets/auditorium.jpg';
import img3 from './assets/presentation room.jpg';
import img4 from './assets/Large Meeting Room.jpg';
import img5 from './assets/small meeting room.jpg';
import img6 from './assets/projector.jpg';
import img7 from './assets/speaker.jpg';
import img8 from './assets/microphone.jpg'; 
import img9 from './assets/whiteboard.jpg';
import img10 from './assets/signage.jpg';

function App() {
  const [showProduct, setShowProduct] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const [activeTab, setActiveTab] = useState<'venue' | 'addons' | 'meals'>('venue');

  const [products, setProducts] = useState([
    { id: 1, title: 'Conference Room', imgURL: img1, price: 1000, quantity: 0, category: 'venue', description: '(Capacity:15)' },
    { id: 2, title: 'Auditorium', imgURL: img2, price: 1500, quantity: 0, category: 'venue', description: '(Capacity:200)' },
    { id: 3, title: 'Mini Hall', imgURL: img3, price: 1200, quantity: 0, category: 'venue', description: '(Capacity:50)' },
    { id: 4, title: 'Open Garden', imgURL: img4, price: 1800, quantity: 0, category: 'venue', description: '(Capacity:10)' },
    { id: 5, title: 'Small Meeting Room', imgURL: img5, price: 1800, quantity: 0, category: 'venue', description: '(Capacity:5)' },

    { id: 6, title: 'Projector Rental', imgURL: img6, price: 300, quantity: 0, category: 'addons', description: 'High-quality digital projectors for presentations' },
    { id: 7, title: 'Coffee Station', imgURL: img7, price: 200, quantity: 0, category: 'addons', description: 'Professional audio speakers for clear sound' },
    { id: 8, title: 'Whiteboard & Markers', imgURL: img8, price: 100, quantity: 0, category: 'addons', description: 'Wireless microphones for speakers' },
    { id: 9, title: 'Microphone Set', imgURL: img9, price: 150, quantity: 0, category: 'addons', description: 'Large whiteboards for brainstorming sessions' },
    { id: 10, title: 'Custom Signage', imgURL: img10, price: 150, quantity: 0, category: 'addons', description: 'Visible and professional signage to guide guests and highlight key event areas' },

    { id: 11, title: 'BreakFast', price: 50, quantity: 0, category: 'meals', description: 'Chilled refreshing tea' },
    { id: 12, title: 'High Tea', price: 120, quantity: 0, category: 'meals', description: 'Rice with meat and vegetables' },
    { id: 13, title: 'Lunch', price: 20, quantity: 0, category: 'meals', description: '500ml bottled water' },
    { id: 14, title: 'Dinner', price: 20, quantity: 0, category: 'meals', description: '500ml bottled water' },
  ]);

  const handleAdd = (id: number) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const handleMinus = (id: number) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p
      )
    );
  };

  const handleToggleMeal = (id: number, checked: boolean) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: checked ? 1 : 0 } : p
      )
    );
  };

  const handleMealQuantityChange = (id: number, value: number) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, quantity: value < 1 ? 1 : value } : p
      )
    );
  };

  useEffect(() => {
  setProducts(prev =>
    prev.map(p =>
      p.category === 'meals' && p.quantity > 0
        ? { ...p, quantity: numberOfPeople }
        : p
    )
  );
}, [numberOfPeople]);



  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const filteredProducts = products.filter(p => p.category === activeTab);

  return (
    <>
      {showProduct ? (
        <>
          <header className="navbar">
            <h1>Conference Expense Planner</h1>
            <nav>
              <button onClick={() => setActiveTab('venue')}>Venue</button>
              <button onClick={() => setActiveTab('addons')}>Adds On</button>
              <button onClick={() => setActiveTab('meals')}>Meals</button>
              <button onClick={() => setShowSummary(true)}>Show Details</button>
              <p className="total">Total: ₱{total}</p>
            </nav>
          </header>

          {showSummary && (
            <div className="summary-modal">
              <h2>Receipt</h2>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {products
                    .filter(p => p.quantity > 0)
                    .map(p => (
                      <tr key={p.id}>
                        <td>{p.title}</td>
                        <td>₱{p.price}</td>
                        <td>{p.quantity}</td>
                        <td>₱{p.price * p.quantity}</td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}><strong>Total</strong></td>
                    <td><strong>₱{total}</strong></td>
                  </tr>
                </tfoot>
              </table>
              <button onClick={() => setShowSummary(false)}>Close</button>
            </div>
          )}

          <div className="app-container">
            {activeTab === 'venue' && (
              <Venue products={filteredProducts} onAdd={handleAdd} onMinus={handleMinus} />
            )}
            {activeTab === 'addons' && (
              <AddsOn products={filteredProducts} onAdd={handleAdd} onMinus={handleMinus} />
            )}
            {activeTab === 'meals' && (
              <Meals
  products={filteredProducts}
  onToggle={handleToggleMeal}
  onQuantityChange={handleMealQuantityChange}
  numberOfPeople={numberOfPeople}
  onPeopleChange={setNumberOfPeople}
/>
            )}
          </div>
        </>
      ) : (
        <LandingPage onGetStarted={() => setShowProduct(true)} />
      )}
    </>
  );
}

export default App;

