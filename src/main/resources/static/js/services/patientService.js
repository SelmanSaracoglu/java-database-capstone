const patientService = {
    getAppointmentsForDoctor: (doctorId) => {
        return fetch(`/api/appointments/doctor/${doctorId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${index.getToken()}`
            }
        }).then(res => res.json());
    }

    searchAppointments: (doctorId, name, date) => {
        return patientService.getAppointmentsForDoctor(doctorId).then(data => {
            return data.filter(app =>
                (!name || app.patientName.toLowerCase().includes(name.toLowerCase())) &&
                (!date || app.appointmentDate === date)
            );
        });
    }
};
