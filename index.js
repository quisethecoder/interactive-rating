document.addEventListener("DOMContentLoaded", function () {
    const nums = document.querySelectorAll(".num");
    const submitBtn = document.querySelector(".btn");
    const wrapper = document.querySelector(".wrapper");
    const container = document.querySelector(".container");

    // Variable to store the selected number
    let selectedNumber = 0;

    // Function to handle click event on numbers
    function handleNumberClick(event) {
        selectedNumber = parseInt(event.target.textContent);
        console.log("You selected:", selectedNumber);
    }

    // Add click event listener to each number
    nums.forEach(num => {
        num.addEventListener("click", handleNumberClick);
    });

    // click event listener submit button
    submitBtn.addEventListener("click", function () {
        //message with the selected number
        if (selectedNumber > 0) {
            const message = "You've selected " + selectedNumber + " out of 5.";
            const headerMessage = "Thank you!";
            const additionalMessage = "We want to thank you for taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
            
            const ratingMessage = document.createElement("p");
            ratingMessage.textContent = message;
            ratingMessage.classList.add("rating"); 

            const penIcon = document.createElement("i");
            penIcon.classList.add("fa-solid", "fa-pen-to-square");

            const headMess = document.createElement("h1");
            headMess.textContent = headerMessage;
            headMess.classList.add("headMess");

            const additionalMessageElem = document.createElement("p");
            additionalMessageElem.textContent = additionalMessage;
            additionalMessageElem.classList.add("additional-message");

            wrapper.innerHTML = ""; // Clear previous content
            wrapper.appendChild(penIcon);
            wrapper.appendChild(ratingMessage);
            wrapper.appendChild(headMess);
            wrapper.appendChild(additionalMessageElem);
            container.classList.add("submitted"); 
        } else {
            console.log("Please select a rating before submitting. There was an error");
        }
    });
});
