const express=require('express')
const bodyParser=require('body-parser')

const app=express()
const port=3000

app.set('view engine','ejs')

app.use(express.static('./pages/image'))
app.use(express.static('./pages/style.css'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    let Feedback=require('.models/feedback.js')
    Feedback.getBest(function(feedback){
        res.render('pages/index',{feedback})
    })
})

app.get('/contact',(req,res)=>{
    res.render('pages/contact')
})

app.get('/signup',(req,res)=>{
    res.render('pages/signup')
})

app.get('/marketing',(req,res)=>{
    let Feedback=require('.models/feedback.js')
    Feedback.get('marketing',function(feedback){
        res.render('pages/marketing',{feedback})
    })
})

app.get('/frontend',(req,res)=>{
    let Feedback=require('.models/feedback.js')
    Feedback.get('frontend',function(feedback){
        res.render('pages/frontend',{feedback})
    })
})

app.get('/backend',(req,res)=>{
    let Feedback=require('.models/feedback.js')
    Feedback.get('backend',function(feedback){
        res.render('pages/backend',{feedback})
    })
})

app.get('/uxui',(req,res)=>{
    let Feedback=require('.models/feedback.js')
    Feedback.get('uxui',function(feedback){
        res.render('pages/marketing',{feedback})
    })
})


app.post('/contact',(req,res)=>{
    if(req.body.note===undefined||req.body.avis===''){
        res.render('pages/contact')
    }
    else{
        let Feedback=require('.models/feedback.js')

        Feedback.create(first,last,avis,note,formation,function(){
            console.log("success")
        })
    }
})

app.listen(port, () => console.log(`notre application Node est démarrée sur : http://localhost: ${
port}`))