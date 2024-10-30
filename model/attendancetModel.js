const { query } = require('express')
const pool = require('../config/database')

const check_in = async (employee_id, date, time) => {

    try {
        const query = `
            insert into atendance (employee_id, check_in_time, date)
            values($1,$2,$3)
            returning *
        `

        const result = await pool.query(query, [employee_id, time, date]);

        if (result.rows.length) {
            return result.rows[0];
        }

        return null;
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);

    }
}

const check_out = async (employee_id, date, time) => {
    try {
        const query = `
            insert into atendance (employee_id, check_out_time, date)
            values($1,$2,$3)
            returning *
        `

        const result = await pool.query(query, [employee_id, time, date]);

        if (result.rows.length) {
            return result.rows[0];
        }

        return null;

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);

    }
}


const get_working_hours = async (employee_id, date_start, date_end) => {

    try {
        const query = `
        `

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);

    }

}
const get_attendance_history = async (employee_id, date_start, date_end) => {
    try {
        const query = ``

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);

    }
}


module.exports = { check_in, check_out, get_working_hours, get_attendance_history }