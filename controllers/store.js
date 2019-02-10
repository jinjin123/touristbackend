'use strict'
exports.index = function (req, res ) {
        var data = {};
        data.title   = '目的地';
        data.content = 'store-index';
        res.render('index',data)
};

exports.traffic = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'store-traffic';
    res.render('index',data)
};
exports.auth = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'store-auth';
    res.render('index',data)
};

exports.ticket = function (req, res ) {
    var data = {};
    data.title   = '目的地';
    data.content = 'store-ticket';
    res.render('index',data)
};