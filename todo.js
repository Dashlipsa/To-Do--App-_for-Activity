let todoList = JSON.parse(localStorage.getItem('todoList')) || [
    { item:"Buy milk",date:'4/1/24'},
    {item: "Go to college",date:'10/1/24'},
];
displayItems();

  function addTodo() {
      let inputElement = document.querySelector('#todo-input');
      let dateElement = document.querySelector(`#todo-date`);
      let todoItem = inputElement.value.trim();
      let todoDate = dateElement.value;
      if (todoItem !== '') {
          todoList.push({item:todoItem,date:todoDate});
         inputElement.value = '';
         dateElement.value = '';
         displayItems();
         }
         saveToLocalStorage();
    }

        function displayItems() {
            let containerElement = document.querySelector('.todo-container');
            let newHtml = '';
            

            for (let i = 0; i < todoList.length; i++) {
                let todoItem =todoList[i].item;
                let dueDate=todoList[i].date;
                // let {todoItem,dueDate}=todoList[i];
                newHtml += `
               
                    <span>${todoItem}</span>
                    <span>${dueDate}</span>
                    <button class="btn-delete" onclick="todoList.splice(${i},1);
                    displayItems();
                    saveToLocalStorage();
                    ">Delete</button>
               
                `;
            }
            

            containerElement.innerHTML = newHtml;
        }
        function saveToLocalStorage() {
            localStorage.setItem('todoList', JSON.stringify(todoList));
        }
