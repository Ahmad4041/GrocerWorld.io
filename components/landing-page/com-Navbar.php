<header>
      <!-- Jumbotron -->
      <div class="p-3 text-center border-bottom" style="background: #f4f1ed">
        <div class="container-fluid">
          <div class="container"></div>
          <div class="row">
            <!-- Left elements -->
            <div
              class="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0 my-auto"
            >
              <a href="#!" class="ms-md-2">
                <img
                  src="/images/logo.png"
                  height="70"
                  width="250"
                />
              </a>
            </div>
            <!-- Left elements -->

            <!-- Center elements -->
            <div class="col-md-4 my-auto">
              <form class="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                <div
                  class="nav-item dropdown p-2"
                  style="background-color: rgb(224, 222, 222)"
                >
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >


                   Category


                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
                <input
                  autocomplete="off"
                  type="search"
                  class="form-control"
                  placeholder="Search"
                />
                <span
                  class="input-group-text border-0 d-none d-lg-flex"
                  style="background: #f77815"
                  ><i class="fas fa-search text-light"></i
                ></span>
              </form>
            </div>
            <!-- Center elements -->

            <!-- Right elements -->
            <div
              class="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center"
            >
              <div class="d-flex">
                <!-- Cart -->
                <a class="text-reset me-3" href="#">
                  <span
                    ><i
                      class="fas fa-shopping-cart p-1"
                      style="
                        border: 1px solid black;
                        border-radius: 50px;
                        height: 30px;
                        width: 30px;
                      "
                    ></i
                  ></span>
                  <span class="badge rounded-pill badge-notification bg-danger"
                    >1</span
                  >
                </a>
                <!-- User -->

                <a href="login.php">
                  <img
                    src="./images/nav-pic.png"
                    class="rounded-circle"
                    style="border: 1px solid black"
                    height="30"
                    alt=""
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <!-- Right elements -->
          </div>
        </div>
      </div>
      <!-- Jumbotron -->
      <nav class="navbar navbar-expand-lg" style="background-color:  rgb(1, 68, 1)">
        <div class="container">
          <div
            class="dropdown"
            style="
              background-color: orange;
              height: 40px;
              margin-right: 40px;
              width: 220px;
            "
          >
            <a
              class="nav-link dropdown-toggle"
              style="padding: 7px 10px 0px 10px; text-align: center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop By Categories
            </a>

           
            <div
              class="flex-shrink-0 p-3 bg-white dropdown-menu"
              style="width: 220px"
            >
              <a
                href="index.php"
                class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
              >
                <svg class="bi me-2" width="30" height="24">
                  <use xlink:href="#bootstrap"></use>
                </svg>
                <span class="fs-5 fw-semibold">Collapsible</span>
              </a>
              <ul class="list-unstyled ps-0">
                <li class="mb-1">
                  <button
                    class="btn btn-toggle align-items-center rounded collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse"
                    aria-expanded="true"
                  >
                    HOME
                  </button>
                  <div class="collapse show" id="home-collapse">
                    <ul
                      class="btn-toggle-nav list-unstyled fw-normal pb-1 small"
                    >
                      <li>
                        <a href="#" class="link-dark rounded">Overview</a>
                      </li>
                      <li><a href="#" class="link-dark rounded">Updates</a></li>
                      <li><a href="#" class="link-dark rounded">Reports</a></li>
                    </ul>
                  </div>
                </li>
                <li class="mb-1">
                  <button
                    class="btn btn-toggle align-items-center rounded collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard-collapse"
                    aria-expanded="false"
                  >
                    Dashboard
                  </button>
                  <div class="collapse" id="dashboard-collapse">
                    <ul
                      class="btn-toggle-nav list-unstyled fw-normal pb-1 small"
                    >
                      <li>
                        <a href="#" class="link-dark rounded">Overview</a>
                      </li>
                      <li><a href="#" class="link-dark rounded">Weekly</a></li>
                      <li><a href="#" class="link-dark rounded">Monthly</a></li>
                      <li>
                        <a href="#" class="link-dark rounded">Annually</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="mb-1">
                  <button
                    class="btn btn-toggle align-items-center rounded collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#orders-collapse"
                    aria-expanded="false"
                  >
                    Orders
                  </button>
                  <div class="collapse" id="orders-collapse">
                    <ul
                      class="btn-toggle-nav list-unstyled fw-normal pb-1 small"
                    >
                      <li><a href="#" class="link-dark rounded">New</a></li>
                      <li>
                        <a href="#" class="link-dark rounded">Processed</a>
                      </li>
                      <li><a href="#" class="link-dark rounded">Shipped</a></li>
                      <li>
                        <a href="#" class="link-dark rounded">Returned</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="border-top my-3"></li>
                <li class="mb-1">
                  <button
                    class="btn btn-toggle align-items-center rounded collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#account-collapse"
                    aria-expanded="false"
                  >
                    Account
                  </button>
                  <div class="collapse" id="account-collapse">
                    <ul
                      class="btn-toggle-nav list-unstyled fw-normal pb-1 small"
                    >
                      <li><a href="#" class="link-dark rounded">New...</a></li>
                      <li><a href="#" class="link-dark rounded">Profile</a></li>
                      <li>
                        <a href="#" class="link-dark rounded">Settings</a>
                      </li>
                      <li>
                        <a href="#" class="link-dark rounded">Sign out</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ">
              <li class="nav-item ">
                <a


                  class=" nav-link home   " 


                  aria-current="page"
                  href="index.php"

                  >HOME</a
                >
              </li>
              <li class="nav-item">
                <a

                  class=" about  nav-link"

                  href="about-us.php"
                 
                  >ABOUT US</a
                >
              </li>
              <li class="nav-item ">
                <a
                  class="nav-link  product "
                  href="product-page.php"
                
                  >PRODUCTS</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  fresh" 
                  href="#"
                  
                  >FRESH</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  frozen"
                  href="#"
                 
                  >FROZEN</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link shop "
                  href="#"
                  
                  >SHOP</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  faqs"
                  href="FAQs.php"
                  
                  >FAQs</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link contact-us"
                  href="contact-us.php"
                 
                  >CONTACT US</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>








    