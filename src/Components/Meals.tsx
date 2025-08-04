import React from 'react';
import './Meals.css';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description: string;
}

interface MealsProps {
  products: Product[];
  onToggle: (id: number, checked: boolean) => void;
  onQuantityChange: (id: number, value: number) => void; 
  numberOfPeople: number;
  onPeopleChange: (value: number) => void;
}

const Meals: React.FC<MealsProps> = ({
  products,
  onToggle,
  onQuantityChange,
  numberOfPeople,
  onPeopleChange,
}) => {
  return (
    <div className="meals-wrapper">
      <h2 className="meals-heading">Meal Package Selection</h2>

      <div className="people-selector">
        <label htmlFor="people">Number of People:</label>
        <input
          type="number"
          id="people"
          min={1}
          value={numberOfPeople}
          onChange={(e) => onPeopleChange(parseInt(e.target.value) || 1)}
        />
      </div>

      <div className="meals-grid">
        {products.map((product) => (
          <div key={product.id} className="meal-card">
            <div className="meal-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>₱{product.price} per person</p>
            </div>

            <div className="meal-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={product.quantity > 0}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    onToggle(product.id, checked);

                    
                    if (checked) {
                      onQuantityChange(product.id, numberOfPeople);
                    } else {
                      onQuantityChange(product.id, 0);
                    }
                  }}
                />
                Include this meal
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
