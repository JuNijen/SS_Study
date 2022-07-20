const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const methodOverride = require('method-override')
var db;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
require('dotenv').config();


MongoClient.connect(process.env.DB_URL, function(error, client)
{
    if(error)
    {
        return console.log(error)
    }
    app.listen(process.env.PORT, function()
    {
        console.log('Server.js/connect :: listening on ' + process.env.PORT)
    });


    db = client.db('todoapp');
})


//get
app.get('/', function(req, res)
{
    res.render('index.ejs');
    // res.sendFile(__dirname + '/webpage/register/index.html')
    // res.sendFile(__dirname + '/index.html')
});

app.get('/write', function(req, res)
{
    res.render('write.ejs');
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

// 기존의 데이터 확인하고 수정 가능하도록 보완 필요
app.get('/edit/:id', function(req, res)
{
    db.collection('post').findOne({ _id : parseInt(req.params.id) }, function(error, result)
    {
        console.log(result);
        res.render('edit.ejs', { data : result });
    })
});

app.get('/mypage', checkLogin, function(req, res){
    console.log('Server.js/mypage :: ' + req.user);
    res.render('mypage.ejs', {user : req.user})
});

function checkLogin(req, res, next)
{
    if (req.user)
    {
        next()
    }
    else 
    {
        res.send('로그인이 필요합니다.')
    }

}


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


app.put('/edit', function(req, res){

    db.collection('post').updateOne( { _id: req.body.id}, {$set : { title : req.body.title , date : req.body.date }} , function(error, result)
    {
      console.log('Server.js/edit :: finished edit');
      res.redirect('/list') 
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


// Login
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');

app.use(session({secret : 'mongodb+srv://admin:needsmorelove1234@cluster0.r27lv.mongodb.net/?retryWrites=true&w=majority', resave : true, saveUninitialized : false}))
app.use(passport.initialize());
app.use(passport.session()); 


app.get('/login', function(req, res){
    res.render('login.js')
});

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/fail'
}), function (req, res) {
    console.log('Server.js/login :: ' + res.id);
    res.redirect('/')
});

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    session: true,              //세션을 만들것인지
    passReqToCallback: false,   //id, pw외에 다른 정보검사가 필요한지
}, function (input_id, input_pw, done) {
    db.collection('login').findOne({
        id: input_id
    }, function (error, result) {
        if (error) {        
            console.log('Server.js/passport.use :: ' + error);   
            return done(error)
        }
        if (!result) {
            return done(null, false, {
                message: '존재하지 않는 회원정보입니다.'
            })
        }
        // 기능 구현 및 테스트 이후 암호화 필요
        if (input_pw == result.pw) {
            return done(null, result)
        } else {
            return done(null, result, {
                message: '잘못된 회원정보 입력입니다.'
            })
        }
    })
}));

passport.serializeUser(function (user, done) {
    done(null, user.id)
});

// DB에서 위에 있는 user.id로 유저를 찾은 뒤 유저 정보를 받아옴.
passport.deserializeUser(function (user_id, done) {
    db.collection('login').findOne({id : user_id}, function(error, result)
    {
        done(null, result)
    })
});