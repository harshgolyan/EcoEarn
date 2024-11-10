import React from 'react';

export default function ImageTextComponent() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 space-y-8 md:space-y-0">
      {/* Left side: Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 md:m-8">
        <img
          src="bag.jpg" 
          alt="Description"
          className="w-full h-auto max-h-60 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right side: Write-up */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold text-green-900 uppercase">Eco-Friendly Products</h2>
        <p className="mt-4 text-gray-700">
          We create products that are not only sustainable but also stylish and functional. Our eco-friendly bags are designed to help reduce plastic waste and promote a greener, cleaner planet. Join us in making a positive impact with every purchase.
        </p>
        <p className="mt-4 text-gray-700">
          Our commitment to sustainability goes beyond just the products we offer. We strive to incorporate green practices in every aspect of our business, from packaging to shipping.
        </p>
      </div>
    </div>
  );
}
