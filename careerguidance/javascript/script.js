document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        window.location.href = "job_details.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

function validateForm() {
    var title = document.getElementById("jobTitle").value;
    var description = document.getElementById("jobDescription").value;
    var location = document.getElementById("jobLocation").value;
    var type = document.getElementById("jobType").value;

    if (title === "" || description === "" || location === "" || type === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}
