const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    message.textContent =
        `Student ${name} registered successfully for ${course}.`;

    message.style.color = "green";

    console.log("Student Name:", name);
    console.log("Email:", email);
    console.log("Course:", course);

    form.reset();
});