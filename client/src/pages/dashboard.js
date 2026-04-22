import { createEl } from "../helpers/dom";

export function loadDashboard() {
    const app = document.querySelector("#app");

    app.innerHTML = "";

    const container = createEl("div", "container");

    const title = createEl("h1", null, "📊 Stock Tracker");

    const search = createEl("input");
    search.placeholder = "Search stocks (AAPL, TSLA...)";

    const stockList = createEl("div", "stock-list");

    container.appendChild(title);
    container.appendChild(search);
    container.appendChild(stockList);

    app.appendChild(container);
}