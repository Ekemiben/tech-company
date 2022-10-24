const { response } = require('express');
const registrationModel = require('../models/companyA')


const getAllUsers =  async(request, response) => {
    try{
           const allUsers = await registrationModel.find()
           response.json(allUsers)
    }catch(err){
        response.send('Error ' + err)
    }
}

const getUserById = async(request,response) => {
    try{
           const userById = await registrationModel.findById(request.params.id)
           response.json(userById)
    }catch(err){
        response.send('Error ' + err)
    }
}

const creatNewUser = async (request, resposnse) =>{
    try{
        const newUser = new registrationModel({
           name:request.body.name,
            phone:request.body.phone,
            email:request.body.email,
            employee_number:request.body.employee_number,
            head_office:request.body.head_office
        })
        const newApplicant = await newUser.save()
        resposnse.status(200).json(newApplicant)
    }catch(err){
        response.status(500).json(err)
    }
}

const updateUser = async(request,response)=> {
    try{
        const regId = await registrationModel.findById(request.params.id)
        regId.name = request.body.name,
        regId.phone = request.body.phone,
        regId.email = request.body.email,
        regId.employee_number = request.body.employee_number,
        regId.head_office = request.body.head_office
        const updatedData = await regId.save()
        response.json(updatedData)   
    }catch(err){
        response.send('Error')
    }

}

const deleteUser = async(request,response)=> {
    try{
        const regId = await registrationModel.findById(request.params.id)
        regId.name = request.body.name,
        regId.phone = request.body.phone,
        regId.email = request.body.email,
        regId.employee_number = request.body.employee_number,
        regId.head_office = request.body.head_office
        const updatedData = await regId.remove()
        response.json(updatedData)   
    }catch(err){
        response.send('Error')
    }

}

module.exports = {
    getAllUsers,
    getUserById,
    creatNewUser,
    updateUser,
    deleteUser

}