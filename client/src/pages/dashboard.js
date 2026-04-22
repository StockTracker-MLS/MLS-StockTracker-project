export function loadDashboard() {
    const app = document.querySelector("#app");

    const user = localStorage.getItem("user");

    app.innerHTML = `
        <!-- NAVBAR -->
        <div class="navbar">
            <h2 onclick="navigate('dashboard')">📊 STOCK-X</h2>

            <div class="nav-right">
                <span class="user">${user}</span>
                <button id="logout">Logout</button>
            </div>
        </div>

        <!-- MAIN CONTENT -->
        <div class="container">

            <h1 class="glow">Welcome back 👋</h1>

            <!-- SEARCH -->
            <input class="search" placeholder="Search stocks..." />

            <!-- STOCK GRID -->
            <div class="grid">

                <div class="card" onclick="navigate('stock')">
                    <h3>AAPL</h3>
                    <p>Apple Inc</p>
                    <p class="green">$180</p>
                </div>

                <div class="card" onclick="navigate('stock')">
                    <h3>TSLA</h3>
                    <p>Tesla</p>
                    <p class="red">$240</p>
                </div>

                <div class="card" onclick="navigate('stock')">
                    <h3>GOOGL</h3>
                    <p>Google</p>
                    <p class="green">$140</p>
                </div>

            </div>
        </div>
    `;

    // LOGOUT
    document.getElementById("logout").onclick = () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("user");

        // FUTURE BACKEND:
        // fetch("/api/logout")

        location.reload();
    };
}