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

const updateContract = async(contract_type, position_id, end_date, base_salary, salary_coefficient, is_active, id )=>{
    try {
        const values = [contract_type, position_id, end_date, base_salary, salary_coefficient, is_active,id]

        const query =`
            update employment_contract
            set contract_type = $1,
                position_id = $2, 
                end_date =$3, 
                base_salary =$4, 
                salary_coefficient = $5, 
                is_active = $6
            where contract_id = $7
            returning *
        `

        const result = await pool.query(query, values)

        if(result.rows.length > 0){
            return result.rows;
        }

        return null
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);    
    }
}

module.exports = { getAllContract, getDetailContract, createContract, updateContract }
