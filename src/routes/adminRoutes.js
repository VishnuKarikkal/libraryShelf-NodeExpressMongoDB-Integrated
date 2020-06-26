//handles data management queries related to BOOKS and AUTHORS-- ADMIN Privilages

const express= require('express');
const bookData=require('../model/bookData');
const authorData=require('../model/authorData');
const adminRouter=express.Router();

function router(nav,navAdmin)
{
    adminRouter.get('/',(req,res)=>         //renders page for adding book data
    {
        nav=navAdmin;
        res.render('addBooks',
        {
            nav
        });
    });
    adminRouter.post('/addBook',(req,res)=>         //to add a book to the library
        {
            let data=
            {
               title: req.body.title,
               author: req.body.author,
               genre: req.body.genre,
               image: req.body.image
            };
            let book=bookData(data);
            book.save();        //saving to the database
            res.redirect('/books');
        })
    adminRouter.post('/editBook/:id',(req,res)=>        // to edit a book data
        {
            const id=req.params.id;
            if(req.body.image=="")
            {
                bookData.updateOne({_id:id},{$set:{title:req.body.title,author:req.body.author,genre:req.body.genre}})
                .then((books)=>
                {
                    res.redirect('/books');
                })
            }
            else
            {
                bookData.updateOne({_id:id},{$set:{title:req.body.title,author:req.body.author,genre:req.body.genre,image:req.body.image}})
                .then((books)=>
                {
                    res.redirect('/books');
                })
            }
            
        })
    adminRouter.get('/deleteBook/:id',(req,res)=>
                                            {
                                                const id=req.params.id;
                                                bookData.deleteOne({_id:id})
                                                .then((books)=>
                                                                {
                                                                  res.redirect('/books');  
                                                                });
                                            });
    adminRouter.get('/addAuthors',(req,res)=>         //renders page for adding author data     
        {
            nav=navAdmin;
            res.render('addAuthors',
            {
                nav
            });
        });
    adminRouter.post('/addAuthors/editAuthor/:id',(req,res)=>          //to edit an author data
                                            {
                                                const id=req.params.id;
                                                if(req.body.image=="")
                                                {
                                                    authorData.updateOne({_id:id},{$set:{name:req.body.name,book:req.body.book}})
                                                    .then((authors)=>
                                                    {
                                                        res.redirect('/authors');
                                                    })
                                                }
                                                else
                                                {
                                                    authorData.updateOne({_id:id},{$set:{name:req.body.name,book:req.body.book,image:req.body.image}})
                                                    .then((authors)=>
                                                    {
                                                        res.redirect('/authors');
                                                    })
                                                }
                                            })  
    adminRouter.get('/deleteAuthor/:id',(req,res)=>
                                            {
                                                const id=req.params.id;
                                                authorData.deleteOne({_id:id})
                                                .then((authors)=>
                                                                {
                                                                  res.redirect('/authors');  
                                                                });   
                                            })        
    adminRouter.post('/addAuthor',(req,res)=>       //to add author data
        {
            let data=
            {
               name: req.body.name,
               book: req.body.book,
               image: req.body.image
            };
            let author=authorData(data);
            author.save();        //saving to the database
            res.redirect('/authors');
        })
    return adminRouter;
}
module.exports=router;