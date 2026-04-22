export function loadWatchlist() {
    const page = document.querySelector("#page");

    page.innerHTML = `
        <div class="container">
            <h1 class="glow">Watchlist ⭐</h1>
            <p>No stocks saved yet</p>
        </div>
    `;
}