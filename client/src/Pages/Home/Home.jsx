import React, { useEffect } from 'react'
import './Home.scss'
import axios from 'axios';

function Home() {

    useEffect(() => {
        getEmployees();
    })

    // api call for home
    const getEmployees = () => {
        axios.get('http://localhost:8080')
            .then(data => console.log(data.data))
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="card">
                <div className="row">
                    <p>John Doe</p>
                    <p>john.doe@example.com</p>
                </div>
                <div className="row">
                    <p>123 Main St</p>
                    <p>Cityville</p>
                </div>
                <div className="row">
                    <p>USA</p>
                    <p>12345</p>
                </div>
                <p>2024-01-12T13:25:32.042+00:00</p>
                <div className="row">
                    <button>delete</button>
                    <button>update</button>
                </div>
            </div>
        </div>
    )
}

export default Home