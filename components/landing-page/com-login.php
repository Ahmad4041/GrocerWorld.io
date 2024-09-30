<div class="container">
  <main class="form-loginin row" style="margin-top: 100px">
    <form>
      <div class="login-Logo">
        <img
          class="mb-4 img-width"
          src="./images/logo.png"
          alt=""
        />
      </div>

      <h1 class="h3 mb-3 fw-normal">Login</h1>
      <p style="font-size: 20px" class="text-muted">
        Enter your Email and Passward
      </p>
      <div class="form-floating">
        <p style="font-size: 15px" class="text-muted">Email or Username</p>
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <!-- <label for="floatingInput">Email address</label> -->
      </div>
      <div class="form-floating">
        <p style="font-size: 15px" class="text-muted">Password</p>
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

      <div style="margin: auto">
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
            Log in
          </a>
        </button>
        <div>
          <h6 class="mt-5 mb-3">
            Don't have an account ?
            <a
              href="sign-up.php"
              style="text-decoration: none; cursor: pointer"
            >
              <span class="text-success">Signup </span>
            </a>
          </h6>
        </div>
      </div>
    </form>
  </main>
</div>
