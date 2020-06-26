const express = require("express");
const bodyparser = require('body-parser');
const userData = require("./src/model/userData");

const app=new express();

const navAdmin = [
    {link:"/index",name:"Home"},
    {link:"/books",name:"Books"},
    {link:"/authors",name:"Authors"},
    {link:"/logout",name:"Logout"},
    {link:"/addBooks",name:"Add Book"},
    {link:"/addBooks/addAuthors",name:"Add Author"}
            ];
    const navNormal=[
                {link:"/index",name:"Home"},
                {link:"/userBookView",name:"Books"},
                {link:"/userBookView/userAuthorView",name:"Authors"},
                {link:"/logout",name:"Logout"}
                ];

    let nav=[
            {link:"/index",name:"Home"},
            {link:"/signUp",name:"Signup"},
            {link:"/logIn",name:"Login"}
            ];
            
            const booksRouter = require('./src/routes/bookRoutes')(nav,navAdmin);
            const authorRouter = require('./src/routes/authorRoutes')(nav,navAdmin);
            const signUpRouter = require('./src/routes/signUpRoutes')(nav);
            const logInRouter = require('./src/routes/logInRoutes')(nav,);
            const adminRouter = require('./src/routes/adminRoutes')(nav,navAdmin);
            const normalUserRouter=require('./src/routes/normalUserRoutes')(nav,navNormal);
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+"/src/views");

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signUp',signUpRouter);
app.use('/logIn',logInRouter);
app.use('/logout',logInRouter);
app.use('/addBooks',adminRouter);
app.use('/userBookView',normalUserRouter);

app.get('/',(req,res)=>
                {
                    if(req.query.status=="successful")
                        {
                            if(req.query.type=="admin")
                            {                           
                                nav=navAdmin; 
                                res.render("index",{nav});
                            }
                            else if(req.query.type=="normal")
                            {
                                nav=navNormal; 
                                res.render("index",{nav});
                            }
                        }
                       else
                       {
                        res.render("index",{nav});
                       }
                   
                });
app.get('/index',(req,res)=>
                {
                    res.render("index",{nav});
                });

app.listen(2000);
console.log("Library APP : listening on Port :2000");