const { getAllDepartment, updateDepartment, getDetailDepartment } = require("../model/departmentModel")

exports.getAllDepartment = async(req,res)=>{
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

exports.getDetailDepartment = async(req,res)=>{
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

exports.updateDepartment = async(req,res)=>{
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