// =====================================================
// MEDILINK DASHBOARD JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("MediLink dashboard loaded successfully.");

    // Medicine filters
    const filters = document.querySelectorAll(".filter");

    filters.forEach((filter) => {

        filter.addEventListener("click", () => {

            filters.forEach((item) => {
                item.classList.remove("active");
            });

            filter.classList.add("active");

            console.log("Selected filter:", filter.textContent.trim());
        });

    });

});


// =====================================================
// MEDICINE SEARCH
// =====================================================

function searchMedicine() {

    const input = document.getElementById("medicineSearch");

    if (!input) {
        return;
    }

    const medicine = input.value.trim();

    if (medicine === "") {

        alert("Please enter a medicine name.");

        input.focus();

        return;
    }

    alert("Searching for: " + medicine);

    console.log("Medicine search:", medicine);
}