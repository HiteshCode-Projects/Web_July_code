//Backend Rules To Write Code

//Step 1 : Importing ALLL REQUIRED MODULES WHATEVER NEEDED FOR BACKEND Setup - express(API) , mongoose(Backend-Database) , cors(Frontend-Backend) , bcrypt - (Hash The Senstivite Data)
//We need To imoprt all required Modules 

//How To Import Modules in Nodes
// by using require('module-name') function can import modules in node js
// ex        require('express')  or import express

const express   =     require('express')

//Note : every Modules It is Prewritten Logical Set of Code - Will Hve its own Features Own Build Methods/function we can perform task


//Step 2 : Create Express Function/Application by using express() function which is a part of express module
// It will use to build API
                       
const app    =     express()

//Security Layer - Middleware
app.use(express.json())


//STEP 3 : DEfined Routes - Path - API Endpoint for communocation Between Backend and Frontend

//Syntax :  app.methodName('path/Address' , function(req,res){}  )

app.get('/' , function(req,res){

res.send('Good Evening : Backend API Running')

} )

app.get('/login', function(req,res){
    res.send('Good Even Please Login To proceed'  )
})


app.get('/register', function(req,res){
    res.send('Good Even Please Resgiter '  )
})


//post : Send The Data To Server From Frontend- Login/Regsiter - Place Order
// req.body ---- frontend
app.post('/order', (req,res)=>{
    res.send(`Order Placed Placed Successfully . Order Details ${   JSON.stringify(req.body)  }`)
})



//Step 4 : Start The Backend Server By using app.listen()
// synatx app.listen(portNumber, function(){} )

// portNumber : It is a Number Which is used to identify the backend server in netwrk
//Example : 3000,5000,8000,9000 etc

app.listen(3000, function(){
    console.log('Backedn Server Running  on port  http://localhost:3000 ')
})


