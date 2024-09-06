import { expect } from 'chai';
import resolvers from '../src/resolvers.js';
import db from '../config/db.js';

describe('Resolvers', function () {
  beforeEach((done) => {
    db.query('DELETE FROM tasks_test', done);
  });

  it('deve retornar todas tarefas', async function () {
    await resolvers.addTask({ title: 'Aprender GraphQL' });
    const result = await resolvers.getTasks();
    expect(result).to.be.an('array');
    expect(result[0]).to.have.property('title', 'Aprender GraphQL');
  });

  it('deve retornar uma tarefa específica', async function () {
    const existingTaskId = 3;
    await resolvers.addTask({ title: 'Criar API REST' });
    const result = await resolvers.getTask({ id: existingTaskId });
    expect(result).to.be.an('object');
    expect(result).to.have.property('id', existingTaskId);
    expect(result).to.have.property('title', 'Criar API REST');
  });

  it('deve adicionar uma nova tarefa', async function () {
    const novaTarefa = { title: 'Tarefa de Teste' };
    const result = await resolvers.addTask(novaTarefa);
    expect(result).to.be.an('object');
    expect(result).to.have.property('title', 'Tarefa de Teste');
    expect(result).to.have.property('completed', false);
    await resolvers.deleteTask(result.id);
  });

  it('deve atualizar uma tarefa', async function () {
    const existingTaskId = 2;
    await resolvers.addTask({ title: 'Tarefa para atualizar' });
    const result = await resolvers.updateTask({title: 'Tarefa Atualizada', completed: false,  id: existingTaskId });
    expect(result).to.be.an('object');
    expect(result).to.have.property('title', 'Tarefa Atualizada');
  });

  it('deve deletar uma tarefa', async function () {
    const existingTaskId = 13;
    await resolvers.addTask({ title: 'Tarefa para deletar' });
    const result = await resolvers.deleteTask({ id: existingTaskId });
    expect(result).to.equal('Tarefa deletada com sucesso');
  });
});
