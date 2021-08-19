import { projectFactory, toDoListFactory } from './factories';
import { clearElement } from './logic';

const PROJECTS_KEY = 'projects';
let projects = JSON.parse(localStorage.getItem(PROJECTS_KEY)) || [{ id: '1603023086264', name: 'Default ', tasks: [] }];
/* eslint-disable no-use-before-define */
const SELECTED_PROJECTS_KEY = 'selectedProjectId';
let selectedProjectId = localStorage.getItem(SELECTED_PROJECTS_KEY);

const content = document.getElementById('content');
const container = document.getElementById('container');
const listsContainer = document.querySelector('[data-lists]');
const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');
const tasksContainer = document.querySelector('[data-tasks]');
const deleteProjectBtn = document.querySelector('.delProject');
const projectForm = document.getElementById('project-form');

export const showTodos = (selectedList) => {
  selectedList.tasks.forEach((task, idx) => {
    // show the title as a btn
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'todolist-list');
    const viewBtn = document.createElement('button');
    viewBtn.innerText = task.title;
    ul.appendChild(viewBtn);
    tasksContainer.appendChild(ul);

    // show the description, due date and priority
    const {
      description, dueDate, prior,
    } = task;
    const headings = ['Description', 'DueDate', 'Priority'];
    const values = [description, dueDate, prior];

    const font = document.createElement('i');
    font.classList.add('fa');
    font.classList.add('fa-caret-down');

    viewBtn.appendChild(font);
    viewBtn.setAttribute('class', 'todo');

    const div = document.querySelector('[data-tasks]');
    div.appendChild(viewBtn);

    const todoContainer = document.createElement('div');
    todoContainer.setAttribute('id', `${task.title}Wrapper`);

    todoContainer.classList.add('inactive');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const icons = ['fa-info-circle', 'fa-sticky-note', 'fa-calendar-check-o'];
    for (let i = 0; i < 3; i += 1) {
      const card = document.createElement('div');
      const h1 = document.createElement('h1');
      const icon = document.createElement('i');
      icon.style.float = 'left';
      icon.classList.add('fa');
      icon.classList.add(icons[i]);
      icon.setAttribute('aria-hidden', 'true');
      h1.textContent = `${headings[i]}`;
      h1.style.padding = '20px';
      h1.style.background = '#f7f7f7';
      h1.appendChild(icon);
      const p = document.createElement('p');
      p.style.padding = '20px';
      p.textContent = `${values[i]}`;
      card.appendChild(h1);
      card.appendChild(p);
      cardBody.appendChild(card);
    }
    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.setAttribute('type', 'button');
    editBtn.setAttribute('class', 'editBtn');
    cardBody.appendChild(editBtn);

    // edit functionality
    const editDiv = document.createElement('div');
    editDiv.style.background = '#f7f7f7';
    editDiv.style.borderTop = '5px solid black';
    editDiv.setAttribute('id', `${task.title}Edit`);
    editDiv.classList.add('inactive');
    editDiv.classList.add('card-body');
    editDiv.classList.add('edit');
    const data = document.createElement('p');
    data.innerHTML = `Editing ${task.title}... `;
    data.style.textAlign = 'center';
    data.style.margin = '14px 0px';
    editDiv.appendChild(data);
    const form = document.createElement('form');
    form.setAttribute('id', `${task.title}EditForm`);
    const nameAttributes = ['Title', 'Description', 'Priority'];

    for (let i = 0; i < nameAttributes.length; i += 1) {
      const label = document.createElement('label');
      const head = document.createElement('h1');
      head.innerHTML = nameAttributes[i];
      head.style.background = 'rgb(247, 247, 247)';
      head.style.padding = '20px';
      head.style.paddingLeft = '14px';
      const icon = document.createElement('i');
      icon.style.paddingTop = '20px';
      icon.style.paddingBottom = '20px';
      icon.style.paddingLeft = '20px';
      icon.style.marginRight = '14px';
      icon.style.float = 'left';
      icon.classList.add('fa');
      icon.classList.add(icons[i]);
      icon.setAttribute('aria-hidden', 'true');

      label.appendChild(icon);
      label.appendChild(head);
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('name', nameAttributes[i]);
      input.setAttribute('id', nameAttributes[i]);

      if (i == null || i === '') {
        return false;
      }
      label.appendChild(input);
      form.appendChild(label);
      form.appendChild(document.createElement('br'));
      form.appendChild(document.createElement('br'));
    }

    const updateBtn = document.createElement('button');
    updateBtn.setAttribute('type', 'submit');
    updateBtn.innerHTML = 'Update';
    updateBtn.setAttribute('class', 'update');
    form.appendChild(updateBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.innerHTML = 'Cancel';
    cancelBtn.setAttribute('class', 'cancel');
    form.appendChild(cancelBtn);

    const formElements = form.elements;
    formElements[0].value = task.title;
    formElements[1].value = task.description;
    formElements[2].checked = task.prior;
    editDiv.appendChild(form);
    todoContainer.appendChild(cardBody);
    todoContainer.appendChild(editDiv);

    div.appendChild(todoContainer);
    content.appendChild(div);
    content.appendChild(document.createElement('br'));
    container.appendChild(content);

    viewBtn.addEventListener('click', () => {
      const wd = document.getElementById(`${task.title}Wrapper`);
      const ed = document.getElementById(`${task.title}Edit`);
      const wdCurCls = wd.getAttribute('class');
      const edCurCls = ed.getAttribute('class');
      if (wdCurCls === 'active') {
        wd.classList.remove('active');
        wd.classList.add('inactive');
      } else {
        wd.classList.remove('inactive');
        wd.classList.add('active');
      }
      if (edCurCls === 'active') {
        ed.classList.remove('active');
        ed.classList.add('inactive');
      }
    });

    editBtn.addEventListener('click', () => {
      const ed = document.getElementById(`${task.title}Edit`);
      const edcls = ed.getAttribute('class');
      const arr = edcls.split(' ');
      if (arr.includes('active')) {
        ed.classList.remove('active');
        ed.classList.add('inactive');
      } else {
        ed.classList.remove('inactive');
        ed.classList.add('active');
      }
    });

    cancelBtn.addEventListener('click', () => {
      const ed = document.getElementById(`${task.title}Edit`);
      ed.classList.remove('active');
      ed.classList.add('inactive');
    });

    updateBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const formElements = form.elements;
      task.title = formElements[0].value;
      task.description = formElements[1].value;
      task.prior = formElements[2].value;
      saveAndRender();
    });

    // delete todos functionality
    const delBtn = document.createElement('button');
    delBtn.setAttribute('type', 'button');
    delBtn.setAttribute('class', 'deleteBtn');
    delBtn.innerHTML = 'Delete';
    cardBody.appendChild(delBtn);

    delBtn.addEventListener('click', (e) => {
      e.preventDefault();
      selectedList.tasks.splice(idx, 1);
      saveAndRender();
    });
    return false;
  });
};

const showProjects = () => {
  projects.forEach((project) => {
    const listElement = document.createElement('li');
    listElement.dataset.projectId = project.id;
    listElement.classList.add('list-name');
    listElement.innerText = project.name;
    if (project.id === selectedProjectId) {
      listElement.classList.add('active-list');
    }
    listsContainer.appendChild(listElement);
  });
};

export const render = () => {
  clearElement(listsContainer);
  showProjects();

  const selectedList = projects.find((project) => project.id === selectedProjectId);
  if (selectedProjectId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElement.innerText = selectedList.name;
    clearElement(tasksContainer);
    showTodos(selectedList);
  }
};

const save = () => {
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  localStorage.setItem(SELECTED_PROJECTS_KEY, selectedProjectId);
};

const saveAndRender = () => {
  save();
  render();
};

listsContainer.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedProjectId = e.target.dataset.projectId;
    saveAndRender();
  }
});

deleteProjectBtn.addEventListener('click', () => {
  projects = projects.filter((project) => project.id !== selectedProjectId);
  selectedProjectId = null;
  saveAndRender();
});

const toDoListForm = document.getElementById('todolist-form');
const listSubmit = document.getElementById('list-submit');
listSubmit.addEventListener('click', (event) => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('date').value;
  const prior = document.querySelector("input[name='priority']:checked").value;

  const selectedList = projects.find((project) => project.id === selectedProjectId);
  selectedList.tasks.push(toDoListFactory(title, description, dueDate, prior));

  toDoListForm.reset();
  toDoListForm.style.display = 'none';
  event.preventDefault();
  saveAndRender();
});

projectForm.addEventListener('submit', (event) => {
  const name = document.getElementById('project-name').value;

  if (name == null || name === '') {
    return false;
  }

  projects.push(projectFactory(name));
  saveAndRender();
  event.preventDefault();
  return false;
});
