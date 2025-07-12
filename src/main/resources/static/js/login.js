document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginBtn").addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        index.login(username, password);
    });
});
