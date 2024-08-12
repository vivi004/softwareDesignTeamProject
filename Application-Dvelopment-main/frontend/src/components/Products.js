import React, { useEffect, useState } from 'react';
import PaymentForm from './PaymentForm';
import '../pages/css/Products.css';
import p1 from '../pages/p1.jpg';
import p2 from '../pages/p2.jpg';
import p3 from '../pages/p3.jpg'; 
import p4 from '../pages/p4.jpg'; 
import p5 from '../pages/p5.jpg'; 
import p6 from '../pages/p6.jpg'; 
import p7 from '../pages/p7.jpg';
import p8 from '../pages/p8.jpg'; 
import p9 from '../pages/p9.jpg'; 
import axios from 'axios';

const Products = ({ addToCart }) => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 'p001', image: p1, name: 'Red Dress', price: '$50', size: 'M', color: 'Red', type: 'Rent', duration: 'Day' },
    { id: 'p002', image: p2, name: 'Blue Jeans', price: '$40', size: 'L', color: 'Blue', type: 'Swap', duration: 'Week' },
    { id: 'p003', image: p3, name: 'Green Jacket', price: '$60', size: 'XL', color: 'Green', type: 'Rent', duration: 'Month' },
    { id: 'p004', image: p4, name: 'Yellow Top', price: '$30', size: 'S', color: 'Yellow', type: 'Rent', duration: 'Day' },
    { id: 'p005', image: p5, name: 'Black Shoes', price: '$80', size: '42', color: 'Black', type: 'Swap', duration: 'Week' },
    { id: 'p006', image: p6, name: 'White Hat', price: '$20', size: 'One Size', color: 'White', type: 'Rent', duration: 'Month' },
    { id: 'p007', image: p7, name: 'Purple Scarf', price: '$25', size: 'One Size', color: 'Purple', type: 'Rent', duration: 'Day' },
    { id: 'p008', image: p8, name: 'Orange Skirt', price: '$35', size: 'M', color: 'Orange', type: 'Swap', duration: 'Week' },
    { id: 'p009', image: p9, name: 'Pink Blouse', price: '$45', size: 'L', color: 'Pink', type: 'Rent', duration: 'Month' },
    // ... other products
  ];

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowPaymentForm(true);
  };

  useEffect(() => {
    const fetchData= async () =>{
      try{
        const token=localStorage.getItem("token");
        const config={
          headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        };
        const response= await axios.get(
          "http://127.0.0.1:8080/api/product/getAllProducts",
          config
        );
      }catch(error){
        console.error(error);
      }
    };
    fetchData();
  },[]);
  return (
    <div className="products-container">
      <h1 className="products-heading">Products</h1>

      {!showPaymentForm ? (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              {product.type === 'Rent' && <p className="product-price">{product.price}</p>}
              <p className="product-size">Size: {product.size}</p>
              <p className="product-color">Color: {product.color}</p>
              <p className="product-type">Type: {product.type}</p>
              <p className="product-duration">Duration: {product.duration}</p>
              {product.type === 'Rent' ? (
                <>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                  <button onClick={() => handleBuyNow(product)}>Buy</button>
                </>
              ) : (
                <button>Swap</button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <PaymentForm
          amount={selectedProduct ? selectedProduct.price : ''}
          onPayment={() => setShowPaymentForm(false)}
        />
      )}
    </div>
  );
};

export default Products;