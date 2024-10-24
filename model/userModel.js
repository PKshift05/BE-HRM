const pool = require('../config/database')

const createUser = async (user_name, handlepassword) =>{
    const result = await pool.query("insert into users (user_name,password) values ($1,$2) returning *",
        [user_name, handlepassword]
    );
    return result.rows[0];
};


const findUsername = async (user_name)=>{
    const result = await pool.query("select * from users where user_name =$1",[user_name]);
    return result.rows[0];
}

module.exports = {createUser, findUsername}