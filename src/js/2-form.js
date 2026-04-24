const formData = {
    email: "",
    message: ""
};

const STOGARE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(STOGARE_KEY);
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email ?? "";
    formData.message = parsedData.message ?? "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}


form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STOGARE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, message } = formData;
    if (email === "" || message === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(STOGARE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
});