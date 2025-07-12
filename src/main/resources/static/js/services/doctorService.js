const doctorService = {
    getAllDoctors: () => {
        return fetch("/api/doctors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${index.getToken()}`
            }
        }).then(res => res.json());
    }

    searchDoctors: (name, specialty) => {
        return doctorService.getAllDoctors().then(data => {
            return data.filter(doc =>
                (name === "" || doc.name.toLowerCase().includes(name.toLowerCase())) &&
                (specialty === "" || doc.specialty === specialty)
            );
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
        });
    }

};
