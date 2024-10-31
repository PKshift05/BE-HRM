const { getAllDepartment, updateDepartment, getDetailDepartment } = require("../model/departmentModel")

const getAllDepartment = async(req,res)=>{
    try {
        const result = await getAllDepartment()

        if (result){
            return res.status(201).json(result);
        }

        return res.status(500).json({error: "Failed to get data"})
    } catch (error) {
        return res.status(500).json({error: error.message})

    }
}

const getDetailDepartment = async(req,res)=>{
    try {
        const department_id = req.params.id
        const result = await getDetailDepartment(department_id)

        if (result){
            return res.status(201).json(result);
        }

        return res.status(500).json({error: "Failed to get data"})
    } catch (error) {
        return res.status(500).json({error: error.message})

    }
}

const updateDepartment = async(req,res)=>{
    try {
        const {department_name, address, department_phone} = req.body;
        const department_id = req.params.id;

        const result = await updateDepartment(department_name, address, department_phone,department_id);

        if(result){
            return res.status(201).json(result);
        }
        
        return res.status(500).json({error: "Failed to update"});
    } catch (error) {
        return res.status(500).json({error: error.message}); 
    }
}

module.exports = {getAllDepartment,getDetailDepartment,updateDepartment}