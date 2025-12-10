let express = require("express");
const { enquiryInsert, enquiryList, deleteEnquiry, updateEnquiry } = require("../../controllers/web/userEnquiryController");
let enquiryRoutes = express.Router();

//Enquiry-insert
enquiryRoutes.post("/enquiry-insert",enquiryInsert)
//Enquiry-list
enquiryRoutes.get("/enquiry-list",enquiryList)
//Enquiry-delete
enquiryRoutes.delete("/enquiry-delete/:id",deleteEnquiry)
//Enquiry-update
enquiryRoutes.put("/enquiry-update/:id",updateEnquiry)

module.exports = {enquiryRoutes}