const utils = {
    formatDate: (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-GB");
    }
};
