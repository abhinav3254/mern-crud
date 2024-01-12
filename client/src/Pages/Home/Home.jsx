import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios';

function Home() {

    // State to store the API data
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    })

    // api call for home
    const getEmployees = () => {
        axios.get('http://localhost:8080')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => console.log(error));
    }

    // Fetch data when the component mounts
    useEffect(() => {
        getEmployees();
    }, []);


    return (
        <div>
            {/* Map through the list of employees and render each employee card */}
            {employees.map(employee => (
                <div key={employee._id} className="card">
                    <div className="row">
                        <p>{employee.name}</p>
                        <p>{employee.email}</p>
                    </div>
                    <div className="row">
                        <p>{employee.address.street}</p>
                        <p>{employee.address.city}</p>
                    </div>
                    <div className="row">
                        <p>{employee.address.country}</p>
                        <p>{employee.address.zip}</p>
                    </div>
                    <p>{employee.registerDate}</p>
                    <div className="row">
                        <button>Delete</button>
                        <button>Update</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home