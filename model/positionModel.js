const pool = require('../config/database')


const getAllPosition = async()=>{
    try {
        const query = `
            select * 
            from position
        `

        const result = await pool.query(query);

        if(result.rows.length > 0){
            return result.rows;
        }
        return null;
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

const getDetailPosition = async(position_id)=>{
    try {
        const query = `
            select * 
            from position
            where position_id = $1
        `

        const result = await pool.query(query,[position_id]);

        if(result.rows.length >0){
            return result.rows[0];
        }

        return null
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

const createPosition = async(position_name,department_id)=>{
    try {
        const query =`
            insert into position (position_name,department_id)
            values ($1,$2)
            returning *
        `

        const result = await pool.query(query, [position_name,department_id]);

        if(result.rows.length){
            return result.rows[0];
        }

        return null;
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
        
    }
}
module.exports = {getAllPosition, getDetailPosition, createPosition}