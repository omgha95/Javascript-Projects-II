
# To-Do App Functions

## 1. `addTask(taskText)`
- **Purpose**: Adds a new task to the to-do list.
- **Parameters**: 
  - `taskText` (String): The description of the task.
- **Returns**: None.
- **Description**: This function creates a new task object and adds it to the list of tasks.

```javascript
function addTask(taskText) {
  const task = {
    id: Date.now(), 
    text: taskText,
    completed: false
  };
  tasks.push(task);
  renderTasks();
}
```

---

## 2. `deleteTask(taskId)`
- **Purpose**: Deletes a task from the to-do list.
- **Parameters**: 
  - `taskId` (Number): The unique ID of the task to delete.
- **Returns**: None.
- **Description**: This function removes the task with the specified ID from the list of tasks.

```javascript
function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  renderTasks();
}
```

---

## 3. `toggleTaskCompletion(taskId)`
- **Purpose**: Marks a task as completed or uncompleted.
- **Parameters**: 
  - `taskId` (Number): The unique ID of the task to toggle.
- **Returns**: None.
- **Description**: This function changes the completion status of the specified task.

```javascript
function toggleTaskCompletion(taskId) {
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
  renderTasks();
}
```

---

## 4. `editTask(taskId, newText)`
- **Purpose**: Edits the text of an existing task.
- **Parameters**: 
  - `taskId` (Number): The unique ID of the task to edit.
  - `newText` (String): The updated text for the task.
- **Returns**: None.
- **Description**: This function updates the text of the specified task.

```javascript
function editTask(taskId, newText) {
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    task.text = newText;
  }
  renderTasks();
}
```

---

## 5. `renderTasks(filter = 'all')`
- **Purpose**: Displays the list of tasks on the UI.
- **Parameters**: 
  - `filter` (String): Filter option for the tasks ('all', 'completed', 'pending').
- **Returns**: None.
- **Description**: This function filters the tasks and updates the UI accordingly.

```javascript
function renderTasks(filter = 'all') {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return filter === 'completed' ? task.completed : !task.completed;
  });
  
  // Code to update UI with `filteredTasks` goes here
}
```

---

## 6. `saveTasksToLocalStorage()`
- **Purpose**: Saves the tasks list to `localStorage` to persist data.
- **Parameters**: None.
- **Returns**: None.
- **Description**: This function converts the tasks array to a string and saves it to `localStorage`.

```javascript
function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
```

---

## 7. `loadTasksFromLocalStorage()`
- **Purpose**: Loads the tasks list from `localStorage`.
- **Parameters**: None.
- **Returns**: None.
- **Description**: This function retrieves and parses the tasks data from `localStorage` on page load.

```javascript
function loadTasksFromLocalStorage() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
  renderTasks();
}
```

---

### Summary
These functions allow users to add, edit, delete, complete, and filter tasks. Additionally, they ensure that tasks persist between sessions using `localStorage`.
