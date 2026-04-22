export function loadStock() {
    const page = document.querySelector("#page");

    page.innerHTML = `
        <div class="container">

            <h1 class="glow">AAPL</h1>
            <p>Apple Inc</p>

            <div class="chart">
                📈 Chart will be added when API connects
            </div>

            <div class="stats">
                <p>Price: $180</p>
                <p>Volume: 120M</p>
                <p>Market Cap: 2.8T</p>
            </div>

            <div class="actions">
                <button class="buy">BUY</button>
                <button class="sell">SELL</button>
            </div>

            <button onclick="navigate('watchlist')" class="watch">
                ⭐ Add to Watchlist
            </button>

        </div>
    `;
}