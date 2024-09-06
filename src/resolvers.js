const db = require('../config/db');
// const tasks = [
//   { id: '1', title: 'estudar GraphQL', completed: false },
//   { id: '2', title: 'aprender nodejs', completed: false },
// ];

// let idCounter = 1;

const resolvers = {
  getTasks: () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM tasks';
      db.query(sql, (err, results) => {
        if(err) reject(err);
        if(results.length === 0){
          reject('Nao a tarefas');
        }
        else resolve(results);
      });
    });
  },

  getTask: ({ id }) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM tasks WHERE id = ?';
      db.query(sql, [id], (err, results) => {
        if(err) reject(err);
        else resolve(results[0]);
      });
    });
  },

  addTask: ({ title }) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO tasks (title, completed) VALUES (?, ?)';
      db.query(sql, [title, false], (err, results) => {
        if(err) reject(err);
        else {
          const newTask = { id: results.insertId, title, completed: false };
          resolve(newTask);
        };
      });
    });
  },

  updateTask: ({ id, title, completed }) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE tasks SET title = ?, completed = ? WHERE id = ?';
      db.query(sql, [title, completed, id], (err, results) => {
        if(err) reject(err);
        else resolve({ id, title, completed });
      });
    });
  },

  deleteTask: ({ id }) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM tasks WHERE id = ?';
      db.query(sql, [id], (err, results) => {
        if(err) reject(err);
        else resolve('Tarefa deletada com sucesso');
      });
    });
  },
};

module.exports = { resolvers };
