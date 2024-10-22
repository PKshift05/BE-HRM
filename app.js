const express = require('express')
const app = express()
const employeeRouter = require('./routes/employeeRoute')
const contractRouter = require('./routes/employeeContractRouter')

require('dotenv').config()


app.use(express.json())
app.use('/hrm/employee/', employeeRouter)
app.use('/hrm/contract/', contractRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Sever is running on PORT ${PORT}`);
})