const index = {
    login: (username, password) => {
        fetch("/api/admins/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Login failed");
            }
            return response.text(); // dummy text dönüyor
        })
        .then(result => {
            console.log(result);

            // dummy token koyuyoruz yine
            const dummyToken = "dummyToken123";
            localStorage.setItem("token", dummyToken);
            localStorage.setItem("role", username === "admin" ? "admin" : "doctor");

            if (username === "admin") {
                window.location.href = "/admin/adminDashboard.html";
            } else {
                window.location.href = "/doctor/doctorDashboard.html";
            }
        })
        .catch(err => {
            alert("Login failed: " + err.message);
        });
    },

    getToken: () => {
        return localStorage.getItem("token");
    },

    getRole: () => {
        return localStorage.getItem("role");
    }
};

