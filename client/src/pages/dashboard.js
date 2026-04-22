export function loadDashboard() {
    const page = document.querySelector("#page");

    page.innerHTML = `
        <div class="container">

            <input class="search" placeholder="Search stocks..." />

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
}