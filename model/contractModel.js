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


module.exports = { getAllContract, getDetailContract }
