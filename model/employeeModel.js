const pool = require('../config/database');


const getAllEmployee = async () => {
    const result = await pool.query('select * from personal_information')
    return result.rows;
}

const getSinglEmployee = async (id) => {
    const result = await pool.query('select * from personal_information where employee_id=$1', [id]);
    return result.rows[0];
}

const addEmployee = async (last_name, first_name, date_of_birth, hometown, phone_number, email, id_card) => {
    try {
        const query = `
            insert into personal_information (last_name, first_name, date_of_birth, hometown, phone_number,email,id_card)
            values ($1,$2,$3,$4,$5,$6,$7)
            returning *
        `;
        const values = [last_name, first_name, date_of_birth, hometown, phone_number, email, id_card];

        const result = await pool.query(query, values);

        if (result.rows.length > 0) {
            return result.rows[0];
        }

        return null;
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}


const updateEmploy = async (last_name, first_name, date_of_birth, hometown, phone_number, email, id_card, id) => {
    try {
        const query = `
            update personal_information
            set last_name =$1, 
                first_name =$2, 
                date_of_birth =$3, 
                hometown =$4, 
                phone_number =$5, 
                email =$6, 
                id_card =$7
            where employee_id = $8
            returning *
        `
        const values = [last_name, first_name, date_of_birth, hometown, phone_number, email, id_card, id];
        const result = await pool.query(query, values);

        if (result.rows.length > 0) {
            return result.rows[0];
        }

        return null;

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);

    }
}

const searchEmployee = async (strSearch) => {
    try {

        const query = `
            SELECT * 
            FROM personal_information
            WHERE employee_id ILIKE '%' || $1 || '%'
            OR last_name ILIKE '%' || $1 || '%'
            OR first_name ILIKE '%' || $1 || '%';
        `

        const result = await pool.query(query,[strSearch]);
        if (result.rows.length > 0) {
            return result.rows;
        }

        return null;
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);

    }
}

module.exports = { getAllEmployee, getSinglEmployee, addEmployee, updateEmploy, searchEmployee }