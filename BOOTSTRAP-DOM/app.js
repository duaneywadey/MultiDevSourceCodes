
// Refers to the list including the elements
const list = document.querySelector('#toDoList');

// Refers to the form class
const form = document.querySelector('#add-item');

// Takes the input value
const input = form.querySelector('input');


// Refers to the form search class
const searchForm = document.querySelector('#search-item');

// Takes the input value from the search input
const inputSearch = searchForm.querySelector('input');


// Deleting an element
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
   event.target.closest('li').remove();
 }
});


// Adding new list element
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Stores the input value from the form 
  const value = input.value;

  // Create an li element
  const li = document.createElement('li');

  // Creating the Boostrap element
  li.classList.add('list-group-item');
  li.textContent = value;

  // Creating the Bootstrap button
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-danger', 'float-end', 'delete');
  button.textContent = 'Delete';
  li.appendChild(button);
  list.appendChild(li);

});

searchForm.addEventListener('input', (event) => {
  event.preventDefault();

  // Stores the search query from the input
  const query = inputSearch.value.toLowerCase();

  // Get all the list items
  const items = list.querySelectorAll('li');

  // Loop through each item and check if it matches the query
  for (let i = 0; i < items.length; i++) {

    // Get each list item and store it in item 
    const item = items[i];

    // Set the item to lowercase
    const text = item.textContent.toLowerCase();

    // If search input matches any element from the list item, display it
    if (text.includes(query)) {
      item.style.display = 'block';
    }
    // Or else, set display = none 
    else {
      item.style.display = 'none';
    }
  }

});



