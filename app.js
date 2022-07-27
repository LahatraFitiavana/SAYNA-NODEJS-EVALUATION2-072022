const express=require('express')

const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/pages/index.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/pages/contact.html')
})

app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/pages/signup.html')
})

app.get('/marketing',(req,res)=>{
    res.sendFile(__dirname+'/pages/marketing.html')
})

app.get('/frontend',(req,res)=>{
    res.sendFile(__dirname+'/pages/frontend.html')
})

app.get('/backend',(req,res)=>{
    res.sendFile(__dirname+'/pages/backend.html')
})

app.get('/uxui',(req,res)=>{
    res.sendFile(__dirname+'/pages/uxui.html')
})


app.post('/contact',(req,res)=>{
    console.log(req)
})

app.listen(port, () => console.log(`notre application Node est démarrée sur : http://localhost: ${
port}`))