let tasks = [];
let idCounter = 1;

const resolvers = {
  getTasks: () => tasks,

  getTask: ({ id }) => tasks.find(task => task.id == id),

  addTask: ({ title }) => {
    const newTask = { id: idCounter++, title, completed: false };
    tasks.push(newTask);
    return newTask;
  },

  updateTask: ({ id, title, completed }) => {
    let task = tasks.find(task => task.id == id);
    if (task) {
      if (title !== undefined) task.title = title;
      if (completed !== undefined) task.completed = completed;
      return task;
    }
    return null;
  },

  deleteTask: ({ id }) => {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id != id);
    return tasks.length < initialLength ? 'Tarefa deletada' : 'Tarefa nao encontrada';
  }
};

module.exports = { resolvers };
