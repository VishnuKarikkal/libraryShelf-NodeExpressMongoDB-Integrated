const express = require("express");
const userData=require("../model/userData");
const app=new express();
const logInRouter=express.Router();
var loginStatus;

function router(nav)
{
  logInRouter.get('/logout',(req,res)=>
  {
    res.redirect('/');
  })
    logInRouter.get('/',(req,res)=>
    {
      if(loginStatus=="Invalid Credentials!")
      {
        res.render('logIn',{
          nav,
          status:loginStatus
        });
      }
       else
        {
          res.render('logIn',{
            nav, 
            status:"Enter Username and Password!"
          });
        }
    });

    logInRouter.post("/validate",(req,res)=>     //fetches user details and validtes
    {
     let username=req.body.email;
     let password=req.body.password;
      userData.findOne({email:username,password:password})
      .then((user)=>
              {
               if(user==null)
              {
                loginStatus="Invalid Credentials!";
                res.redirect('/logIn');
              }
              else
              {
                loginStatus="successful";
                userName = user.email;
                type=user.type;
                res.redirect('/?user='+userName+"&status="+loginStatus+"&type="+type);
              }
              })
    });
    
    return logInRouter;
}

module.exports = router;
