const express = require("express");
const path = require("path");

const app = express();
const PORT = 9000;

// ======================================================
// MIDDLEWARE
// ======================================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================================================
// PUBLIC DIRECTORY
// ======================================================

// IMPORTANT:
// server.js is inside:
// C:\Users\INTERNEE\Desktop\medilink2\app
//
// Therefore dashboard-public is:
// C:\Users\INTERNEE\Desktop\medilink2\app\dashboard-public

const publicPath = path.join(__dirname, "dashboard-public");

// Serve HTML, CSS, JavaScript and images
app.use(express.static(publicPath));


// ======================================================
// DASHBOARD
// ======================================================

app.get("/", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});


// ======================================================
// LOGIN
// ======================================================

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {

        return res.status(400).send(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Login Error - MediLink</title>

    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f4f7fb;

            min-height: 100vh;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 20px;
        }

        .box {
            width: 100%;
            max-width: 450px;

            background: white;

            padding: 40px;

            border-radius: 16px;

            text-align: center;

            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        h2 {
            color: #dc2626;
            margin-bottom: 10px;
        }

        p {
            color: #64748b;
            line-height: 1.6;
        }

        a {
            display: inline-block;

            margin-top: 20px;

            padding: 12px 22px;

            background: #2563eb;
            color: white;

            text-decoration: none;

            border-radius: 8px;
        }

        a:hover {
            background: #1d4ed8;
        }
    </style>
</head>

<body>

    <div class="box">

        <h2>Login Failed</h2>

        <p>
            Email and password are required.
        </p>

        <a href="/login.html">
            Back to Login
        </a>

    </div>

</body>

</html>
        `);
    }

    console.log("Login attempt:", email);

    // ==================================================
    // TEMPORARY LOGIN
    // ==================================================
    //
    // Database authentication will be connected later.
    //
    // For now, any non-empty email/password is accepted.

    res.redirect("/");
});


// ======================================================
// REGISTER
// ======================================================

app.post("/register", (req, res) => {

    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        confirmPassword
    } = req.body;


    // ==================================================
    // REQUIRED FIELDS
    // ==================================================

    if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !confirmPassword
    ) {

        return res.status(400).send(`
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Registration Error - MediLink</title>

    <style>

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;

            font-family: Arial, sans-serif;

            background: #f4f7fb;

            min-height: 100vh;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;
        }

        .box {
            width: 100%;

            max-width: 450px;

            background: white;

            padding: 40px;

            border-radius: 16px;

            text-align: center;

            box-shadow:
                0 10px 30px
                rgba(0, 0, 0, 0.08);
        }

        h2 {
            color: #dc2626;
        }

        p {
            color: #64748b;

            line-height: 1.6;
        }

        a {
            display: inline-block;

            margin-top: 20px;

            padding: 12px 22px;

            background: #2563eb;

            color: white;

            text-decoration: none;

            border-radius: 8px;
        }

        a:hover {
            background: #1d4ed8;
        }

    </style>

</head>

<body>

    <div class="box">

        <h2>
            Registration Failed
        </h2>

        <p>
            Please complete all required fields.
        </p>

        <a href="/register.html">
            Back to Registration
        </a>

    </div>

</body>

</html>
        `);
    }


    // ==================================================
    // PASSWORD CONFIRMATION
    // ==================================================

    if (password !== confirmPassword) {

        return res.status(400).send(`
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Password Error - MediLink</title>

    <style>

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;

            font-family: Arial, sans-serif;

            background: #f4f7fb;

            min-height: 100vh;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;
        }

        .box {
            width: 100%;

            max-width: 450px;

            background: white;

            padding: 40px;

            border-radius: 16px;

            text-align: center;

            box-shadow:
                0 10px 30px
                rgba(0, 0, 0, 0.08);
        }

        h2 {
            color: #dc2626;
        }

        p {
            color: #64748b;

            line-height: 1.6;
        }

        a {
            display: inline-block;

            margin-top: 20px;

            padding: 12px 22px;

            background: #2563eb;

            color: white;

            text-decoration: none;

            border-radius: 8px;
        }

    </style>

</head>

<body>

    <div class="box">

        <h2>
            Passwords Do Not Match
        </h2>

        <p>
            Please enter the same password
            in both fields.
        </p>

        <a href="/register.html">
            Back to Registration
        </a>

    </div>

</body>

</html>
        `);
    }


    // ==================================================
    // REGISTRATION LOG
    // ==================================================

    console.log("Registration:", {
        firstName,
        lastName,
        email,
        phone
    });


    // ==================================================
    // TEMPORARY REGISTRATION
    // ==================================================
    //
    // Database storage will be connected later.
    //
    // For now, show successful registration.

    res.send(`
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        MediLink - Registration Successful
    </title>

    <style>

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;

            font-family: Arial, sans-serif;

            background: #f4f7fb;

            min-height: 100vh;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;
        }

        .success-card {

            width: 100%;

            max-width: 480px;

            background: white;

            padding: 40px;

            border-radius: 16px;

            text-align: center;

            box-shadow:
                0 10px 30px
                rgba(0, 0, 0, 0.08);
        }

        .success-icon {

            width: 65px;

            height: 65px;

            display: flex;

            align-items: center;

            justify-content: center;

            margin:
                0 auto 20px;

            border-radius: 50%;

            background: #dcfce7;

            color: #16a34a;

            font-size: 32px;

            font-weight: bold;
        }

        h1 {
            color: #111827;

            margin-bottom: 10px;
        }

        p {
            color: #64748b;

            line-height: 1.6;
        }

        .login-button {

            display: inline-block;

            margin-top: 20px;

            padding: 13px 25px;

            background: #2563eb;

            color: white;

            text-decoration: none;

            border-radius: 8px;

            font-weight: 600;
        }

        .login-button:hover {
            background: #1d4ed8;
        }

    </style>

</head>

<body>

    <div class="success-card">

        <div class="success-icon">
            ✓
        </div>

        <h1>
            Registration Successful
        </h1>

        <p>
            Welcome to
            ${firstName}
            ${lastName}.
        </p>

        <p>
            Your account has been created
            successfully.
        </p>

        <p>
            Please log in to continue to
            the MediLink dashboard.
        </p>

        <a
            href="/login.html"
            class="login-button"
        >
            Go to Login
        </a>

    </div>

</body>

</html>
    `);
});


// ======================================================
// LOGOUT
// ======================================================

app.get("/logout", (req, res) => {

    res.redirect("/login.html");

});


// ======================================================
// 404 PAGE
// ======================================================
//
// We DO NOT use:
//
// sendFile(path.join(publicPath, "404.html"))
//
// because you currently do not have a 404.html file.
//
// ======================================================

app.use((req, res) => {

    res.status(404).send(`
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        404 - MediLink
    </title>

    <style>

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;

            font-family: Arial, sans-serif;

            background: #f4f7fb;

            min-height: 100vh;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;
        }

        .error-card {

            width: 100%;

            max-width: 500px;

            background: white;

            padding: 45px;

            border-radius: 16px;

            text-align: center;

            box-shadow:
                0 10px 30px
                rgba(0, 0, 0, 0.08);
        }

        .error-code {

            font-size: 60px;

            font-weight: bold;

            color: #2563eb;

            margin-bottom: 10px;
        }

        h1 {
            color: #111827;
        }

        p {
            color: #64748b;

            line-height: 1.6;
        }

        a {

            display: inline-block;

            margin-top: 20px;

            padding: 13px 25px;

            background: #2563eb;

            color: white;

            text-decoration: none;

            border-radius: 8px;

            font-weight: 600;
        }

        a:hover {
            background: #1d4ed8;
        }

    </style>

</head>

<body>

    <div class="error-card">

        <div class="error-code">
            404
        </div>

        <h1>
            Page Not Found
        </h1>

        <p>
            The page you requested does not
            exist in the MediLink system.
        </p>

        <a href="/">
            Back to Dashboard
        </a>

    </div>

</body>

</html>
    `);

});


// ======================================================
// SERVER
// ======================================================

const server = app.listen(PORT, () => {

    console.log("");
    console.log("==========================================");
    console.log("        MediLink Healthcare System");
    console.log("==========================================");
    console.log("");
    console.log(
        `Server running at: http://localhost:${PORT}`
    );
    console.log("");
});


// ======================================================
// SERVER ERROR HANDLING
// ======================================================

server.on("error", (error) => {

    if (error.code === "EADDRINUSE") {

        console.error("");
        console.error(
            `ERROR: Port ${PORT} is already in use.`
        );

        console.error(
            `Run: netstat -ano | findstr :${PORT}`
        );

        console.error("");

        process.exit(1);
    }

    console.error("Server error:", error);

});