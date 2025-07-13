const patientService = {
    getAllPatients: () => {
        return fetch("/api/patients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${index.getToken()}`
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch patients");
            }
            return response.json();
        });
    },

    searchPatients: (name, email) => {
        let url = "/api/patients/search";
        const params = [];
        if (name) params.push(`name=${encodeURIComponent(name)}`);
        if (email) params.push(`email=${encodeURIComponent(email)}`);
        if (params.length > 0) {
            url += "?" + params.join("&");
        }

        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${index.getToken()}`
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error("Failed to search patients");
            }
            return response.json();
        });
    },

    getAppointmentsForDoctor: (doctorId) => {
        return fetch(`/api/appointments/doctor/${doctorId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${index.getToken()}`
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch appointments");
            }
            return response.json();
        });
    },

    searchAppointments: (doctorId, name, date) => {
        return patientService.getAppointmentsForDoctor(doctorId).then(data => {
            return data.filter(app =>
                (!name || app.patient.name.toLowerCase().includes(name.toLowerCase())) &&
                (!date || app.appointmentDate.startsWith(date))
            );
        });
    }
};
