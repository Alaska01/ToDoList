export const todobtn = () => {
  document.querySelector('.newtodo').addEventListener('click', () => {
    if (document.getElementById('todolist-form').style.display === 'none') {
      document.getElementById('todolist-form').style.display = 'block';
    }
  });
};

export const formEvent = () => {
  const todoform = document.getElementById('todolist-form');
  todoform.setAttribute('class', 'active');
  document.querySelector('.newtodo').addEventListener('click', () => {
    if (todoform.getAttribute('class')) {
      todoform.style.display = 'block';
    }
  });
};

export const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};