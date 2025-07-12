const index = {
    login: (username, password) => {
        // Şimdilik dummy token
        const dummyToken = "dummyToken123";

        localStorage.setItem("token", dummyToken);
        localStorage.setItem("role", username === "admin" ? "admin" : "doctor");
        console.log("Logged in as:", username);

        // Redirect
        if (username === "admin") {
            window.location.href = "/admin/adminDashboard.html";
        } else {
            window.location.href = "/doctor/doctorDashboard.html";
        }
    },
    getToken: () => {
        return localStorage.getItem("token");
    },
    getRole: () => {
        return localStorage.getItem("role");
    }
};

