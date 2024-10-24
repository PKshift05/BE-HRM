
const { getAllPosition, getDetailPosition, createPosition } = require("../model/positionModel")

exports.getAllPosition = async(req,res)=>{
    try {
        const result = await getAllPosition();

        if (result){
            return res.status(201).json(result);
        }

        return res.status(500).json({error: "Faild to get all data"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}


exports.getDetailPosition = async(req,res)=>{
    try {
        const position_id = req.params.id;

        const result = await getDetailPosition(position_id);

        if(result){
            return res.status(201).json(result);
        }

        return res.status(500).json({error: "Faild to get data"});
    } catch (error) {
        return res.status(500).json({error: error.message});
        
    }
}


exports.createPostion = async(req,res) =>{
    try{
        const {position_name, department_id} = req.body;

        if(!position_name || !department_id){
            return res.status(400).json({ error: 'Missing required feilds' });
        }

        const result = await createPosition(position_name,department_id);
        

        if(result){
            return res.status(201).json("created suscessfully");
        }

        return res.status(500).json({error: "Failed to create position"});

    }catch(error){
        return res.status(500).json({error: error.message})
    }
}