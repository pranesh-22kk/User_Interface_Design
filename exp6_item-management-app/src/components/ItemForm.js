import React, { useState } from 'react';
import './ItemForm.css';  // Corrected import for CSS in the components folder

const ItemForm = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (name === '' || description === '' || quantity <= 0) {
            setError('All fields are required and quantity must be greater than zero.');
            return;
        }

        // Check for unique item name
        const isUnique = !items.some(item => item.name === name);

        if (!isUnique) {
            setError('Item name must be unique.');
            return;
        }

        setItems([...items, { name, description, quantity }]);
        setName('');
        setDescription('');
        setQuantity(0);
        setError('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="item-form">
                <h2>Add New Item</h2>

                {error && <p className="error-message">{error}</p>}

                <div className="form-group">
                    <label htmlFor="name">Item Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Item Description</label>
                    <textarea 
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input 
                        type="number" 
                        id="quantity" 
                        value={quantity} 
                        onChange={(e) => setQuantity(parseInt(e.target.value))} 
                    />
                </div>

                <button type="submit" className="submit-button">Add Item</button>
            </form>

            <div className="item-list">
                <h3>Item List</h3>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>: {item.description} (Quantity: {item.quantity})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ItemForm;
