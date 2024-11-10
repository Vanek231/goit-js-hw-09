const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message: "",
};

const form = document.querySelector("form");

function saveFormData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
        
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
}

form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formData[name] = value;
    saveFormData();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
});

loadFormData();