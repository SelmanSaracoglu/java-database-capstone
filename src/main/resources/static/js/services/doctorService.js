const doctorService = {
    getAllDoctors: () => {
        return fetch("/api/doctors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${index.getToken()}`
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch doctors");
            }
            return response.json();
        });
    },

    addDoctor: (doctor) => {
        return fetch("/api/doctors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${index.getToken()}`
            },
            body: JSON.stringify(doctor)
        }).then(response => {
            if (!response.ok) {
                throw new Error("Failed to add doctor");
            }
            return response.json();
        });
    },

    deleteDoctor: (id) => {
        return fetch(`/api/doctors/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${index.getToken()}`
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error("Failed to delete doctor");
            }
        });
    }
};
