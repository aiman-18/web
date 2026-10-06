const form = document.getElementById("studentForm");
const message = document.getElementById("message");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("studentName").value;

    const email =
        document.getElementById("email").value;

    const course =
        document.getElementById("course").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${course}</td>
    `;

    studentList.appendChild(row);

    message.textContent =
        "Student registered successfully!";

    message.style.color = "green";

    form.reset();
});