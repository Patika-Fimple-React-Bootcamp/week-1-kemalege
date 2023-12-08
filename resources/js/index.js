import axios from 'https://cdn.skypack.dev/axios';

// Get the loading element
const loading = document.querySelector('.loader');

// Show the loading screen
loading.style.display = 'block';

// GET request to retrieve todos from the API
axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => {
        const todos = response.data;
        const tableBody = document.getElementById('items-list');
        console.log(tableBody);

        // Iterate over each todo item
        todos.forEach(todo => {
            const title = `${todo.title}`;
            const checkedValue = todo.completed;
            const table = document.getElementById("items-table");
            const newRow = document.createElement("tr");
            const iconColor = checkedValue ? "#00b33b" : "#b3001e";
            
            newRow.innerHTML = `
                <td><span style="color: ${iconColor}"><i class="${checkedValue ? "fa-solid fa-check" : "fa-solid fa-xmark"}"></i></span></td>
                <td>${title}</td>
            `;
            table.appendChild(newRow);
        });
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-check");
        icon.style.color = "green";
        
        // Hide the loading screen
        loading.style.display = 'none';
    })
    .catch(error => {
        console.error('Error:', error);
        loading.style.display = 'none';
    });

    function addItemToList(event) {
        event.preventDefault();

        // Get the checkbox value
        const checkedValue = document.getElementById("checkbox").checked;

        // Get the title
        const title = document.getElementById("title").value;

        // Check if the title is empty
        if (title.trim() === "") {
            return;
        }
        const iconColor = checkedValue ? "#00b33b" : "#b3001e";
        // Add the new row to the table body
        document.getElementById("items-table").innerHTML += `
            <tr>
                <td><span style="color: ${iconColor}"><i class="${checkedValue ? "fa-solid fa-check" : "fa-solid fa-xmark"}"></i></span></td>
                <td>${title}</td>
            </tr>
        `;

        // Clear the title input
        document.getElementById("title").value = "";
    }

    // Add event listener to the submit button
    var submitButton = document.querySelector("button[type='submit']");
    submitButton.addEventListener("click", addItemToList);
    submitButton.addEventListener("click", addItemToList);

