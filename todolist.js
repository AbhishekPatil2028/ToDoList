


const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) return alert('Please enter a task!');

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = val;
  span.className = 'text';

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.className = 'edit';
  editBtn.addEventListener('click', () => {
    const newVal = prompt('Edit task:', span.textContent);
    if (newVal !== null && newVal.trim() !== '') {
      span.textContent = newVal.trim();
    }
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = '✖';
  delBtn.className = 'delete';
  delBtn.addEventListener('click', () => list.removeChild(li));

  span.addEventListener('click', () => li.classList.toggle('completed'));

  li.append(span, editBtn, delBtn);
  list.appendChild(li);
  input.value = '';
});
