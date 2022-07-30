const mysql=require('mysql')

let connection=mysql.createConnection({
    host:'localhost',
    user:'sayna',
    password:'sayna-d-clic',
    database:'feedback'
})

connection.connect()

module.exports=connection