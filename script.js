let savedData = JSON.parse(localStorage.getItem("monthlySchedule")) || {};

let checkboxes = document.querySelectorAll("input[type='checkbox']");

// restore saved state
checkboxes.forEach(cb => {
    let key = cb.getAttribute("data-key");

    if (savedData[key]) {
        cb.checked = true;
    }

    // save on change
    cb.addEventListener("change", () => {
        let key = cb.getAttribute("data-key");

        savedData[key] = cb.checked;

        localStorage.setItem("monthlySchedule", JSON.stringify(savedData));
    });
});