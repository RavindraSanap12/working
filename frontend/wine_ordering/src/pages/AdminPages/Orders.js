import React, { useState, useEffect, useRef, useCallback } from 'react';
import LoginLogoutNavbar from '../../components/Layout/RestaurantLogoutNavbar';
import Footer from '../../components/Layout/Footer';

function Orders() {
    const [selectedItem, setSelectedItem] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);

    const handleItemChange = (event) => {
        const value = event.target.value;
        if (value) { // Open the popup only if an item is selected
            setSelectedItem(value);
            setIsPopupOpen(true);
        } else {
            setSelectedItem(''); // Reset selected item if default option is chosen
            setIsPopupOpen(false);
        }
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedItem(''); // Reset selected item when popup closes
    };

    const handleClickOutside = useCallback((event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            closePopup();
        }
    }, []); // Empty dependency array to ensure the function doesn't change

    useEffect(() => {
        if (isPopupOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isPopupOpen, handleClickOutside]); // Include `handleClickOutside` in the dependency array

    return (
        <>
            <LoginLogoutNavbar title="Order Management" />

            <div className='ordersbody'>
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Shop Name</th>
                            <th>Items</th>
                            <th>Status</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>John's Bakery</td>
                            <td>
                                <select className="item-select" onChange={handleItemChange}>
                                    <option value="">Select an item</option>
                                    <option value="item1">Item 1</option>
                                    <option value="item2">Item 2</option>
                                    <option value="item3">Item 3</option>
                                </select>
                            </td>
                            <td>Delivered</td>
                            <td>123 Main St, </td>
                            <td>
                                <button className="invoice-button">
                                    Invoice
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>John's Bakery</td>
                            <td>
                                <select className="item-select" onChange={handleItemChange}>
                                    <option value="">Select an item</option>
                                    <option value="item1">Item 1</option>
                                    <option value="item2">Item 2</option>
                                    <option value="item3">Item 3</option>
                                </select>
                            </td>
                            <td>Delivered</td>
                            <td>123 Main St, disaficdsj</td>
                            <td>
                                <button className="invoice-button">
                                    Invoice
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content" ref={popupRef}>
                        <h3>Actions for {selectedItem}</h3>
                        <button onClick={closePopup}>Accepted</button>
                        <button onClick={closePopup}>Rejected</button>
                        <button onClick={closePopup}>Packed</button>
                        <button onClick={closePopup}>Out for Delivery</button>
                        <button onClick={closePopup} className="close-popup">
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default Orders;
