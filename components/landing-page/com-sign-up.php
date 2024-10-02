<head>
  <link rel="stylesheet" href="./css/sign-up.css" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <title>Signup</title>
</head>

<div class="container">
  <main class="form-signup row" style="margin-top: 100px">
    <form>
      <div class="login-Logo">
        <img
          class="mb-4 img-width"
          src="./images/logo.png"
          alt=""
        />
      </div>

      <h1 class="h3 mb-3 fw-normal">Signup</h1>
      <p style="font-size: 20px" class="text-muted">
        Enter your Credentials to continue
      </p>
      <div class="form-floating">
        <p style="font-size: 15px" class="text-muted">Username</p>
        <input
          type="username"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <!-- <label for="floatingInput">Email address</label> -->
      </div>
      <div class="form-floating">
        <p style="font-size: 15px" class="text-muted">Email</p>
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <!-- <label for="floatingPassword">Password</label> -->
      </div>
      <div class="form-floating">
        <p style="font-size: 15px" class="text-muted">Passward</p>
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <!-- <label for="floatingPassword">Password</label> -->
      </div>
      <div class="checkbox mb-3">
        <label>
          <input
            type="checkbox"
            value="remember-me"
            class="text-muted"
            style="cursor: pointer"
          />
          Remember me
        </label>
        <p class="mt-3">
          By continueing you agree to our
          <a href="terms-services.php" style="text-decoration:none;"><span class="text-success">terms of services</span></a>  and
         
         <a href="privacy-policy.php" style="text-decoration:none;"><span class="text-success">privacy policy</span></a> 
        </p>
      </div>

      <div class="btn-login-signup" style="margin: auto">
        <button
          class="w-50 btn btn-lg btn-success"
          type="submit"
          style="border-radius: 50px; display: flex; justify-content: center"
        >
          <a
            href="index.php"
            class="text-light"
            style="text-decoration: none"
          >
            Signup
          </a>
        </button>
        <div>
          <h6 class="mt-5 mb-3">
            Already have an account ?
            <a href="login.php" style="text-decoration: none">
              <span class="text-success" style="cursor: pointer">Log in </span>
            </a>
          </h6>
        </div>
      </div>
    </form>
  </main>
</div>
