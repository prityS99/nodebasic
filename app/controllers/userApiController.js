const User=require('../models/users')

class UserApiController{

async createUser(req, res){
    console.log(req.body);
    try {
    const {name, email, city}=req.body
    const data =new User({
        name,
        email,
        city
    }) 
     const user = await data.save() //ODM??

     return res.status(201).json({
        success:true,
        message:"User created successfully",
        data:user
        

})} catch (error) {
    return res.status(500).json({
        success:false,
        message:error.message
    })
    
}
    
}

async getUser(req, res){
    try {
        const data= await User.find({name:"Prity"}) //ODM
         return res.status(201).json({
            success:true,
            message:"User List",
            total:data.length,
            data:data
        })
        
    } catch (error) {
     return res.status(500).json({
        success:false,
        message:error.message
    }
     )
}

}
}

module.exports= new UserApiController