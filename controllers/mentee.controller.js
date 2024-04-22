import { menteeUserModel } from "../models/menteeuser.js";
import bcrypt from "bcrypt";

async function hashPassword(password) {
    const res = await bcrypt.hash(password, 10);
    return res
}

async function compare( userPassword, hashedPassword) {
    const res = await bcrypt.compare(userPassword, hashedPassword);
    return res
}

export const menteeController = async(req, res, next) => {
    try {
        const data = req.body;

        const hashedPassword = await hashPassword(data.password)

        const user= await menteeUserModel.findOne({email: data.email})
        if(!user){
            const {firstName, lastName, email} =  await menteeUserModel.create({
                ...data, password: hashedPassword
            })
            res.staus(201).json({
                firstName, 
                lastName, 
                email
            })
        } else{res.send('User already exists')}
    } catch (error) {
        next (error)
        res.staus(500).send({error});
    }
}


export const getMentees = async(req, res, next) => {
    try{
        const data = req.body
        const findAccounts = await menteeUserModel.find(data)
        res.send(findAccounts)
    } catch (error) {
        next(error)
}
}

export const getMentee = async(req, res, next) => {
    try{
        const findAccount = await menteeUserModel.findById(req.params.id)
        if(findAccount === null){
            return res.status(404).send({message: `Mentee with id ${findAccount} not found`})
        } else {
            res.json(findAccount)
        }
    } catch (error) {
        next(error)
    }
}