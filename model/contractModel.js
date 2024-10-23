const { query } = require('express');
const pool = require('../config/database')


const getAllContract = async () => {
    try {

        const query = `
            select *
            from employment_contract
        `
        const result = await pool.query(query);

        if (result) {
            return result.rows;
        }

        return null
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

const getDetailContract = async (id) => {
    try {
        const query = `
            select *
            from employment_contract
            where contract_id = $1
        `
        const result = await pool.query(query, [id]);
        if (result) {
            return result.rows[0];
        }
        return null
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }

}


const createContract = async(contract_type, position_id, employee_id, start_date, end_date, base_salary, salary_coefficient)=>{
    try {
        const values = [contract_type, position_id, employee_id, start_date, end_date, base_salary, salary_coefficient];
        const query = `
            insert into employment_contract (contract_type, position_id, employee_id, start_date, end_date, base_salary, salary_coefficient)
            values ($1,$2,$3,$4,$5,$6,$7)
            returning *
        `

        const result = await pool.query(query,values);

        if(result.rows.length > 0){
            return result.rows[0];
        }
        return null
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

const updateContract = async()=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = { getAllContract, getDetailContract, createContract, updateContract }
