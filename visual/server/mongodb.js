var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test_database';

exports.distinct = function(table, filed, callback) {
    const distinct = function(db, table, filed, callback) {
        var collection = db.collection(table);
        collection.distinct(filed, function(err, result) {
            if(err) throw(err);
            callback(result);
        });    
    }
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        distinct(db, table, filed, function(res) {
            callback(res);
            db.close();
        });
    });
}

exports.findOne = function(table, filed, callback) {
    const findOne = function(db, table, filed, callback) {
        var collection = db.collection(table);
        collection.findOne(filed, function(err, result) {
            if(err) throw(err);
            callback(result);
        });    
    }
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        findOne(db, table, filed, function(res) {
            console.log(res);
            callback(res);
            db.close();
        });
    });
}

exports.count = function(table, filed, callback) {
    const count = function(db, table, filed, callback) {
        var collection = db.collection(table);
        collection.count(filed, function(err, result) {
            if(err) throw(err);
            callback(result);
        });    
    }
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        count(db, table, filed, function(res) {
            callback(res);
            db.close();
        });
    });
}

exports.aggregate = function(table, filed, callback) {
    const aggregate = function(db, table, filed, callback) {
        var collection = db.collection(table);
        collection.aggregate(filed, function(err, result) {
            if(err) throw(err);
            callback(result);
        });    
    }
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        aggregate(db, table, filed, function(res) {
            callback(res);
            db.close();
        });
    });
}