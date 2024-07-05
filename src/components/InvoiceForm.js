import React, { useState } from 'react';
import axios from 'axios';
import './InvoiceForm.css';  // Import the CSS file

const InvoiceForm = () => {
    const [invoiceData, setInvoiceData] = useState({
        customerName: '',
        items: [
            {
                serialNumber: 1,
                itemName: '',
                quantity: 0,
                unitPrice: 0,
                amount: 0,
            }
        ]
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const items = [...invoiceData.items];
        items[index][name] = value;
        setInvoiceData({ ...invoiceData, items });
    };

    const addItem = () => {
        const newItem = {
            serialNumber: invoiceData.items.length + 1,
            itemName: '',
            quantity: 0,
            unitPrice: 0,
            amount: 0,
        };
        setInvoiceData({ ...invoiceData, items: [...invoiceData.items, newItem] });
    };

    const deleteItem = (index) => {
        const items = invoiceData.items.filter((_, i) => i !== index);
        const updatedItems = items.map((item, i) => ({
            ...item,
            serialNumber: i + 1
        }));
        setInvoiceData({ ...invoiceData, items: updatedItems });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:3001/api/invoices/generate', invoiceData, {
                responseType: 'blob',
            });

            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'invoice.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (err) {
            setError('Failed to generate invoice');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <h2>Invoice Generater</h2>
        <form onSubmit={handleSubmit} className="invoice-form">
            <input
                type="text"
                name="customerName"
                value={invoiceData.customerName}
                onChange={(e) => setInvoiceData({ ...invoiceData, customerName: e.target.value })}
                placeholder="Customer Name"
                required
                className="form-input custm"
            />
            {invoiceData.items.map((item, index) => (
                <div key={index} className="form-row">
                    <input
                        type="text"
                        name="itemName"
                        value={item.itemName}
                        onChange={(e) => handleChange(index, e)}
                        placeholder="Item Name"
                        required
                        className="form-input"
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={item.quantity}
                        onChange={(e) => handleChange(index, e)}
                        placeholder="Quantity"
                        required
                        className="form-input"
                    />
                    <input
                        type="number"
                        name="unitPrice"
                        value={item.unitPrice}
                        onChange={(e) => handleChange(index, e)}
                        placeholder="Unit Price"
                        required
                        className="form-input"
                    />
                    <button type="button" onClick={() => deleteItem(index)} className="delete-button">Delete</button>
                </div>
            ))}
            <button type="button" onClick={addItem} className="add-button">Add Item</button>
            <button type="submit" disabled={loading} className="submit-button">
                {loading ? 'Generating...' : 'Generate Invoice'}
            </button>
            {error && <p className="error-message">{error}</p>}
        </form>
        </>
    );
};

export default InvoiceForm;
