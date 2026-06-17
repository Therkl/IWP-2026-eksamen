document.querySelectorAll('.delete-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    const confirmed = confirm('Are you sure you want to delete this note?');

    if (!confirmed) {
      event.preventDefault(); // stop form submission
    }
  });
});