const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/LIBRARY');      //connecting mongodb database
                //database:mongodb , Port:27017(default) , database name::LIBRARY  
const Schema=mongoose.Schema;               //to define schema
const authorSchema=new mongoose.Schema(       //schema definition
                                    {
                                    name:String,
                                    book:String,
                                    image:String
                                    }
                                    );
var authorData=mongoose.model('authordata',authorSchema); //converting schema into a collection--model creation
                            //creation of "authordatas" collection in the Database as an effect 
module.exports=authorData;