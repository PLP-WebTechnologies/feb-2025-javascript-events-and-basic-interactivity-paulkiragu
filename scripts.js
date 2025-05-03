const button = document.querySelector("#submit")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const errMessageUsername = document.querySelector("#username-error-message")
const errMessagePassword = document.querySelector("#password-error-message")
const messageContainer = document.querySelector(".form-container p")

let successMessage = null

function validateForm() {
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()

    let isValid = true

    if (usernameValue === "") {
        errMessageUsername.textContent = "Username cannot be empty"
        isValid = false
    } else {
        errMessageUsername.textContent = ""
    }

    if (passwordValue === "") {
        errMessagePassword.textContent = "Password cannot be empty"
        isValid = false
    } else {
        errMessagePassword.textContent = ""
    }

    if (isValid) {
        // Clear old success message if exists
        if (successMessage) {
            successMessage.remove()
        }

        //  display success message
        messageContainer.textContent = "Form submitted successfully!"
        messageContainer.style.color = "green"
        messageContainer.style.marginTop = "1rem"
    

        // Remove message after 3 seconds
        setTimeout(() => {
            if (messageContainer) {
                messageContainer.remove()
                messageContainer = null
            }
        }, 3000)
    }

    return isValid
}

button.addEventListener("click", function(event) {
    event.preventDefault()
    validateForm()
})
