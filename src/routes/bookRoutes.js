//handles Books data fetch and Books pages renderings

const express = require("express");

const app=new express();
const booksRouter=express.Router();
const bookData=require("../model/bookData");

function router(nav,navAdmin)
{ 
    booksRouter.get('/',(req,res)=>       //renders books page
   {
     bookData.find()
     .then((books)=>
                  {
                    nav=navAdmin;
                    res.render('books',
                    {
                        nav,  
                        books
                  });
                  })  
   });
   
   booksRouter.get("/:id",(req,res)=>     //fetches details of selected book
   {
     const id=req.params.id;
     bookData.findOne({_id:id})
     .then((book)=>
                  {
                    nav=navAdmin;
                    res.render('book',
                    {
                      nav,  
                      book
                  });
                  })   
   });

   booksRouter.get("/editBook/:id",(req,res)=>    //sends details of the selected book to the edit page
   {
     const id=req.params.id;
     bookData.findOne({_id:id})
     .then((book)=>
                  {
                    nav=navAdmin;
                    res.render('editBook',
                    {
                      nav,  
                      book
                  });
                  })   
   });
return booksRouter;
}
module.exports = router;

 //   var books=
  //   [
  //  {
  //    title:"‎ബാല്യകാലസഖി",
  //    author:"Vaikom Muhammad Basheer.",
  //    genre:'Story,Drama',
  //    img:"book1.jpg"
  //  },
  //  {
  //    title:"കയർ",
  //    author:"Thakazhi Sivasankara Pillai.",
  //    genre:'Drama',
  //    img:"book2.jpg"
  //  },
  //  {
  //    title:"‎നീർമാതളം പൂത്ത കാലം",
  //    author:"Kamala Surayya.",
  //    genre:'Autobiography',
  //    img:"book3.jpg"
  //  },
  //  {
  //   title:"‎അഗ്നിസാക്ഷി",
  //   author:"Lalithambika Antharjanam.",
  //   genre:'noval',
  //   img:"book4.jpg"
  // },
  // {
  //   title:"മയ്യഴിപ്പുഴയുടെ തീരങ്ങളിൽ‎",
  //   author:"M. Mukundan.",
  //   genre:'noval',
  //   img:"book5.jpg"
  // },
  // {
  //   title:"കുഞ്ഞുകാര്യങ്ങളുടെ ഒടേതമ്പുരാൻ‎",
  //   author:"Arundhaty Roy.",
  //   genre:'noval',
  //   img:"book6.jpg"
  // },
  // {
  //   title:"ഖസാക്കിന്റെ ഇതിഹാസം‎",
  //   author:"O.V.Vijayan.",
  //   genre:'noval',
  //   img:"book7.jpg"
  // },
  // {
  //   title:"രണ്ടാമൂഴം‎",
  //   author:"M.T. Vasudevan Nair.",
  //   genre:'noval,history',
  //   img:"book8.jpg"
  // },
  // {
  //   title:"ആരാച്ചാർ‎",
  //   author:"K.R. Meera.",
  //   genre:'noval,Drama',
  //   img:"book9.jpg"
  // },
  // {
  //   title:"അലാഹയുടെ പെണ്മക്കൾ",
  //   author:"Sarah Joseph.",
  //   genre:'noval,Drama',
  //   img:"book10.jpg"
  // },
  // {
  //   title:"ഒരു ദേശത്തിന്റെ കഥ",
  //   author:"S.K. Pottakkatt.",
  //   genre:'noval,Drama,history',
  //   img:"book11.jpg"
  // },
  // {
  //   title:"അഗ്നി ശലഭങ്ങൾ",
  //   author:"O.N.V Kurup.",
  //   genre:'poem',
  //   img:"book12.jpg"
  // },
  // {
  //   title:"ആടുജീവിതം",
  //   author:"Benyamin.",
  //   genre:'novel,drama,real-story',
  //   img:"book13.jpg"
  // },
  // {
  //   title:"വീണപൂവ്",
  //   author:"Kumaran Asan.",
  //   genre:'poem',
  //   img:"book14.jpg"
  // },
  // {
  //   title:"അപ്പുവിന്റെ അന്വേഷണം",
  //   author:"M. Leelavathy.",
  //   genre:'novel',
  //   img:"book15.jpg"
  // },
  // {
  //   title:"രാത്രിമഴ",
  //   author:"Sugathakumari.",
  //   genre:'poem',
  //   img:"book16.jpg"
  // },
  // {
  //   title:"തത്വമസി",
  //   author:"Sukumar Azhikode.",
  //   genre:'critic',
  //   img:"book17.png"
  // },
  // {
  //   title:"ഒരു സങ്കീർത്തനം പോലെ",
  //   author:"Perumbadavam Sreedharan.",
  //   genre:'novel,drama,feel good',
  //   img:"book18.jpg"
  // },
  //   ]; 