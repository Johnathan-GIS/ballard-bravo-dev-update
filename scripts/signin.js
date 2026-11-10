<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign In - Amazing Travels</title>
    <!-- Bootstrap CSS & Icons -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="../styles/style.css" />
  </head>

  <body class="d-flex flex-column min-vh-100 bg-light">
    
    <!-- Toast / Status Message Container -->
    <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1100">
      <div id="statusToast" class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body" id="toastMessage">
            Signed in successfully!
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    </div>

    <!-- Header & Navigation -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="../index.html">🌏 Amazing Travels</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link active" href="signin.html">Sign In</a></li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/Johnathan-GIS/" target="_blank" rel="noopener noreferrer">
                  GitHub Profile <i class="bi bi-box-arrow-up-right"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/Johnathan-GIS/travel-app" target="_blank" rel="noopener noreferrer">
                  Source Code <i class="bi bi-code-slash"></i>
                </a>
              </li>
            </ul>

            <!-- User Account Status -->
            <div class="d-flex align-items-center text-light gap-3" id="userAccountSection">
              <span class="badge bg-secondary">Guest</span>
              <span>Not logged in</span>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content Wrapper -->
    <main class="container my-auto py-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <div class="card shadow-sm border-0 rounded-3">
            <div class="card-body p-4 p-md-5">
              
              <!-- Form Header -->
              <div class="text-center mb-4">
                <h1 class="h3 fw-bold">Sign In</h1>
                <p class="text-muted small">Enter your credentials to access your account</p>
              </div>

              <!-- Sign In Form -->
              <form id="signin-form" onsubmit="handleSignIn(event)">
                <div class="mb-3">
                  <label for="username" class="form-label">Username or Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter your username"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button type="submit" id="signin-btn" class="btn btn-primary w-100 py-2">
                  Sign In
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-light text-center py-3 mt-auto">
      <div class="container">
        <p class="mb-1">&copy; 2026 Amazing Travels. Created by Johnathan Ballard.</p>
        <p class="mb-0">
          <a href="https://github.com/Johnathan-GIS/" class="text-light me-3" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <a href="https://github.com/Johnathan-GIS/travel-app" class="text-light" target="_blank" rel="noopener noreferrer">Source Code Repository</a>
        </p>
      </div>
    </footer>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/bootstrap.bundle.min.js"></script>
    <script src="../scripts/signin.js"></script>
    <script>
      function handleSignIn(event) {
        event.preventDefault();
        const toastEl = document.getElementById('statusToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
      }
    </script>
  </body>
</html>