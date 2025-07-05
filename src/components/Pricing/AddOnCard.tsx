// components/AddOnCard.tsx
import React from 'react';

interface AddOn {
  name: string;
  price: number;
  description: string;
}

const AddOnCard: React.FC<{ addon: AddOn }> = ({ addon }) => {
  return (
    <div className="text-center p-6 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors duration-300">
      <h4 className="text-lg font-semibold text-amber-900 mb-2">{addon.name}</h4>
      <div className="text-2xl font-bold text-amber-700 mb-2">₹{addon.price.toLocaleString()}</div>
      <p className="text-sm text-amber-800">{addon.description}</p>
    </div>
  );
};

export default AddOnCard;
