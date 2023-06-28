const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'desafio02db'
};

const mysql = require('mysql2');
const connection = mysql.createConnection(config);

const createTable = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255))`;

const insertQuery = `INSERT INTO people(nome) VALUES('Felipe')`;

const selectQuery = `SELECT * FROM people`;

connection.query(createTable, (error) => {
  if (error) {
    console.error('Erro ao criar a tabela:', error);
    connection.end();
    return;
  }

  connection.query(insertQuery, (error) => {
    if (error) {
      console.error('Erro ao inserir dados:', error);
      connection.end();
      return;
    }

    connection.query(selectQuery, (error, results) => {
      if (error) {
        console.error('Erro ao executar a consulta:', error);
        connection.end();
        return;
      }

      const result = results;
      connection.end();
      app.get('/', (req, res) => {
        res.send(`<h1>Full Cycle</h1><h2>${JSON.stringify(result)}</h2>`);
      });
      app.listen(port, () => {
        console.log('Rodando na porta ' + port);
      });
    });
  });
});
