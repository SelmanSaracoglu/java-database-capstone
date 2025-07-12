const header = {
    render: (role) => {
        const headerDiv = document.getElementById("header");

        let html = `<h2>Smart Clinic Management System</h2>`;

        if (role === "admin") {
            html += `
                <nav>
                    <a href="/admin/dashboard">Admin Dashboard</a>
                    <a href="#">Doctors</a>
                    <a href="#">Logout</a>
                </nav>
            `;
        } else if (role === "doctor") {
            html += `
                <nav>
                    <a href="/doctor/dashboard">Doctor Dashboard</a>
                    <a href="#">Appointments</a>
                    <a href="#">Logout</a>
                </nav>
            `;
        }

        headerDiv.innerHTML = html;
    }
};
