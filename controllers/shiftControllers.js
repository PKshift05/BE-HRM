const { create_Shift, update_Shift, delete_Shift, get_Detail_Shift, get_All_Shift } = require("../model/shiftModel");


exports.create_shift = async (req, res) => {
    try {
        const { shift_name, start_at, end_at } = req.body;

        if (!shift_name || !start_at || !end_at) {
            return res.status(400).json({ error: 'Missing required feilds' });
        }

        const result = await create_Shift(shift_name, start_at, end_at);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to create shift' });

    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
}


exports.update_shift = async (req, res) => {
    try {
        const shift_id = req.params.id
        const { shift_name, start_at, end_at } = req.body;

        if (!shift_name || !start_at || !end_at) {
            return res.status(400).json({ error: 'Missing required feilds' });
        }

        const result = await update_Shift(shift_name, start_at, end_at, shift_id);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to update shift' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.delete_shift = async (req, res) => {
    try {
        const shift_id  = req.params.id
        console.log(shift_id)
        if (!shift_id) {
            return res.status(400).json({ error: 'Missing shift_id' });
        }

        const result = await delete_Shift(shift_id);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to delete shift' });


    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
}


exports.get_all_shift = async (req, res) => {
    try {
        const result = await get_All_Shift();

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to get data ' });
    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
}

exports.get_detail_shift = async (req,res) => {
    try {
        const shift_id = req.params.id

        if (!shift_id) {
            return res.status(400).json({ error: 'Missing shift_id' });
        }

        const result = await get_Detail_Shift(shift_id);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to get data ' });
        

    } catch (error) {
        return res.status(500).json({ error: error.message });
        
    }
}