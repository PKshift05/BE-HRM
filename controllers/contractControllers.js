const { getAllContract, getDetailContract } = require("../model/contractModel")

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