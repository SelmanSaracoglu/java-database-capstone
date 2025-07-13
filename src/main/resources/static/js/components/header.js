document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("appHeader");

    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (token && role) {
        if (role === "admin") {
            header.innerHTML = `
                <nav>
                    <a href="/admin/adminDashboard.html">Admin Dashboard</a>
                    <a href="#" onclick="logout()">Logout</a>
                </nav>
            `;
        } else if (role === "doctor") {
            header.innerHTML = `
                <nav>
                    <a href="/doctor/doctorDashboard.html">Doctor Dashboard</a>
                    <a href="#" onclick="logout()">Logout</a>
                </nav>
            `;
        }
    } else {
        header.innerHTML = `
            <nav>
                <a href="/login.html">Login</a>
            </nav>
        `;
    }
});

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login.html";
}
