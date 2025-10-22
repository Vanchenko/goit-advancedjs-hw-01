
const formEl = document.querySelector(".login-form");
const formData = {
    email: "",
    message: "",
};
const pp = JSON.parse(localStorage.getItem("feedback-form-state"));

if (pp) {
    formData.email = pp.email;
    formData.message = pp.message;
    };

formEl.elements[0].value = formData.email;
formEl.elements[1].value = formData.message;

formEl.addEventListener("submit", checkInput);
formEl.addEventListener("input", checkInput);

function checkInput(event) {
    event.preventDefault();
    switch (event.target.nodeName) {
        case "INPUT": formData.email = event.target.value.trim();
            break;
        case "TEXTAREA": formData.message = event.target.value.trim();
            break;
        case "FORM":
            if ( formData.email === "" || formData.message === "" ) {
                alert("Fill please all fields");
                return;
            }
            console.log(formData);
            localStorage.removeItem("feedback-form-state");
            formEl.elements[0].value = "";
            formEl.elements[1].value = "";
            formData.email = "";
            formData.message = "";
            return;
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};