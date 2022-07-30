let connection=require('./config/connection.js')

class Feedback{

    static create(first,last,avis,note,formation,cb){
        connection.query('INSERT INTO feedback SET first_name=?, last_name=?, avis=?, note=?, formation=?',[first,last,avis,note,formation],(err,result)=>{
            if(err) throw err
            cb(err)
        })
    }

    static get(type,cb){
        connection.query('SELECT * FROM feedback WHERE formation =? ',[type],(err,rows)=>{
            if(err) throw err
            else cb(rows)
        })
    }

    static getBests(threshold=8,cb){
        connection.query('SELECT * FROM feedback WHERE note >= ',[threshold],(err,rows)=>{
            if(err) throw err
            else cb(rows)
        })
    }
}

module.exports=Feedback