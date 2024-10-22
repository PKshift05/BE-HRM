const { getAllEmployee, getSinglEmployee, addEmployee, updateEmploy, searchEmployee } = require('../model/employeeModel')

exports.getAllEmployee = async (req, res) => {
    const allEmployee = await getAllEmployee()
    return res.status(201).json(allEmployee);
}

exports.getDetailEmployee = async (req, res) => {
    const id = req.params.id;
    const detailEmployee = await getSinglEmployee(id);
    return res.status(201).json(detailEmployee);
}

exports.addEmployee = async (req, res) => {
    try {
        const { last_name, first_name, date_of_birth, hometown, phone_number, email, id_card } = req.body
        if (!last_name || !first_name || !date_of_birth || !hometown || !phone_number || !email || !id_card) {
            return res.status(400).json({ error: 'Missing required feilds' });
        }

        const result = await addEmployee(last_name, first_name, date_of_birth, hometown, phone_number, email, id_card);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to add employee' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.updateEmploy = async (req, res) => {
    try {
        const { last_name, first_name, date_of_birth, hometown, phone_number, email, id_card } = req.body
        const id = req.params.id;
        console.log(last_name, first_name, date_of_birth, hometown, phone_number, email, id_card, id)
        if (!last_name || !first_name || !date_of_birth || !hometown || !phone_number || !email || !id_card || !id) {
            return res.status(400).json({ error: 'Missing required feilds' });
        }

        const result = await updateEmploy(last_name, first_name, date_of_birth, hometown, phone_number, email, id_card, id);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to update employee' });

    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
}

exports.searchEmployee = async(req,res)=>{
    try {
        const stringSearch = req.params.string;
        
        if (!stringSearch) {
            const result = await getAllEmployee();
            console.log('run')
            if (result){
                return res.status(201).json(result);
            }
        } else {
            const result = await searchEmployee(stringSearch);
            if (result){
                return res.status(201).json(result);
            }
        }
        return res.status(500).json({ error: 'Không tìm thấy kết quả phù hợp' });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}