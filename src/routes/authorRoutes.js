const express = require("express");

const app=new express();
const authorRouter=express.Router();
const authorData=require('../model/authorData');

function router(nav,navAdmin)
{

authorRouter.get('/',(req,res)=>
                      {
                        nav=navAdmin;
                        authorData.find()
                        .then((authors)=>
                        {
                          res.render('authors',
                          {
                            nav,
                            authors
                          });
                        })                        
                      });   

authorRouter.get('/:id',(req,res)=>
                              {
                                const id=req.params.id;
                                authorData.findOne({_id:id})
                                .then((author)=>
                                {
                                  nav=navAdmin;
                                  res.render('author',
                                  {
                                    nav,
                                    author
                                  });
                                });
                              });
authorRouter.get("/editAuthor/:id",(req,res)=>    //sends details of the selected Author to the edit page
                              {
                                const id=req.params.id;
                                authorData.findOne({_id:id})
                                .then((author)=>
                                             {
                                              nav=navAdmin;
                                               res.render('editAuthor',
                                               {
                                                 nav,  
                                                 author
                                             });
                                             })   
                              });

return authorRouter;
}

module.exports = router;

// const authors=[
//     {
//       name:"Vaikom Muhammad Basheer.",
//       book:"‎ബാല്യകാലസഖി",
//       img:"writer1.jpeg"
//     },
//     {
//       name:"Thakazhi Sivasankara Pillai.",
//       book:"കയർ",
//       img:"writer2.jpeg"
//     },
//     {
//       name:"Kamala Surayya.",
//       book:"നീർമാതളം പൂത്ത കാലം",
//       img:"writer3.jpg"
//     },
//     {
//       name:"Lalithambika Antharjanam.",
//       book:"‎അഗ്നിസാക്ഷി",
//       img:"writer4.jpeg"
//     },
//     {
//       name:"M. Mukundan.",
//       book:"മയ്യഴിപ്പുഴയുടെ തീരങ്ങളിൽ",
//       img:"writer5.jpg"
//     },
//     {
//       name:"Arundhaty Roy.",
//       book:"കുഞ്ഞുകാര്യങ്ങളുടെ ഒടേതമ്പുരാൻ",
//       img:"writer6.jpg"
//     },
//     {
//       name:"O.V.Vijayan.",
//       book:"ഖസാക്കിന്റെ ഇതിഹാസം",
//       img:"writer7.jpg"
//     },
//     {
//       name:"M.T. Vasudevan Nair.",
//       book:"രണ്ടാമൂഴം",
//       img:"writer8.jpg"
//     },
//     {
//       name:"K.R. Meera.",
//       book:"ആരാച്ചാർ",
//       img:"writer9.jpg"
//     },
//     {
//       name:"Sarah Joseph.",
//       book:"അലാഹയുടെ പെണ്മക്കൾ",
//       img:"writer10.jpg"
//     },
//     {
//       name:"S.K. Pottakkatt.",
//       book:"ഒരു ദേശത്തിന്റെ കഥ",
//       img:"writer11.jpg"
//     },
//     {
//       name:"O.N.V Kurup.",
//       book:"അഗ്നി ശലഭങ്ങൾ",
//       img:"writer12.jpeg"
//     },
//     {
//       name:"Benyamin.",
//       book:"ആടുജീവിതം",
//       img:"writer13.jpg"
//     },
//     {
//       name:"Kumaran Asan.",
//       book:"വീണപൂവ്",
//       img:"writer14.jpeg"
//     },
//     {
//       name:"M. Leelavathy.",
//       book:"അപ്പുവിന്റെ അന്വേഷണം",
//       img:"writer15.jpg"
//     },
//     {
//       name:"Sugathakumari.",
//       book:"രാത്രിമഴ",
//       img:"writer16.jpg"
//     },
//     {
//       name:"Sukumar Azhikode.",
//       book:"തത്വമസി",
//       img:"writer17.jpg"
//     },
//     {
//       name:"Perumbadavam Sreedharan.",
//       book:"ഒരു സങ്കീർത്തനം പോലെ",
//       img:"writer18.jpg"
//     }
// ];