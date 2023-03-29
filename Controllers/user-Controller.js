import User from "../Model/Registration-model.js"

// get all the users

export const getUsers = async (req, res)=>{
    try {

        const users = await User.find()
        res.json(users)
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// get User By Id

export const getUserById = async(req, res) =>{
    try {
        const user = await User.findById(req.params.id).select( '-password -updatedAt -__v')
        res.json(user)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}


// add a new user / save the user in table

export const saveUser =async(req, res) =>{
    const user = new User(req.body);
    try {
        const addUser = await user.save();
        res.status(201).json(addUser)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}