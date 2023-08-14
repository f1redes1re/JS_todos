function createAppTitle(title) {
  // Инициализация функции создания заголовка приложения
  let appTitle = document.createElement('h2');
  // Создание переменной для элемента заголовка
  appTitle.innerHTML = title;
  // Задание значения элемента заголовка через аргумент функции
  return appTitle;
  // Вызов значения элемента заголовка
}
function createTodoItemForm() {
  // Инициализация функции создания и наполнения формы
  let form = document.createElement('form');
  // Задание переменной для формы
  let input = document.createElement('input');
  // Задание переменной для ввода
  let buttonWrapper = document.createElement('div');
  // Задание переменной для контейнера кнопки добавления дел
  let button = document.createElement('button');
  // Задание переменной для кнопки добавления дел
  form.classList.add('input-group', 'mb-3');
  // Добавление классов бутстрапа форме
  input.classList.add('form-control');
  // Добавление классов бутстрапа вводу
  input.placeholder = 'Введите название нового дела';
  // Добавление плейсхолдера для ввода
  buttonWrapper.classList.add('input-group-append');
  // Добавление классов бутстрапа контейнеру кнопки добавления дел
  button.classList.add('btn', 'btn-primary');
  // Добавление классов бутстрапа кнопке добавления дел
  button.textContent = 'Добавить дело';
  // Добавление контента кнопке добавления дел
  button.disabled = true;
  // Добавление первоначального состояния кнопке добавления дел

  buttonWrapper.append(button);
  // Добавление кнпоки в контейнер для кнопки добавления дела в форму
  form.append(input);
  // Добавление поля ввода в форму
  form.append(buttonWrapper);
  // Добавление контейнера для кнопки добавления дела в форму

  input.addEventListener('input', () => {
    // Проверка значения поля ввода на предмет наличия контента
    if (input.value.trim() !== '') {
      // Проверка наличия контента с учетом пробелов (их убирает встроенная функция trim)
      button.disabled = false;
      // Если контент присутствует, то кнопка становится активной
    } else {
      button.disabled = true;
      // Если контент отсутствует, то кнопка становится неактивной
    }
  });

  return {
    form,
    // Вызов элемента формы
    input,
    // Вызов элемента ввода
    button,
    // Вызов элемента кнопки
  };
}
function createTodoList() {
  // Инициализация функции создания списка дел
  let list = document.createElement('ul');
  // Задание переменной списка для списка дел
  list.classList.add('list-group');
  // Добавление бутстрап класса для переменной списка дел
  return list;
  // Вызов переменной списка дел
}
function createTodoItem(todo) {
  // Инициализация функции создания дела
  let item = document.createElement('li');
  // Задание переменной для элемента дела
  let buttonGroup = document.createElement('div');
  // Задание переменной для контейнера кнопок
  let doneButton = document.createElement('button');
  // Задание переменной для состояния "Готово" для кнопки
  let deleteButton = document.createElement('button');
  // Задание переменной для состояния "Удалить" для кнопки

  item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  // Устанавливаем бутстрап классы со стилями для элемента дела
  item.textContent = todo.name;
  // Задаем делу имя через переменную в функции (используется textContent
  // вместо innerHTML для того, чтобы если при вводе текста были введены
  // специальные символы - они не оказывали влияния на сам код, оставались строкой)
  if (todo.done) {
    // Добавление условия, если у дела свойство done = true
    item.classList.add('list-group-item-success');
    // Если done = true, то добавляется класс бутстрап
  }
  buttonGroup.classList.add('btn-group', 'btn-group-sm');
  // Устанавливаем бутстрап классы со стилями для контейнера кнопок
  doneButton.classList.add('btn', 'btn-success');
  // Устанавливаем бутстрап классы со стилями для состояния "Готово" соответствующей кнопки
  doneButton.textContent = 'Готово';
  // Устанавливаем текст для кнопки выполнения
  deleteButton.classList.add('btn', 'btn-danger');
  // Устанавливаем бутстрап классы со стилями для состояния "Удалить" соответствующей кнопки
  deleteButton.textContent = 'Удалить';
  // Устанавливаем текст для кнопки удаления

  buttonGroup.append(doneButton);
  // Добавляем кнопку "Готово" в контейнер с кнопками
  buttonGroup.append(deleteButton);
  // Добавляем кнопку "Удалить" в контейнер с кнопками
  item.append(buttonGroup);
  // Добавляем контейнер с кнопками внутрь элемента дела

  return {
    // Вызываем нижеуказанные элементы
    item,
    // Вызов элемента дела
    doneButton,
    // Вызов кнопки "Готово"
    deleteButton,
    // Вызов кнопки "Удалить"
    // setDone,
    // Вызов метода проверки готовности для элемента списка дел
  };
}
function createTodoArray() {
  // Инициализация функции создания массива дел
  let ArrayTodos = [];
  // Создание массива дел
  return ArrayTodos;
  // Вызов массива дел
}
function saveTodoToLocalStorage(listName, todoArray) {
  localStorage.setItem(listName, JSON.stringify(todoArray));
}
function getTodoLocalStorage(listName) {
  let storage = localStorage.getItem(listName);
  let DOMstorage = JSON.parse(storage);
  return DOMstorage;
}
function createTodoApp(container, title = 'Список дел', listName) {
  // Инициализация функции создания приложения, принимающего два значения: контейнер и заголовок
  let todoAppTitle = createAppTitle(title);
  // Создание переменной для функции создания названия приложения
  let todoItemForm = createTodoItemForm();
  // Создание переменной для функции создания формы
  let todoList = createTodoList();
  // Создание переменной для функции создания списка дел
  let todoArray = createTodoArray();
  // Создание функции создания массива дел
  container.append(todoAppTitle);
  // Добавление в контейнер переменной функции создания названия приложения
  container.append(todoItemForm.form);
  // Добавление в контейнер переменной функции создания формы
  container.append(todoList);
  // Добавление в контейнер переменной функции создания списка дел
  let todoExpression = getTodoLocalStorage(listName);
  // Создание переменной массиву дел
  if (todoExpression && todoExpression.length > 0) {
    // Проверка: если длина масива дел больше "0"
    todoArray = todoExpression;
    // Создание дополнительной переменной для массива дел
    for (let i = 0; i < todoExpression.length; i++) {
      // Создание цикла, прогоняющего массив дел через функцию createTodoItem
      let current = todoExpression[i];
      // Создание переменной значению i индекса объекта todoExpression (дело)
      let todoItem = createTodoItem(current);
      // Создание переменной нового элемента, содержащего введенные данные
      todoItem.doneButton.addEventListener('click', () => {
      // Создание обработчика события клика на кнопке "Готово"
        todoItem.item.classList.toggle('list-group-item-success');
        const index = todoArray.findIndex((element) => element.id === current.id);
        // Поиск индекса элемента в массиве объектов дел, соответствующего удаляемому элементу
        if (index !== -1) {
          todoArray[index].done = !todoArray[index].done;
          // Если элемент найден, удалить его из массива `todoArray`
          saveTodoToLocalStorage(listName, todoArray);
        // Вызов функции сохранения объекта в local storage
        }
      });
      todoItem.deleteButton.addEventListener('click', () => {
      // Создание обработчика события клика на кнопке "Удалить"
      // eslint-disable-next-line no-restricted-globals
        if (confirm('Вы уверены?')) {
        // Использование встроенной функции confirm, выводящей предупреждение перед действием
          todoItem.item.remove();
          // Удаление элемента дела
          const index = todoArray.findIndex((element) => element.id === current.id);
          // Поиск индекса элемента в массиве объектов дел, соответствующего удаляемому элементу
          if (index !== -1) {
            todoArray.splice(index, 1);
            // Если элемент найден, удалить его из массива `todoArray`
            saveTodoToLocalStorage(listName, todoArray);
          // Вызов функции сохранения объекта в local storage
          }
        }
      });
      todoList.append(todoItem.item);
    // Добавление значения (item) элемента дела
    }
  }
  todoItemForm.form.addEventListener('submit', (e) => {
  // Создание обработчика события submit у формы ввода данных с созданием функции с переменной "е"
    e.preventDefault();
    // Отмена стандартного события отправки формы, чтобы страница не обновлялась

    if (!todoItemForm.input.value) {
      // Проверка наличия значения внутри ввода данных
      return;
      // Если в вводе данных ничего нет, то функция ничего не делает
    }

    let todo = {
      // Создание переменной дела из списка дел
      name: todoItemForm.input.value,
      // Создание свойства имени для дела из списка дел
      done: false,
      // Создание свойства выполнения для дела из списка дел (по умолчанию не выполнено)
      id: Math.round(Math.random() * 100000),
    };

    todoArray.push(todo);
    // Добавление текущего объекта дела в массив дел
    saveTodoToLocalStorage(listName, todoArray);
    // Вызов функции сохранения объекта в local storage

    let todoItem = createTodoItem(todo);
    // Создание переменной нового элемента, содержащего введенные данные
    todoItem.doneButton.addEventListener('click', () => {
      // Создание обработчика события клика на кнопке "Готово"
      todoItem.item.classList.toggle('list-group-item-success');
      // Подключение свойства бутстрап для окрашивания кнопки в состоянии "Готово"
      const index = todoArray.findIndex((element) => element.id === todo.id);
      // Поиск индекса элемента в массиве объектов дел, соответствующего удаляемому элементу
      if (index !== -1) {
        todoArray[index].done = !todoArray[index].done;
        // Если элемент найден, удалить его из массива `todoArray`
        saveTodoToLocalStorage(listName, todoArray);
      // Вызов функции сохранения объекта в local storage
      }
    });
    todoItem.deleteButton.addEventListener('click', () => {
      // Создание обработчика события клика на кнопке "Удалить"
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Вы уверены?')) {
        // Использование встроенной функции confirm, выводящей предупреждение перед действием
        todoItem.item.remove();
        // Удаление элемента дела
        const index = todoArray.findIndex((element) => element.id === todo.id);
        // Поиск индекса элемента в массиве объектов дел, соответствующего удаляемому элементу
        if (index !== -1) {
          todoArray.splice(index, 1);
          // Если элемент найден, удалить его из массива `todoArray`
          saveTodoToLocalStorage(listName, todoArray);
          // Вызов функции сохранения объекта в local storage
        }
      }
    });
    todoList.append(todoItem.item);
    // Добавление значения (item) элемента дела

    todoItemForm.button.disabled = true;
    // Деактивируем кнопку после добавления дела

    todoItemForm.input.value = '';
    // Стираем значения введенного дела в поле ввода
    console.log(todoArray);
  });
}
export { createTodoApp };
// Регистрация функции создания приложения в глобальном объекте window
// чтобы получить доступ к этой функции из других скриптов
