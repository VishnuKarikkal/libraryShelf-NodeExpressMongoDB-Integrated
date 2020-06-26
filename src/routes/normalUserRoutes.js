
const express = require("express");

const app=new express();
const normalUserRouter=express.Router();
const bookData=require("../model/bookData");

function router(nav,navNormal)
{ 
    normalUserRouter.get('/',(req,res)=>
    {
     bookData.find()
     .then((books)=>
                  {
                    nav=navNormal
                    res.render('normalUserBooksView',
                    {
                        nav,  
                        books
                  });
                  })  
    });
    normalUserRouter.get('/userAuthorView',(req,res)=>
    {
     bookData.find()
     .then((authors)=>
                  {
                    nav=navNormal
                    res.render('normalUserAuthorView',
                    {
                        nav,  
                        authors
                  });
                  })  
    });
    return normalUserRouter;
}

module.exports=router;
