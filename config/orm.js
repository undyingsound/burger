let connection = require('../config/connection.js');

function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

function objtoSql(ob) {
    let arr = [];

    for (let key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

let orm = {
    selectAll: function (table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table + " SET " + objtoSql(objColVals) + " WHERE " + condition;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        let queryString = 'DELETE FROM ' + table + ' WHERE ' + condition;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}


module.exports = orm;