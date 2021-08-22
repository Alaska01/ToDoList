export const projectFactory = (name) => ({ id: Date.now().toString(), name, tasks: [] });

export const toDoListFactory = (title, description, dueDate, prior) => ({
  id: Date.now().toString(), title, description, dueDate, prior,
});