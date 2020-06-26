const express = require("express");
const userData=require('../model/userData');
//const popupS=require('popups');
//const alert=require('alert');
var signupStatus;

const signUpRouter=express.Router();

function router(nav)
{
    signUpRouter.get('/',(req,res)=>
    {
      res.render('signUp',{nav});
    });
signUpRouter.post('/submitData',(req,res)=>
                                  {
                                let data = {
                                     name:{
                                       fname : req.body.fname,
                                       lname : req.body.lname
                                          },
                                      gender : req.body.gender,
                                      dob : req.body.dob,
                                      phone : req.body.phone,
                                      address : req.body.address,
                                      email : req.body.email,
                                      password : req.body.password,
                                      type:req.body.userType
                                      };
    userData.findOne({email:data.email,password:data.password})
    .then((user)=>{
              if(user==null)
              {
                let user=userData(data);
                user.save();
                res.render('logIn',{
                nav,
                //alertMSG:"signedUp Successfully!",
                status:"Enter Username and Password!"
                                });
              }
              else
              {
                signupStatus="Account Exists!";
                res.redirect('/signUp');
              }
             })
                    });
    return signUpRouter;
}

module.exports = router;