const list = document.querySelector('#cardPost');
const form = document.querySelector('#add-item'); // Updated query selector
const input = document.querySelector('#input-field'); // Updated query selector
const editableBody = document.querySelector('#editableBody');

// Deleting an element
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
   event.target.closest('.card').remove();
 }
});


// Adding new list element. Add the necessary code here
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the input values
  const title = input.value;
  const body = document.querySelector('textarea').value;

  // Create a new card element
  const card = document.createElement('div');
  card.classList.add('card', 'mt-4');

  // Create the card header
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  const cardTitle = document.createElement('h2');
  cardTitle.textContent = title;
  cardHeader.appendChild(cardTitle);

  // Create the card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const cardContent = document.createElement('p');
  cardContent.textContent = body;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn', 'btn-danger', 'float-end', 'delete');
  deleteButton.textContent = 'Delete';

  cardBody.appendChild(cardContent);
  cardBody.appendChild(deleteButton);

  // Append the card header and body to the card
  card.appendChild(cardHeader);
  card.appendChild(cardBody);

  // Append the card to the cardPost container
  document.querySelector('#cardPost .row').appendChild(card);

});

editableBody.addEventListener('click', function() {
  editableBody.style.display = 'none';
  editForm.style.display = 'block';
});

editForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const newText = document.getElementById('newText').value;
  editableBody.textContent = newText;
  editableBody.style.display = 'block';
  editForm.style.display = 'none';

});


