var express = require('express');
var app = express();



//远程修改

var fs = require('fs');

app.get('/',function(request,response){
    response.send('hello world')
})


app.get('/user',function(){

})
app.post('/user',function(){

})
app.put('/user',function(){

})
app.delete('/user',function(){

})

app.get('/home',function(request,response){
    response.send('home page')
})

app.get('/list',function(request,response){
    response.send('list page')
})

// app.get('/data',function(req,res){
//
//       console.log('data')
//         // fs.readFile('./data.json',function(err,data){
//         //     if(err){
//         //       console.log(err)
//         //     }else {
//         //       console.log(data.toString())
//         //     }
//         // })
// })

app.get('/index',function(req,res){
    // res.sendFile('./index.html')
    res.sendFile(__dirname + '/index.html')
})

app.get('/getdata',function(req,res){
    console.log('get data')
    fs.readFile('./data.json',function(err,data){
         if(err){
           console.log(err)
         }else {
          var data = data.toString();
          var json = JSON.parse(data);
          res.jsonp(json);
         }
     })
})

app.listen(3600,function(){
  console.log('server start....')
})


//restful api
// $.ajax({
//   url:'http://localhost:3000/user',
//   type:'put'
// })


// $.ajax({
//     url:'http://localhost:3000/adduser',
//     type:'post',
//     data:{}
// })
//
// $.ajax({
//     url:'http://localhost:3000/delteuser',
//     type:'post',
//     data:{}
// })
