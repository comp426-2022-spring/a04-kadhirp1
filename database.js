




"use strict";

const Database = require('better-sqlite3');

const db = new Database('log.db');

const stmt = db.prepare(
    `
    SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';
    `
);
let row = stmt.get();
if (row === undefined){
    console.log('Your database is empty. Initialzing')
    const sqlInit = `
        CREATE TABLE userinfo (id INTEGER PRIMARY KEY, 
            remoteaddr VARCHAR, 
            remoteuser VARCHAR,
            time VARCHAR,
            method VARCHAR,
            url VARCHAR,
            protocol VARCHAR,
            httpversion NUMERIC,
            status INTEGER,
            referer VARCHAR,
            useragent VARCHAR);
    `;
    db.exec(sqlInit);
    console.log("Database has been initalized with two dummy users")
} else{
    console.log('Database exists')
}

module.exports = db