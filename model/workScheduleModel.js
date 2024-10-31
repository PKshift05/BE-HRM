const pool = require('../config/database')



const create_work_schedule = async(employee_id, date, shift_id)=>{
    try {
        const query =`
            insert into work_schedule(employee_id, date, shift_id)
            values ($1,$2,$3)
            returning*
        `
        
        const result = await pool.query(query,[employee_id,date,shift_id]);

        if(result.rows.length >0){
            return result.rows[0];
        }

        return null;

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
        
    }
}


const update_work_schedule = async(shift_id,schedule_id)=>{
    try {
        const query =`
           update work_schedule
           set shift_id = $1
           where schedule_id = $2
           returning*
        `
        
        const result = await pool.query(query,[shift_id,schedule_id]);

        if(result.rows.length >0){
            return result.rows[0];
        }

        return null;

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
        
    }

}


const delete_work_schedule = async(schedule_id)=>{

    try {
        const query =`
           delete from work_schedule
           where schedule_id = $1
           returning*
        `
        
        const result = await pool.query(query,[schedule_id])

        if(result.rows.length >0){
            return result.rows[0];
        }

        return null;

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
        
    }
}


const get_work_schedule = async(employee_id, date_start, date_end)=>{
    try {
        const query =`
            select *
            from work_schedule
            where employee_id = $1
            and date between $2 and $3
            order by date
        `
        
        const result = await pool.query(query,[employee_id,date_start,date_end]);

        if(result.rows.length >0){
            return result.rows;
        }

        return null;

    } catch (error) {
        throw new Error(`Database error: ${error.message}`);
        
    }
}





module.exports = {create_work_schedule, update_work_schedule, delete_work_schedule,get_work_schedule}