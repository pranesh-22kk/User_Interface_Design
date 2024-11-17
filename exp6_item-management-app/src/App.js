import React from 'react';
import ItemForm from './components/ItemForm';  // Correct import for the ItemForm component
import './App.css';  // Optional global styles

function App() {
    return (
        <div className="App">
            <header className="app-header">
                <h1>Inventory Management System</h1>
                <p>We can Add, manage, and track items in our inventory.</p>
            </header>
            <main>
                <ItemForm />  {/* Rendering the ItemForm component */}
            </main>
        </div>
    );
}

export default App;

