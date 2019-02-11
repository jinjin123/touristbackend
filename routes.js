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
    app.get('/index/follow', index.follow);
    app.post('/index/follow/add',upload.single('file'), index.fladd);
    app.post('/index/follow/del', urlencodeParser,index.fldel);
    app.get('/index/recomment', index.recomment);
    app.post('/index/recomment/add',upload.single('file'), index.remadd);
    app.post('/index/recomment/del', urlencodeParser,index.remdel);

    app.get('/des/index', des.index);
    app.post('/des/index/add',upload.single('file'), des.add);
    app.post('/des/index/del', urlencodeParser,des.del);
    app.get('/des/recomment/index', des.recomment);
    app.get('/des/node/index', des.node);
    app.post('/des/node/add',upload.array('file'), des.nodeadd);
    app.post('/des/node/del', urlencodeParser,des.nodedel);
    app.get('/des/cate/index', des.cate);
    app.post('/des/cate/add',upload.single('file'), des.cateadd);
    app.post('/des/cate/del', urlencodeParser,des.catedel);

    app.get('/store/index', store.index);
    app.post('/store/add',upload.single('file') ,store.add);
    app.post('/store/del', urlencodeParser ,store.del);
    // app.get('/store/traffic', store.traffic);
    // app.get('/store/auth', store.auth);
    // app.get('/store/ticket', store.ticket);

    app.get('/user/index', user.index);
    app.post('/user/index/add',upload.single('file'), user.add);
    app.post('/user/index/del', urlencodeParser ,user.del);
    app.get('/user/register', user.register);
    app.post('/user/register/add',upload.single('file') ,user.registeradd);
    app.post('/user/register/del', urlencodeParser ,user.regdel);
    app.get('/user/login', user.login);
    app.post('/user/login/add',upload.single('file') ,user.lgadd);
    app.post('/user/login/del', urlencodeParser ,user.lgdel);
    app.get('/user/search', user.search);

    app.post('/usernode/add',upload.array('file',2), user.nodeadd);

    app.get('/api/user/index', user.api_index);
    app.get('/api/login/index', user.api_login_index);
    app.get('/api/reg/index', user.api_reg_index);
    app.get('/api/store/index', store.api_store_index);
    app.get('/api/des/index', des.api_des_index);
    app.get('/api/des/play', des.api_des_play);
    app.get('/api/des/node', des.api_des_node);
    app.get('/api/index/fl', index.api_index_fl);
    app.get('/api/index/rem',index.api_index_rem);
}