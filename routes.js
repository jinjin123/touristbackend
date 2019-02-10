'use strict';
const index = require('./controllers/index');
const des = require('./controllers/des');
const store = require('./controllers/store');
const user = require('./controllers/user');
const bodyParser = require('body-parser');
const multer = require('multer');
const urlencodeParser = bodyParser.urlencoded({extended: false});
const  storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/images')  //这里是图片存储路劲
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
});
const upload = multer({
    storage: storage
});

module.exports = (app) =>{
    app.get('/', index.login);
    app.get('/index/recomment', index.recomment);

    app.get('/des/index', des.index);
    app.get('/des/recomment', des.recomment);
    app.get('/des/node', des.node);
    app.get('/des/cate', des.cate);

    app.get('/store/index', store.index);
    app.get('/store/traffic', store.traffic);
    app.get('/store/auth', store.auth);
    app.get('/store/ticket', store.ticket);

    app.get('/user/index', user.index);
    app.post('/user/index/add',upload.single('file'), user.add);
    app.post('/user/index/del', urlencodeParser ,user.del);
    app.get('/user/register', user.register);
    app.post('/user/register/add',upload.single('file') ,user.registeradd);
    app.post('/user/register/del', urlencodeParser ,user.regdel);
    app.get('/user/login', user.login);
    app.get('/user/search', user.search);
}