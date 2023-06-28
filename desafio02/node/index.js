const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'desafio02db'
};

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const createTable = `CREATE TABLE people (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255))`

const sql = `INSERT INTO people(name) values('Felipe')`
const peoples = `SELECT * FROM people;`
connection.query(createTable)
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1> Full Cycle </h1>')
    res.send(`<h2> ${peoples} </h2>`)
})

app.listen(port, () => {
    console.log('rodando na porta ' + port)
})