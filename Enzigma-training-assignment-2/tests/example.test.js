const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); 
const expect = chai.expect;
let taskId; 

chai.use(chaiHttp);

describe('API Tests', () => {
  it('should return health status', (done) => {
    chai.request(server) 
      .get('/api/health')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal('ok');
        done();
      });
  });

it('should create a new task', (done) => {
  const newTask = {
    title: 'Test Task',
    description: 'This is a test task',
    completed: false
  };

  chai.request(server)
    .post('/api/task')
    .send(newTask)
    .end((err, res) => {
      if (err) return done(err);
      expect(res).to.have.status(201);  
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('title', 'Test Task');
      done();
    });
  });

  it('should GET all tasks', (done) => {
    chai.request(server)
      .get('/api/task')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should update an existing task', (done) => {
    const newTask = {
      title: 'Test Task',
      description: 'This is a test task',
      completed: false
    };
  
    chai.request(server)
      .post('/api/task')
      .send(newTask)
      .end((err, res) => {
        if (err) return done(err);

        const taskId = res.body._id;
        console.log('Created Task ID:', taskId); 
  
        const updatedTask = {
          title: 'Updated Test Task',
          description: 'This is the updated description'
        };
  
        chai.request(server)
          .put(`/api/task/${taskId}`) 
          .send(updatedTask)
          .end((err, res) => {
            if (err) return done(err);
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('title', 'Updated Test Task');
            expect(res.body).to.have.property('description', 'This is the updated description');
            done();
          });
      });
  });


  it('should delete an existing task', (done) => {
    const newTask = {
      title: 'Test Task',
      description: 'This is a test task',
      completed: false
    };
  
    chai.request(server)
      .post('/api/task') 
      .send(newTask)
      .end((err, res) => {
        if (err) return done(err);
        const taskId = res.body._id;
  
        chai.request(server)
          .delete(`/api/task/${taskId}`) 
          .end((err, res) => {
            if (err) return done(err);
  
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Task deleted successfully.');
            done();
          });
      });
  }); 


});
