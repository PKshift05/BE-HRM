const pool = require('../config/database')

const getAllDepartment = async () => {
    try {
        const query = `
            select *
            from department
        `

        const result = await pool.query(query);

        if (result.rows.length > 0) {
            return result.rows;
        }

        return null;

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);

    }

}


const updateDepartment = async (department_name, address, department_phone, department_id) => {
    try {
        const values = [department_name, address, department_phone, department_id];

        const query = `
            update department
            set department_name = $1,
                address = $2,
                department_phone = $3
            where department_id = $4
            returning *
        `

        const result = await pool.query(query, values);

        if (result.rows.length > 0) {
            return result.rows[0];
        }
        return null
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);

    }
}

const getDetailDepartment = async (department_id) => {

    try {
        const query = `
            select *
            from department
            where department_id = $1
        `
        const result = await pool.query(query, [department_id])
        if (result.rows.length > 0) {
            return result.rows[0];
        }
        return null;

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }

}

module.exports = { getAllDepartment, updateDepartment, getDetailDepartment }