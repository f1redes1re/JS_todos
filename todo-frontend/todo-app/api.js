export async function getTodoList(owner) {
  const response = await fetch(`http://localhost:3000/api/todos?owner=${owner}`);
  return await response.json();
}

export async function createTodoItem( { owner, name }) {
  // eslint-disable-next-line no-shadow
  const response = await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    body: JSON.stringify({
      name,
      owner,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

export function switchTodoItemDone({ todoItem }) {
  todoItem.done = !todoItem.done;
  fetch(`http://localhost:3000/api/todos/${todoItem.id}`, {
    method: 'PATCH',
    body: JSON.stringify({ done: todoItem.done }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function deleteTodoItem( { element, todoItem }) {
  // eslint-disable-next-line no-restricted-globals
  if (!confirm('Вы уверены?')) {
    // eslint-disable-next-line no-useless-return
    return;
  }
  element.remove();
  fetch(`http://localhost:3000/api/todos/${todoItem.id}`, {
    method: 'DELETE',
  });
}
