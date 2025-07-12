const modal = {
    open: (id) => {
        document.getElementById(id).style.display = "block";
    },
    close: (id) => {
        document.getElementById(id).style.display = "none";
    }
};
