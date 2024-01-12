const express = require('express');
const EmployeeSchema = require('../schema');

const router = express.Router();


/**
 * Route to retrieve all employees from the database.
 */
router.get('/', async (request, response) => {
    try {
        const data = await EmployeeSchema.find();
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ error: '' + error });
    }
});



/**
 * Route to retrieve an employee by email from the database.
 */
router.get('/:email', async (request, response) => {
    try {

        const { email } = request.params;

        const findEmployee = await EmployeeSchema.findOne({ email });

        if (!findEmployee) {
            return response.status(404).json({ error: 'Employee not found' });
        }

        response.status(200).json(findEmployee);

    } catch (error) {
        response.status(500).json({ error: '' + error });
    }
});


/**
 * Route to add a new employee to the database.
 */
router.post('/add', async (req, res) => {
    const { name, age, email, address } = req.body;
    const data = { name, age, email, address };

    try {

        // Checking if the email already exists in the database
        const existingEmployee = await EmployeeSchema.findOne({ email });

        // if already there is an employee with this email then return from here and
        // put the status code as 401 conflict
        if (existingEmployee) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const newEmployee = new EmployeeSchema(data);
        const savedEmployee = await newEmployee.save();

        res.status(201).json({ message: 'user added' });

    } catch (error) {
        res.status(500).json({ error: '' + error });
    }
});


/**
 * Route to delete an employee by email from the database.
 */
router.delete('/:email', async (req, res) => {
    try {

        const { email } = req.params;

        // Find the employee with the specified email
        const existingEmployee = await EmployeeSchema.findOne({ email }).exec();

        if (!existingEmployee) {
            return res.status(404).json({ message: 'employee not found' });
        }

        const ans = await EmployeeSchema.deleteOne({ email });
        res.status(200).json({ message: 'employees deleted :- ' + ans.deletedCount });

    } catch (error) {
        res.status(500).json(error);
    }
});



/**
 * Route to update an employee by email in the database.
 */
router.put('/update/:email', async (req, res) => {
    try {
        const { email } = req.params;

        // Check if the employee with the specified email exists
        const existingEmployee = await EmployeeSchema.findOne({ email });

        if (!existingEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        // Update the employee fields if provided in the request body
        if (req.body.name) {
            existingEmployee.name = req.body.name;
        }

        if (req.body.age) {
            existingEmployee.age = req.body.age;
        }

        if (req.body.email) {
            existingEmployee.email = req.body.email;
        }

        if (req.body.address) {
            existingEmployee.address = req.body.address;
        }

        // Save the updated employee to the database
        await existingEmployee.save();

        return res.status(200).json({ message: 'Employee updated', updatedEmployee: existingEmployee });
    } catch (error) {
        console.error('Error updating employee:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


module.exports = router;