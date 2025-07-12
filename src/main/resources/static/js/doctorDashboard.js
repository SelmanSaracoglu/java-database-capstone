

console.log("doctorDashboard.js loaded!");

const dummyAppointments = [
    { id: 1, patientName: "Jane Smith", appointmentDate: "2025-07-20", status: "SCHEDULED" },
    { id: 2, patientName: "Tom Hanks", appointmentDate: "2025-07-21", status: "COMPLETED" },
    { id: 3, patientName: "Mary Johnson", appointmentDate: "2025-07-22", status: "CANCELLED" }
];

document.addEventListener("DOMContentLoaded", () => {
    console.log("Doctor Dashboard DOM loaded.");
    loadAppointments();

    document.getElementById("searchPatient").addEventListener("input", filterAppointments);
    document.getElementById("filterDate").addEventListener("change", filterAppointments);
});

function loadAppointments() {
    renderAppointments(dummyAppointments);
}

function renderAppointments(appointments) {
    const container = document.getElementById("appointmentList");
    container.innerHTML = "";

    appointments.forEach(app => {
        const div = document.createElement("div");
        div.className = "appointment-card";
        div.innerHTML = `
            <p><strong>Patient:</strong> ${app.patientName}</p>
            <p><strong>Date:</strong> ${app.appointmentDate}</p>
            <p><strong>Status:</strong> ${app.status}</p>
        `;
        container.appendChild(div);
    });
}

function filterAppointments() {
    const name = document.getElementById("searchPatient").value.toLowerCase();
    const date = document.getElementById("filterDate").value;

    const filtered = dummyAppointments.filter(app => {
        const matchesName = !name || app.patientName.toLowerCase().includes(name);
        const matchesDate = !date || app.appointmentDate === date;
        return matchesName && matchesDate;
    });

    renderAppointments(filtered);
}


const dummyPrescriptions = {
    "Jane Smith": [
        { name: "Aspirin", dosage: "100mg", instructions: "Take after meal." },
        { name: "Vitamin C", dosage: "500mg", instructions: "Once daily." }
    ],
    "Tom Hanks": [
        { name: "Ibuprofen", dosage: "200mg", instructions: "Twice daily." }
    ],
    "Mary Johnson": []
};


function renderAppointments(appointments) {
    const container = document.getElementById("appointmentList");
    container.innerHTML = "";

    appointments.forEach(app => {
        const div = document.createElement("div");
        div.className = "appointment-card";
        div.innerHTML = `
            <p><strong>Patient:</strong> ${app.patientName}</p>
            <p><strong>Date:</strong> ${app.appointmentDate}</p>
            <p><strong>Status:</strong> ${app.status}</p>
            <button class="view-prescriptions-btn" data-patient="${app.patientName}">
                View Prescriptions
            </button>
        `;
        container.appendChild(div);
    });

    document.querySelectorAll(".view-prescriptions-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const patientName = e.target.getAttribute("data-patient");
            openPrescriptionModal(patientName);
        });
    });
}
function openPrescriptionModal(patientName) {
    const prescriptions = dummyPrescriptions[patientName] || [];

    const list = document.getElementById("prescriptionList");
    list.innerHTML = "";

    if (prescriptions.length === 0) {
        list.innerHTML = "<p>No prescriptions found.</p>";
    } else {
        prescriptions.forEach(pres => {
            const div = document.createElement("div");
            div.className = "prescription-item";
            div.innerHTML = `
                <p><strong>Medicine:</strong> ${pres.name}</p>
                <p><strong>Dosage:</strong> ${pres.dosage}</p>
                <p><strong>Instructions:</strong> ${pres.instructions}</p>
                <hr>
            `;
            list.appendChild(div);
        });
    }

    modal.open("prescriptionModal");
}

document.querySelector(".close-prescription").addEventListener("click", () => {
    modal.close("prescriptionModal");
});

