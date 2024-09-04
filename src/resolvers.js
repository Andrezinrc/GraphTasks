//tarefas
const tasks = [
  { id: '1', title: 'estudar GraphQL', completed: false },
  { id: '2', title: 'aprender nodejs', completed: false },
];

let idCounter = 1; //contador para o id

const resolvers = {
  getTasks: () => tasks, //busca todas as tarefas

  getTask: ({ id }) => tasks.find(task => task.id == id), //busca tarefa especifica pelo id

  addTask: ({ title }) => { //adiciona uma nova tarefa
    const newTask = { id: idCounter++, title, completed: false };
    tasks.push(newTask);
    return newTask;
  },

  updateTask: ({ id, title, completed }) => { // atualiza uma tarefa
    let task = tasks.find(task => task.id == id);
    if (task) {
      if (title !== undefined) task.title = title;
      if (completed !== undefined) task.completed = completed;
      return task;
    }
    return null;
  },

  deleteTask: ({ id }) => { //deleta uma tarefa
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id != id);
    return tasks.length < initialLength ? 'Tarefa deletada' : 'Tarefa nao encontrada';
  }
};

module.exports = { resolvers };
