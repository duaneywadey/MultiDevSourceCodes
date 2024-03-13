// Get what's in the paragraph tag
const editableText = document.getElementById('editableText');
const editForm = document.getElementById('editForm');

// Setting a behavior once it's clicked
editableText.addEventListener('click', function() {

  // Hide the text
  editableText.style.display = 'none';

  // Display the form
  editForm.style.display = 'block';
});


// Setting a behavior once it's submitted
editForm.addEventListener('submit', function(e) {

  // So we prevent unnecessary page reload
  e.preventDefault();

  // Get value stored in the editForm
  const newText = document.getElementById('newText').value;

  // Set the value of editableText similar to newText 
  editableText.textContent = newText;

  // Show the text newly edited
  editableText.style.display = 'block';

  // Hide the form
  editForm.style.display = 'none';

});
