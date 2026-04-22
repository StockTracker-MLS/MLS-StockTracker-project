import { loadDashboard } from "./dashboard";

export function loadLogin() {
  const app = document.querySelector("#app");

  app.innerHTML = `
        <div class="login-container">

            <h1 class="glow">⚡ STOCK-X</h1>
            <p>Login to access your dashboard</p>

            <input id="email" placeholder="Email" />
            <input id="password" type="password" placeholder="Password" />

            <button id="loginBtn">Login</button>

            // <!-- FUTURE GOOGLE AUTH -->
            // <button class="google">
            //     Sign in with Google (coming soon)
            // </button>
            <a href="/auth/google">
              <button>Sign in with Google</button>
            </a>

        </div>
    `;

  document.getElementById("loginBtn").onclick = () => {
    const email = document.getElementById("email").value;

    if (!email) return alert("Enter email");

    // ----------------------------
    // FUTURE BACKEND CONNECTION:
    // fetch("/api/login", { method: "POST", body: ... })
    // ----------------------------

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", email);

    loadDashboard();
  };
}
