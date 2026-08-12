document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------
    // ACTIVE SIDEBAR LINK
    // ------------------------------------

    const currentPath =
        window.location.pathname.replace(/\/+$/, "") || "/";

    document.querySelectorAll(".nav-link").forEach(function (link) {

        const linkPath =
            link.getAttribute("href").replace(/\/+$/, "") || "/";

        if (linkPath === currentPath) {
            link.classList.add("active");
        }

    });


    // ------------------------------------
    // TABLE SEARCH
    // ------------------------------------

    document.querySelectorAll("[data-search]").forEach(function (input) {

        input.addEventListener("input", function () {

            const searchText =
                input.value.toLowerCase().trim();

            const tableId =
                input.getAttribute("data-search");

            const table =
                document.getElementById(tableId);

            if (!table) {
                return;
            }

            const rows =
                table.querySelectorAll("tbody tr");

            rows.forEach(function (row) {

                const text =
                    row.innerText.toLowerCase();

                row.style.display =
                    text.includes(searchText)
                        ? ""
                        : "none";

            });

        });

    });


    // ------------------------------------
    // BUTTON ALERTS
    // ------------------------------------

    document
        .querySelectorAll("[data-action='alert']")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const message =
                    button.dataset.message ||
                    "Action completed.";

                alert(message);

            });

        });


    // ------------------------------------
    // FILTER BUTTONS
    // ------------------------------------

    document.querySelectorAll(".filter").forEach(function (button) {

        button.addEventListener("click", function () {

            const parent =
                button.parentElement;

            parent
                .querySelectorAll(".filter")
                .forEach(function (item) {
                    item.classList.remove("active");
                });

            button.classList.add("active");

        });

    });


    // ------------------------------------
    // GLOBAL SEARCH
    // ------------------------------------

    const globalSearch =
        document.getElementById("globalSearch");

    if (globalSearch) {

        globalSearch.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                const value =
                    globalSearch.value.trim();

                if (value !== "") {

                    alert(
                        "MediLink search:\n\n" +
                        value
                    );

                }

            }

        });

    }

});


// ------------------------------------
// MEDICINE SEARCH
// ------------------------------------

function searchMedicine() {

    const input =
        document.getElementById("medicineSearch");

    if (!input) {
        return;
    }

    const medicine =
        input.value.trim();

    if (!medicine) {

        alert(
            "Please enter a medicine name."
        );

        return;
    }

    alert(
        "Searching MediLink for:\n\n" +
        medicine
    );
}