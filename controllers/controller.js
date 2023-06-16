const contactModel = require('../models/model')
const myCloudinary = require('../config/cloudinary');
// const cloudinary = require('cloudinary');
// const path=require('path');
// console.log(myCloudinary)

// exports.newContact = async (req, res)=>{
//     try {
//         const {name,email,message}=req.body
//         console.log(req.files)
//         await myCloudinary.uploader.upload(req.files.profilePicture.tempFilePath, (error, data)=>{
//             if (error) {
//                 console.log(error);
//                 return res.status(500).json({
//                     error: "Upload Failed"
//                 })
//             } else {
//                 const newData = {
//                     name,
//                     email,
//                     message,
//                     profilePicture: {
//                         cloud_id: data.public_id,
//                         cloud_url: data.secure_url
//                     }
//                 }
//                 contactModel.create(newData).then((response) => {
//                     res.status(201).json({
//                         message: 'Contact created successfully',
//                         contact: response
//                     })
//                 }).catch((error)=>{
//                     res.status(404).json({
//                         message: 'Could not create contact',
//                         message: error.message
//                     })
//                 })
//             }
//         })
        
        
        
//     } catch (error) {
//         res.status(500).json({
//             message: error.message,
//            // message: req.files
//         })
//     }
// }

exports.newContact = async (req, res)=>{
    try {
        const {name,email,message}=req.body
        console.log(req.files)
        await myCloudinary.uploader.upload(req.file.path, (error, data)=>{
            if (error) {
                console.log(error);
                return res.status(500).json({
                    error: "Upload Failed"
                })
            } else {
                const newData = {
                    name,
                    email,
                    message,
                    profilePicture: {
                        cloud_id: data.public_id,
                        cloud_url: data.secure_url
                    }
                }
                contactModel.create(newData).then((response) => {
                    res.status(201).json({
                        message: 'Contact created successfully',
                        contact: response
                    })
                }).catch((error)=>{
                    res.status(404).json({
                        message: 'Could not create contact',
                        message: error.message
                    })
                })
            }
        })
        
        
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
           // message: req.files
        })
    }
}

const getAllContacts = async (req, res)=>{
    try {
            
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getContactById = async (req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateContact = async (req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const deleteContact = async (req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// module.exports = {
//     newContact,
//     getAllContacts,
//     getContactById,
//     updateContact,
//     deleteContact
// }