const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
    // prevenir el evento por defecto
    e.preventDefault();

    // field
    const field = document.querySelectorAll(".field");

    // name
    const inputName = document.querySelector("#name");
    const errorName = document.querySelectorAll(".error-name");
    // last name
    const inputLast = document.querySelector("#lastName");
    const errorLast = document.querySelectorAll(".error-last");
    // email
    const inputEmail = document.querySelector("#email");
    const errorEmail = document.querySelectorAll(".error-email");
    // password
    const inputPassword = document.querySelector("#password");
    const errorPassword = document.querySelectorAll(".error-password");

    // Validaciones
    validation(inputName.value, field, errorName);
    validation(inputLast.value, field, errorLast);
    validation(inputEmail.value, field, errorEmail);
    validation(inputPassword.value, field, errorPassword);

})

const validation = (value, fields, errors) => {
    errors.forEach(error => {
        fields.forEach(field => {
            if (value === "") {
                field.style.borderColor = "red";
                error.classList.remove("active");
                // desaparecer mensaje de error después de 3 segundos
                setTimeout(() => {
                    field.style.borderColor = "hsl(246, 25%, 77%)";
                    error.classList.add("active");
                }, 3000);
            } else {
                error.classList.add("active");
                field.style.borderColor = "hsl(246, 25%, 77%)";
            }
        })
    });
}
