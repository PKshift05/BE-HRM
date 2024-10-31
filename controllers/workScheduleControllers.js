const { create_work_schedule, update_work_schedule, delete_work_schedule,get_work_schedule } = require("../model/workScheduleModel");

exports.create_work_schedule = async (req,res) => {
    try {
        const employee_id = req.params.id
        const {date, id} = req.body
        
        
        const result = await create_work_schedule(employee_id,date,id);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to get data ' });
        

    } catch (error) {
        return res.status(500).json({ error: error.message });
        
    }
}

exports.update_work_schedule = async (req,res) => {
    try {
        const {schedule_id, shift_id} = req.body
        
        const result = await update_work_schedule(shift_id,schedule_id);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to get data ' });
        

    } catch (error) {
        return res.status(500).json({ error: error.message });
        
    }
}


exports.delete_work_schedule = async (req,res) => {
    try {
        const schedule_id = req.params;
        const result = await delete_work_schedule(schedule_id);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to get data ' });
        

    } catch (error) {
        return res.status(500).json({ error: error.message });
        
    }
}


exports.get_work_schedule = async (req,res) => {
    try {
        const {employee_id,date_start, date_end} = req.query
        console.log(employee_id,date_start,date_end);
        const result = await get_work_schedule(employee_id,date_start,date_end);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to get data ' });
        

    } catch (error) {
        return res.status(500).json({ error: error.message });
        
    }
}