const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/LIBRARY');      //connecting mongodb database
                //database:mongodb , Port:27017(default) , database name::LIBRARY  
const Schema=mongoose.Schema;               //to define schema
const bookSchema=new mongoose.Schema(       //schema definition
                                    {
                                    title:String,
                                    author:String,
                                    genre:String,
                                    image:String
                                    }
                                    );
var bookData=mongoose.model('bookdata',bookSchema); //converting schema into a collection--model creation
                            //creation of "bookDatas" collection in the Database as an effect 
module.exports=bookData;