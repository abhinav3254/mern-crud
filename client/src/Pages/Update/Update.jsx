import React, { useState, useEffect } from 'react';
import './Update.scss';
import axios from 'axios';

function Update({ selectedEmployee }) {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        address: {
            street: '',
            city: '',
            state: '',
            country: '',
            zip: ''
        }
    });

    // Use useEffect to update form data when selectedEmployee changes
    useEffect(() => {
        console.log('Selected Employee:', selectedEmployee);
        if (selectedEmployee) {
            setFormData({
                name: selectedEmployee.name || '',
                age: selectedEmployee.age || '',
                email: selectedEmployee.email || '',
                address: {
                    street: selectedEmployee.address?.street || '',
                    city: selectedEmployee.address?.city || '',
                    state: selectedEmployee.address?.state || '',
                    country: selectedEmployee.address?.country || '',
                    zip: selectedEmployee.address?.zip || ''
                }
            });
        }
    }, [selectedEmployee]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handle nested address object
        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1];
            setFormData((prevState) => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [addressField]: value
                }
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const submitForm = (e) => {
        e.preventDefault();

        // Your form submission logic here
        // You can use the formData state to send data to your server using axios or any other method
    };

    return (
        <div className="form-data">
            <form onSubmit={submitForm}>
                <input
                    placeholder='Name'
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    placeholder='Age'
                    type='text'
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                />

                <input
                    placeholder='Email'
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    placeholder='Street'
                    type='text'
                    name='address.street'
                    value={formData.address.street}
                    onChange={handleChange}
                />

                <input
                    placeholder='City'
                    type='text'
                    name='address.city'
                    value={formData.address.city}
                    onChange={handleChange}
                />

                <input
                    placeholder='State'
                    type='text'
                    name='address.state'
                    value={formData.address.state}
                    onChange={handleChange}
                />

                <input
                    placeholder='Country'
                    type='text'
                    name='address.country'
                    value={formData.address.country}
                    onChange={handleChange}
                />

                <input
                    placeholder='Zip'
                    type='text'
                    name='address.zip'
                    value={formData.address.zip}
                    onChange={handleChange}
                />

                <button type='submit'>update</button>
            </form>
        </div>
    );
}

export default Update;
