const e = require("express")
const enquireModel = require("../../model/enquiry.model");
//Enquiry-insert
let enquiryInsert = (req,res)=>{
    let {sName,sEmail,sPhone,sMessage} = req.body;
    let enquiry = new enquireModel ({
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sMessage
    })
    enquiry.save().then(()=>{
        res.send({status:1, message:"Enquiry saved successfully"});
    }).catch((err)=>{
        res.send({status:0, message:"Error while saving enquiry", error:err});
    })
}
//Enquiry-list
let enquiryList =  async (req,res)=>{
    let enquireList = await enquireModel.find();
    res.status(200).json({status:1, message:"Enquiry list",data: enquireList})
}
//Enquiry-delete
let deleteEnquiry = async (req,res)=>{
    let enquiryId = req.params.id;
    let deleteEnquiry = await enquireModel.deleteOne({_id:enquiryId});
    res.send({status:1, message:"Enquiry deleted successfully", id:enquiryId, delRes: deleteEnquiry});
}
//Enquiry-update
let updateEnquiry =  async (req,res)=>{
    let enquiryId = req.params.id;
    let {sName,sEmail,sPhone,sMessage} = req.body;
    let updateObj = {
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sMessage
    }
    
    let updateRes = await enquireModel.updateOne({_id:enquiryId},updateObj);
    res.send({status:1, message:"Enquiry deleted successfully",updateRes});
}
module.exports = {enquiryInsert,enquiryList,deleteEnquiry,updateEnquiry}