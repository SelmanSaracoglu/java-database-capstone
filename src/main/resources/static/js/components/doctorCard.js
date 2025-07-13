const doctorCard = {

    createDoctorCard: (doctor, onDelete) => {
        const card = document.createElement("div");
        card.className = "doctor-card";

        const name = document.createElement("h3");
        name.textContent = doctor.name;

        const specialty = document.createElement("p");
        specialty.textContent = `Specialty: ${doctor.specialty}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            onDelete(doctor.id);
        });

        card.appendChild(name);
        card.appendChild(specialty);
        card.appendChild(deleteBtn);

        return card;
    }

};
