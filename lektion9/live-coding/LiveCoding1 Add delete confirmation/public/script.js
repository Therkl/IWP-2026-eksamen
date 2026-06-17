document.querySelectorAll('.delete-btn').forEach( button => {
    button.addEventListener('click', (event) => {
        const userConfirm = confirm('Do you want to delete this note?');

        // Prevent default behaviour
        if(!userConfirm) {
            event.preventDefault(); // Stop form submission
        }
    })
} )