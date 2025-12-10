let express = require ("express");
let mongoose = require ("mongoose");
const { enquiryRoutes } = require("./App/routes/web/enquiryRoutes");
require ('dotenv').config();

let app = express();
app.use(express.json());

app.use("/web/api/enquiry",enquiryRoutes)
//http://localhost:8000/web/api/enquiry/enquiry-insert


//connect to mongoDB
mongoose.connect (process.env.dbURL).then (()=>{
    console.log("Connect to Mongoose");
    app.listen(process.env.port,()=>{
        console.log("Server is running on port"+ process.env.port);
    })
})
