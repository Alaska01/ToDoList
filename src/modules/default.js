import Todo from './todo';
import Project from './project';

const createDefault = (() => {
  const dProject = () => {
    if (!localStorage.key('todoapp')) {
      const project = [];
      project.push(new Project(1, 'General'));
      const t1 = new Todo(1, 'Tech Meet Up', 'Abuja Team', '2021-08-02T12:21', 'High');
      const t2 = new Todo(2, 'Rails Meetup', 'With students', '2021-08-02T12:21', 'Medium');
      project[0].todoList.push(t1);
      project[0].todoList.push(t2);
      localStorage.setItem('todoapp', JSON.stringify(project));
    }
    return true;
  };

  return { dProject };
})();

export default createDefault;