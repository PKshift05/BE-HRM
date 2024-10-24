const express = require('express')
const app = express()
const employeeRouter = require('./routes/employeeRoute')
const contractRouter = require('./routes/employeeContractRouter')
const departmentRouter = require('./routes/departmentRouter')
const positionRouter = require('./routes/positionRouter')

require('dotenv').config()


app.use(express.json())
app.use('/hrm/employee/', employeeRouter)
app.use('/hrm/contract/', contractRouter)
app.use('/hrm/department/',departmentRouter)
app.use('/hrm/position/', positionRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Sever is running on PORT ${PORT}`);
})