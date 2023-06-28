const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'desafio02db'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Felipe')`
const peoples = `SELECT * FROM people;`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1> Full Cycle </h1>')
    res.send(`<h2> ${peoples} </h2>`)
})

app.listen(port, () => {
    console.log('rodando na porta ' + port)
})