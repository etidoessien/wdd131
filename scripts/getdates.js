document.addEventListener("DOMContentLoaded", () => {

    // Get the element with ID "copyright" and update it with the current year
    const copyrightElement = document.getElementById("copyright");
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = `&copy; ${currentYear} ${copyrightElement.innerHTML}`;
    }

    // Get the element with ID "lastModified" and update it with the last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
    }
});
