import React, { useState } from 'react';
import './Add.scss'
import axios from 'axios';


function Add() {

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

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handle nested address object
        if (name.startsWith('address.')) {
            const addressField = name.split('.')[1];
            setFormData(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [addressField]: value
                }
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const submitForm = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/add', formData)
            .then(response => {
                if (response.status === 201) {
                    alert('Form submitted successfully:', response.data)
                    console.log('Form submitted successfully:', response.data);
                    setFormData({
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
                } else {
                    alert('' + response.data);
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    }

    return (
        <div className='form-data'>
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

                <button>submit</button>
            </form>
        </div>
    );
};

export default Add