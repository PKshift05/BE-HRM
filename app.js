const express = require('express')
const app = express()
const employeeRouter = require('./routes/employeeRoute')
const contractRouter = require('./routes/employeeContractRouter')
const department = require('./routes/departmentRouter')


require('dotenv').config()


app.use(express.json())
app.use('/hrm/employee/', employeeRouter)
app.use('/hrm/contract/', contractRouter)
app.use('/hrm/department/',department)


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Sever is running on PORT ${PORT}`);
})