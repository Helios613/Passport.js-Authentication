const express = require('express');
const cookieParser=require('cookie-parser');
const app = express();
const port = 3000;
const path = require('path'); 
const db = require('./config/mongoose');
const Users = require('./model/user_model');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static(__dirname ));
app.set('view engine','ejs' );
app.set('views',path.join(__dirname,'/views'));


app.use(session({
    name: 'app',
    secret: 'secrethuh',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000*60*60*24)
    }
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes/index'));




app.listen(port, function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    else{
        console.log('Server is running on port: ',port);
    }
})