document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("appFooter");
    if (footer) {
        footer.innerHTML = `
            <p>&copy; 2025 Smart Clinic Management System. All rights reserved.</p>
            <p>
                <a href="/about.html">About</a> |
                <a href="/contact.html">Contact</a>
            </p>
        `;
    }
});
