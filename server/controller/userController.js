const User = require('../model/userSchema')
require('../database/conn')
const bcrypt=require('bcryptjs')
const jwt= require('jsonwebtoken')
module.exports = {
    async register(ctx)
   {
           const {name,email,password,cpassword} = ctx.request.body;
           console.log("1",ctx.request.body);
           if(!name || !email || !password || !cpassword)
           {         
               ctx.status=400;
               ctx.body={status:400,message:"invalid" };
           }
           try{
            const userExist =await User.findOne({email:email});
            if(userExist) {
                ctx.status=422;
                ctx.body={status:422,message:"email already exist" };
            }
            else if(password != cpassword ){
                ctx.body={status:422,message:"password are not matching" };
            }
            else{
                const user = new User({name,email,password,cpassword});
                await user.save();
                ctx.status=201;
                ctx.body = { message: "data save ", user: user };
            }
           }
           catch(error){
            console.log(error)
           }         
   },

   async signin(ctx)
   {
       try{
        //    let token;
           const {email,password} = ctx.request.body;
           console.log(email)
           if(!email || !password)
           {         
               ctx.status=400;
               ctx.body={status:400 ,message:"Please filled the data" }
           }
           const userLogin = await User.findOne({ email: email});
           console.log("userLogin=>",userLogin)
            if(userLogin){
                const isMatch =await bcrypt.compare(password,userLogin.password)
                // token = await  userLogin.generateAuthToken() ; 
                // cookie("jwtoken",token,{
                //     expires:new Date(Date.now() + 43200000),
                //      httpOnly:true
                // });  
                if(!isMatch){
                    ctx.body={error:"user error"}
                    }
                else{
                    ctx.body={message:"signin successful"}
                    }
            }
            else{
                ctx.body={error:"Invalid"}
            }
       }      
       catch(err){
           console.log(err)
       }
   },

   async userList(ctx){
    try{
        var users = await User.find()
        // console.log(users)
        ctx.body =users
        // ctx.response.body=users
        console.log(users)
    }
    catch(error){
        ctx.throw(error)
    }
   },

   async userDelete(ctx){
    try{
        const id = ctx.request.params.id;
        console.log("id=>",id);
        const deleteUser = await User.findByIdAndDelete(id);
        console.log("deleteUser=>",deleteUser);
        if(!id){
            console.log("404")
            ctx.status=404;
            ctx.body={message:"bad request"}
        }
        ctx.body = deleteUser;
    }
    catch(error){
        ctx.throw(error)
    }
   },

}