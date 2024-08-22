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
          src="https://s3-alpha-sig.figma.com/img/babb/d088/2218dc44d3e484afe50059b96e77c83c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hiUBjdSDsF9J9fawvFnCCubYJwRDvcVPVM0opL7O162qSZ5zCOkung~Tjfi~-gmwlT2Y3wo47cE1-E716yuFOeda5b~l5CGHSnSCPr4oHTNyVyfNb-57etWRcQ2dB8h33gNbMPwypcuUQxt1eBK0GF1s8KJOnjLvFE6hAwegzVlj96hY7esSOpm2SO~nCgWjIB-ohLpuVytct-xQeE~T6KFeBa1zQuHWVvWc8AWXKocMKelzLRVAk0NAa-bgThTolk8kp97U8wcVEYw9g3UEol69GFYGXfNT0N4G3no0RbVKGwFbdoNHNhYiASUoBDrIn-M4KEd2CrHqduwZ7IX6Tg__"
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
          <span class="text-success">terms of services</span> and
          <span class="text-success">privacy policy</span>
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
