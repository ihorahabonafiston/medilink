const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "dashboard-public");

const pages = {
    pharmacies: {
        title: "Pharmacies",
        icon: "🏥",
        description: "Manage pharmacies, locations, services and medicine availability."
    },

    medicines: {
        title: "Medicines",
        icon: "💊",
        description: "Manage medicines, categories, prices and availability."
    },

    inventory: {
        title: "Inventory",
        icon: "📦",
        description: "Monitor medicine stock and inventory levels."
    },

    prescriptions: {
        title: "Prescriptions",
        icon: "📋",
        description: "Manage digital prescriptions and prescription requests."
    },

    appointments: {
        title: "Appointments",
        icon: "📅",
        description: "Manage patient appointments and healthcare schedules."
    },

    hospitals: {
        title: "Hospitals",
        icon: "🏥",
        description: "Manage hospitals, departments and healthcare services."
    },

    laboratory: {
        title: "Laboratory",
        icon: "🧪",
        description: "Manage laboratory tests, results and requests."
    },

    deliveries: {
        title: "Deliveries",
        icon: "🚚",
        description: "Track medicine orders and delivery operations."
    },

    reports: {
        title: "Reports",
        icon: "📊",
        description: "View healthcare system reports and operational summaries."
    },

    analytics: {
        title: "Analytics",
        icon: "📈",
        description: "View MediLink statistics, trends and performance analytics."
    },

    settings: {
        title: "Settings",
        icon: "⚙️",
        description: "Manage system configuration and administrator settings."
    }
};

function createPage(name, page) {

    const directory = path.join(publicDir, "pages", name);
    const file = path.join(directory, "index.html");

    fs.mkdirSync(directory, { recursive: true });

    const html = `<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>MediLink - ${page.title}</title>

    <link rel="stylesheet" href="/css/dashboard.css">

</head>

<body>

<div class="app">

    <!-- SIDEBAR -->

    <aside class="sidebar">

        <div class="brand">

            <div class="brand-icon">
                +
            </div>

            <div>
                <h2>MediLink</h2>
                <small>Smart Healthcare System</small>
            </div>

        </div>


        <nav class="navigation">

            <a href="/" class="nav-link">
                📊 Dashboard
            </a>

            <a href="/pages/patients/" class="nav-link">
                👤 Patients
            </a>

            <a href="/pages/pharmacies/" class="nav-link">
                🏥 Pharmacies
            </a>

            <a href="/pages/medicines/" class="nav-link">
                💊 Medicines
            </a>

            <a href="/pages/inventory/" class="nav-link">
                📦 Inventory
            </a>

            <a href="/pages/prescriptions/" class="nav-link">
                📋 Prescriptions
            </a>

            <a href="/pages/appointments/" class="nav-link">
                📅 Appointments
            </a>

            <a href="/pages/hospitals/" class="nav-link">
                🏥 Hospitals
            </a>

            <a href="/pages/laboratory/" class="nav-link">
                🧪 Laboratory
            </a>

            <a href="/pages/deliveries/" class="nav-link">
                🚚 Deliveries
            </a>

            <div class="nav-divider"></div>

            <a href="/pages/reports/" class="nav-link">
                📊 Reports
            </a>

            <a href="/pages/analytics/" class="nav-link">
                📈 Analytics
            </a>

            <a href="/pages/settings/" class="nav-link">
                ⚙️ Settings
            </a>

        </nav>


        <div class="logout">

            <a href="/">
                🚪 Logout
            </a>

        </div>

    </aside>


    <!-- MAIN -->

    <main class="main">

        <!-- TOPBAR -->

        <header class="topbar">

            <div class="search">

                🔍

                <input
                    type="text"
                    placeholder="Search anything..."
                >

            </div>


            <div class="user-area">

                <button type="button">
                    🔔
                </button>

                <button type="button">
                    ✉️
                </button>


                <div class="user">

                    <div class="avatar">
                        A
                    </div>

                    <div>

                        <strong>
                            Dr. Admin
                        </strong>

                        <small>
                            Super Administrator
                        </small>

                    </div>

                </div>

            </div>

        </header>


        <!-- CONTENT -->

        <section class="content">

            <div class="page-header">

                <div>

                    <h1>
                        ${page.icon} ${page.title}
                    </h1>

                    <p>
                        ${page.description}
                    </p>

                </div>

            </div>


            <!-- PAGE CARD -->

            <div class="card">

                <div class="card-header">

                    <h2>
                        ${page.title} Management
                    </h2>

                    <button
                        type="button"
                        class="filter active"
                    >
                        + Add New
                    </button>

                </div>


                <div class="page-empty">

                    <div class="stat-icon blue">
                        ${page.icon}
                    </div>

                    <h2>
                        ${page.title}
                    </h2>

                    <p>
                        The ${page.title.toLowerCase()}
                        module is ready for development.
                    </p>

                </div>

            </div>


            <!-- INFORMATION CARDS -->

            <div class="stats">

                <div class="stat-card">

                    <div class="stat-icon blue">
                        📋
                    </div>

                    <div>

                        <span>
                            Total Records
                        </span>

                        <strong>
                            0
                        </strong>

                        <small>
                            System records
                        </small>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon green">
                        ✓
                    </div>

                    <div>

                        <span>
                            Active
                        </span>

                        <strong>
                            0
                        </strong>

                        <small>
                            Active records
                        </small>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon purple">
                        📈
                    </div>

                    <div>

                        <span>
                            This Month
                        </span>

                        <strong>
                            0
                        </strong>

                        <small>
                            New records
                        </small>

                    </div>

                </div>


                <div class="stat-card">

                    <div class="stat-icon orange">
                        ⚠️
                    </div>

                    <div>

                        <span>
                            Alerts
                        </span>

                        <strong>
                            0
                        </strong>

                        <small>
                            Requires attention
                        </small>

                    </div>

                </div>

            </div>

        </section>

    </main>

</div>


<script src="/js/dashboard.js"></script>

</body>

</html>
`;

    fs.writeFileSync(file, html, "utf8");

    console.log(`Created: ${file}`);
}


for (const [name, page] of Object.entries(pages)) {
    createPage(name, page);
}

console.log("");
console.log("All MediLink pages have been created successfully.");