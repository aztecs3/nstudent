var express=require("express"),
    app=express(),
    bodyparser=require("body-parser"),
    mongoose=require("mongoose");

var indexroutes=require("./routes/index");

mongoose.connect("mongodb://localhost/lib_rp");
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({ectended:true}));
app.use(express.static(__dirname+"/public"));

app.use(indexroutes);


app.listen(2128,function(){
    console.log("Server has started !!")
})

