document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const toDoList = document.getElementById('to-do-list');
    const newItemInput = document.getElementById('item');
    const ding = document.getElementById('ding');

    // 4. Add an event handler that captures the value of the above <input> element and creates a new HTML element.
    const addToDoItem = () => {
        const newItemText = newItemInput.value.trim();
        if (newItemText !== "") {
            const newItem = document.createElement('li');

            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            // Create text node
            const text = document.createTextNode(newItemText);

            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            // 5. Event handler that listens for the change event for the checkbox.
            checkbox.addEventListener('change', (event) => {
                if (checkbox.checked) {
                    newItem.classList.add('completed'); // adding class "completed"
                    toDoList.appendChild(newItem); // Move to bottom
                    ding.play();           // play checkbox sound
                } else {
                    newItem.classList.remove('completed');
                }
            });

            // 6. Event handler that removes the respective to-do item when a user clicks on the delete button.
            deleteButton.addEventListener('click', () => {
                toDoList.removeChild(newItem);
            });

            newItem.appendChild(checkbox);
            newItem.appendChild(text);
            newItem.appendChild(deleteButton);
            toDoList.appendChild(newItem);

            // Clear input field
            newItemInput.value = "";
        }
    };

    // Event listener for add button
    addButton.addEventListener('click', addToDoItem);

});