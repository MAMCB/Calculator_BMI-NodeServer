const express = require("express");
const bodyParser = require("body-parser"); //to use the body-parser package (see dependency in the .json file)
const app = express(); 
app.use(bodyParser.urlencoded({extended:true})); // how to use the bodyParser package, with the urlencoded i can get acces to the input value

app.get("/", function(req,res){
   res.sendFile(__dirname + "/index.html");
   
});

app.get("/bmiCalculator",function(req,res){
     res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req,res){ //what to return from the post method (assigned in the html file in the form tag)

    var num1 = Number(req.body.num1); //num1 was the name given for one of the inputs
    var num2 = Number(req.body.num2); //num2 was the name given for one of the inputs
    var sum = num1 + num2;
    res.send("The result is " + sum);

})

app.post("/bmiCalculator", function (req,res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var BMI = Math.round(weight/(height*height));
res.send ("Your BMI is: " + BMI);
})


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});