const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
var db;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');


MongoClient.connect('mongodb+srv://admin:needsmorelove1234@cluster0.r27lv.mongodb.net/?retryWrites=true&w=majority', function(error, client)
{
    if(error)
    {
        return console.log(error)
    }
    app.listen(8080, function()
    {
        console.log('Server.js/connect :: listening on 8080')
    });


    db = client.db('todoapp');
    // db.collection('post').insertOne({_id:0, name:'ruhr', age:24}, function(error, result)
    // {
    //     console.log('MongoDB :: finished saving');
    // });
})


//get
app.get('/', function(req, res)
{
    // res.sendFile(__dirname + '/webpage/register/index.html')
    res.sendFile(__dirname + '/index.html')
});

app.get('/write', function(req, res)
{
    res.sendFile(__dirname + '/webpage/write.html')
    // res.send('메인 페이지입니다.');
});

app.get('/list', function(req, res)
{
    db.collection('post').find().toArray(function(error, result)
    {
        console.log(result);
        res.render('list.ejs', { list : result });
    });
});

app.get('/list-detail/:id', function(req, res)
{
    db.collection('post').findOne({ _id : parseInt(req.params.id) }, function(error, result)
    {
        console.log(result);
        res.render('list-detail.ejs', { data : result });
    })
});




//post
//if somebody POST /add from form
app.post('/add', function(req, res){
    res.send('Server.js/add :: finished add');
    console.log(req.body.date);
    console.log(req.body.title);

    //find db.counter's 'post_count'
    db.collection('counter').findOne({name : 'post_count'}, function(error, result)
    {
        console.log(result.count);
        var id = result.count;

        // add new data to DB.post
        db.collection('post').insertOne( { _id: id + 1, title : req.body.title, date : req.body.date } , function()
        {
          console.log('Server.js/add :: finished saving');

          // 한 번에 많은 것을 수정하고 싶으면 .updateMany()
          db.collection('counter').updateOne({name:'post_count'}, { $inc : {count : 1}}, function(error, result)
          {
            if(error)
            {
                return console.log(error)
            }
          })
        });
    });
});



app.delete('/todo-delete', function(req, res)
{
    console.log(req.body)
    req.body._id = parseInt(req.body._id);

    db.collection('post').deleteOne(req.body, function(error, result)
    {
        console.log('Server.js/todo-delete :: deleted data');
        res.status(200).send({message : 'Server.js/todo-delete :: success'});
    })
})