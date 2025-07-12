const doctorCard = {
    create: (doctor) => {
        const div = document.createElement("div");
        div.className = "doctor-card";
        div.innerHTML = `
            <h4>${doctor.name}</h4>
            <p>${doctor.specialty}</p>
        `;
        return div;
    }
};
