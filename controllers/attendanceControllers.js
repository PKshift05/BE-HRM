
const { check_in, check_out, get_working_hours, get_attendance_history } = require("../model/attendancetModel");

exports.check_in = async (req, res) => {
    try {
        const employee_id = req.body.id
        const { date, time } = req.body


        if (!employee_id || !date || !time) {
            return res.status(400).json('Missing required fields');
        }

        const result = await check_in(employee_id, date, time);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to check in ' });


    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
}

exports.check_out = async (req, res) => {
    try {

        const employee_id = req.body.id
        const { date, time } = req.body

        if (!employee_id || !date || !time) {
            return res.status(400).json('Missing required fields');
        }
        const result = await check_out(employee_id, date, time);

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to check out ' });


    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
}

exports.get_working_hours = async (req, res) => {
    try {
        const { employee_id, date_start, date_end } = req.query;

        if (!employee_id || !date_start || !date_end) {
            return res.status(400).json('Missing required fields');

        }

        const result = await get_working_hours();

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to get data ' });


    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
}

// wait
exports.get_attendance_history = async (req, res) => {
    try {

        const result = await get_attendance_history();

        if (result) {
            return res.status(201).json(result);
        }

        return res.status(500).json({ error: 'Faild to get data ' });


    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
}