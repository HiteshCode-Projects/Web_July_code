const express = require('express')
const cors = require('cors')

const app = express()

//Middleware
app.use(express.json())
app.use(cors())   //Enable The Cors so we can share resource even though having differnt port num


//Eample 1
app.post('/login' , (req,res)=>{

//Data from Frontend - req.body 

const {name , email} = req.body

console.log(name)

//Simple Validation
if(name && email){
       
    res.json( { message: `Welcome ${name} To Amazon`  }  )

}else{
      res.json( { message: 'Email and Name are required'  })
}


})

app.get('/' , (req,res)=>{
    res.json({
        message:'Backend Running'
    })
})


app.listen(3000,()=>{
    console.log('server running http://localhost:3000')
})