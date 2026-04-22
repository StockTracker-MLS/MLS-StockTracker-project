import "./style.css";
import { loadLogin } from "./pages/login";
import { loadDashboard } from "./pages/dashboard";

document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn) {
        loadDashboard();
    } else {
        loadLogin();
    }
});