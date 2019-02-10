"use strict";

var config = require('../config');
var userDBModel = require('../models/userimg.js');
var crypt = require('../utils/crypt.js');
var userimg =new userDBModel.Schema("userimg").model;
var basicAuth = require("basic-auth");

exports.login = function (req, res ) {
        function unauthorized(res) {
            console.log("需要登录");
            res.set('WWW-Authenticate', 'Basic realm=Input User&Password');
            return res.sendStatus(401);
        }
    
        var user = basicAuth(req);
    
        if (!user || !user.name || !user.pass) {
            return unauthorized(res);
        }
    
    
        if (user.name === 'sj' && user.pass === '123') {
            //return next();
            var data = {}
            data.title   = '首页关注';
            data.content = 'index-follow';
            console.log("login success");
            res.render('index',data)
        } else {
            console.log("未能登录");
            return unauthorized(res);
        }

};
exports.recomment = function (req, res ) {
    var data = {}
    data.title   = '首页推荐';
    data.content = 'index-recomment';
    console.log("login success");
    res.render('index',data)    
};
 exports.addUser = function (){
     var userEntity = new user();
     userEntity.userName=req.body.userName;
     userEntity.password=req.body.password;
     userEntity.save(function (err,userInfo){

     })
 };

exports.userList=function(req, res, next){
     user.find({},function(err,userList){
         res.render('./user/users.html',{userList:userList});

    });

};

exports.userManager = function (req,res,next){

};
