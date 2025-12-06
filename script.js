const ding = new Audio('ding.mp3');

ding.addEventListener('error', () => {
  console.warn('Ding sound could not be loaded. Sound will be disabled.');
});

const STORAGE_KEY = 'tasks';
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function createTaskNode(task, index) {
  const li = document.createElement('li');
  li.setAttribute('data-index', index);
  li.tabIndex = 0;

  const textSpan = document.createElement('span');
  textSpan.textContent = task.text;
  li.appendChild(textSpan);

  const del = document.createElement('button');
  del.className = 'delete-btn';
  del.setAttribute('aria-label', `Delete ${task.text}`);
  del.textContent = '✖';
  li.appendChild(del);

  if (task.done) li.classList.add('done');

  return li;
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, idx) => {
    const node = createTaskNode(task, idx);
    taskList.appendChild(node);
  });
}

function addTaskFromInput() {
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  saveTasks();
  renderTasks();

  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTaskFromInput);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTaskFromInput();
});

taskList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  const idx = Number(li.getAttribute('data-index'));

  if (e.target.classList.contains('delete-btn')) {
    tasks.splice(idx, 1);
    saveTasks();
    renderTasks();
    return;
  }

  const task = tasks[idx];
  if (!task) return;

  if (!task.done) {
    ding.play().catch(() => {});
  }

  task.done = !task.done;
  saveTasks();
  renderTasks();
});

renderTasks();