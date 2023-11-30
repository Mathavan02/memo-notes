
document.addEventListener("click",function(e){

    //update
    if (e.target.classList.contains("btn-warning")) {
        e.preventDefault();
        
        // Use an input field for updating the value
        const newValue = prompt("Enter New Value: ");
        
        // Check if the user entered a value
        if (newValue !== null) {
            axios.post('https://memo-notes.onrender.com/update-item', { text: newValue, id: e.target.getAttribute("data-id") })
            .then(function () {
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = newValue;
            })
            .catch(function () {
                console.log("error, try again!");
            });
        }
    }

    //delete
    if (e.target.classList.contains("btn-danger")) {
        e.preventDefault();

        // Use window.confirm for user confirmation
        if (window.confirm("Do you really want to Delete it")) {
            axios.post('https://memo-notes.onrender.com/delete-item', { id: e.target.getAttribute("data-id") })
            .then(function () {
                e.target.parentElement.parentElement.remove();
            })
            .catch(function () {
                console.log("error, try again!");
            });
        }
    }

})