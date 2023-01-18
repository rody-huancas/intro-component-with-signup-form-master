const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
    // prevenir el evento por defecto
    e.preventDefault();
    const inputs = document.querySelectorAll(".input");
    const formGroup = document.querySelectorAll(".field");
    const errores = document.querySelectorAll(".error");

    inputs.forEach(input => {
        formGroup.forEach(form => {
            errores.forEach(error => {
                if (input.value === "") {
                    form.style.border = "2px solid red";
                    error.classList.remove("active")
                } else {
                    form.style.border = "2px solid hsl(246, 25%, 77%)";
                    error.classList.add("active")
                }
            })
        })
    })

});