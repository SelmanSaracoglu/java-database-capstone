document.addEventListener("DOMContentLoaded", () => {
    loadDoctors();

    document.getElementById("searchDoctor").addEventListener("input", filterDoctors);
    document.getElementById("filterSpecialty").addEventListener("change", filterDoctors);
    document.getElementById("addDoctorBtn").addEventListener("click", openDoctorModal);
    document.querySelector(".close").addEventListener("click", () => modal.close("doctorModal"));
    document.getElementById("saveDoctorBtn").addEventListener("click", saveDoctor);
});

// Load all doctors initially
function loadDoctors() {
    doctorService.getAllDoctors().then(doctors => {
        renderDoctors(doctors);
    });
}

// Filter doctors by name and specialty
function filterDoctors() {
    const name = document.getElementById("searchDoctor").value;
    const specialty = document.getElementById("filterSpecialty").value;

    doctorService.searchDoctors(name, specialty).then(doctors => {
        renderDoctors(doctors);
    });
}

// Render doctor cards
function renderDoctors(doctors) {
    const container = document.getElementById("doctorList");
    container.innerHTML = "";
    doctors.forEach(doc => {
        const card = doctorCard.create(doc);
        container.appendChild(card);
    });
}

// Open modal
function openDoctorModal() {
    modal.open("doctorModal");
}

// Save new doctor
function saveDoctor() {
    const name = document.getElementById("doctorName").value;
    const specialty = document.getElementById("doctorSpecialty").value;
    const password = document.getElementById("doctorPassword").value;

    const doctor = { name, specialty, password };

    doctorService.addDoctor(doctor).then(() => {
        modal.close("doctorModal");
        loadDoctors();
    });
}

