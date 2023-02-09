// Step 1: Listen to the input event on the form fields
import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(onFormInput, 500)); 

function onFormInput() {
const formData = {
email: form.elements.email.value,
message: form.elements.message.value,
};
   
// Store the form data in local storage
localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};
    

// Step 2: Load the form data from local storage on page load
const storedFormData = localStorage.getItem("feedback-form-state");
if (storedFormData) {
const formData = JSON.parse(storedFormData);
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;
}

// Step 3: Clear the local storage and form fields on form submit
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (form.elements.email.value === "" || form.elements.message.value === "") {
        alert`Всі поля мають бути заповнені!`;
        return
    }
localStorage.removeItem("feedback-form-state");

const formData = {
email: form.elements.email.value,
message: form.elements.message.value
};
    console.log(formData);
    form.reset();
});