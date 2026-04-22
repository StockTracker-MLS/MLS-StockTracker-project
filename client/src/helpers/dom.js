import { loadDashboard } from "../pages/dashboard";
import { loadStock } from "../pages/stock";
import { loadWatchlist } from "../pages/watchlist";

export function initApp() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <div class="navbar">
            <h2 onclick="navigate('dashboard')">⚡ STOCK-X</h2>

            <div class="nav">
                <button onclick="navigate('dashboard')">Dashboard</button>
                <button onclick="navigate('watchlist')">Watchlist</button>
                <button onclick="logout()">Logout</button>
            </div>
        </div>

        <div id="page"></div>
    `;

    window.navigate = navigate;
    window.logout = logout;

    function logout() {
        localStorage.removeItem("user");
        navigate("dashboard");
    }

    function navigate(page) {
        const view = document.querySelector("#page");

        view.innerHTML = "";

        if (page === "dashboard") loadDashboard();
        if (page === "stock") loadStock();
        if (page === "watchlist") loadWatchlist();
    }

    navigate("dashboard");
}