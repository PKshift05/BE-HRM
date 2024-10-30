const pool = require('../config/database')

const get_All_Shift = async () => {
    try {
        const query = `
            select *
            from shift
        `

        const result = await pool.query(query)
        if (result.rows.length > 0) {
            return result.rows;
        }
        return null;

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
    }
}

const get_Detail_Shift = async (shift_id) => {
    try {
        const query =`
            select *
            from shift
            where shift_id = $1
        `

        const result = await pool.query(query, [shift_id]);
        if (result.rows.length > 0) {
            return result.rows[0];
        }
        return null;
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
        
    }
}


const create_Shift = async(shift_name, start, end)=>{
    try {
        const query =`
            insert into shift(shift_name, start_at, end_at)
            values ($1,$2,$3)
            returning *
        `
        
        const result = await pool.query(query,[shift_name,start,end])

        if(result.rows.length >0){
            return result.rows[0];
        }

        return null;

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
        
    }
}

const update_Shift =async(shift_name, start, end,shift_id)=>{
    try {
        const query =`
            update shift
            set shift_name = $1,
                start_at = $2,
                end_at = $3
            where shift_id = $4
            returning *
        `
        const result = await pool.query(query,[shift_name,start,end,shift_id]);

        if (result.rows.length >0) {
            return result.rows[0];
        } 

        return null;
        
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
        
    }
}

const delete_Shift = async(shift_id)=>{
    try {
        const query =`
            delete * from shift
            where shift_if = $1
            returning *
        `

        const result = await pool.query(query,[shift_id]);

        if (result.rows.length >0) {
            return result.rows[0];
        }

        return null;
        
    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
        
    }
}


module.exports = {get_All_Shift,get_Detail_Shift, create_Shift, update_Shift, delete_Shift}