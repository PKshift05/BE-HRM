const { getAllContract, getDetailContract, createContract, updateContract } = require("../model/contractModel")

exports.getAllContract = async(req,res) =>{
    try {
        const allContract = await getAllContract();
        if(allContract){
            return res.status(201).json(allContract);
        }
        return res.status(500).json({error: 'Failed to get all contract'});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }

}

exports.getDetailContract = async(req,res) =>{
    try {
        const id = req.params.id;
        console.log(id)
        const deltaiContract = await getDetailContract(id);

        if (deltaiContract) {
            return res.status(201).json(deltaiContract);
        }
        return res.status(500).json({error: 'Failed to get contract'});
    } catch (error) {
        return res.status(500).json({error: error.message});
        
    }
}

exports.createContract = async(req,res)=>{
    try {
        const {contract_type, position_id, employee_id, start_date, end_date, base_salary, salary_coefficient} = req.body;

        if(!contract_type || !position_id || !employee_id || !start_date || !end_date || !base_salary || !salary_coefficient) {
            return res.status(400).json({ error: 'Missing required feilds' });
        }

        const result = await createContract(contract_type, position_id, employee_id, start_date, end_date, base_salary, salary_coefficient);

        if(result){
            return res.status(201).json(result);
        }

        return res.status(500).json({error: 'Failed to create contract'});


    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

exports.updateContract = async (req,res) => {
    try {
        const {contract_type, position_id, end_date, base_salary, salary_coefficient, is_active} = req.body

        const id = req.params.id

        if (!contract_type || !position_id || !end_date || !base_salary || !salary_coefficient || !is_active){
            return res.status(400).json({ error: 'Missing required feilds' })
        }

        if (!id){
            return res.status(500).json({error: "request contract id"});
        }

        const result = await updateContract(contract_type, position_id, end_date, base_salary, salary_coefficient, is_active, id);

        if (result) {
            return res.status(201).json("Updated successfully");
        }

        return res.status(500).json({error: "Failed to update"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}