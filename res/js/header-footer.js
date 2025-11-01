const carMenu = [
  "CR800",
  "LJM01",
  "Beast",
  "CR14",
  "CR15",
  "CR16",
  "CR18",
  "CRX",
];
const header = `<nav class="navbar navbar-expand-md navbar-light">
    <a class="navbar-brand" href="#" id="navbar-brand">
      <img src="res/img/logos/logo-without-bg.png"
        id="navbar-brand-img" />
       </a>
    <a class="navbar-brand navbar-sponsor" href="#" id="navbar-brand">
      <img src="res/img/sponsors/SRM IST.png"
        id="navbar-brand-img" />
    </a>
     
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link header-link" href="index.html"><span>Home</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link header-link" href="./aboutus.html"><span>About Us</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link header-link" href="partners.html"><span>Partners</span></a>
        </li>
        <!-- FIXED: removed 'show' so it's not open by default -->
        <li class="nav-item dropdown">
          <a class="nav-link header-link dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>The Paddock</span></a>
           <div class="dropdown-menu dropdown-carlist" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="cars.html?car=CR800">
            CR800
          </a>
          <a class="dropdown-item" href="cars.html?car=LJM01">
             LJM01
          </a>
          <a class="dropdown-item" href="cars.html?car=Beast">
             Beast
          </a>
          <a class="dropdown-item" href="cars.html?car=CR14">
            CR14
          </a>
          <a class="dropdown-item" href="cars.html?car=CR15">
            CR15
          </a>
          <a class="dropdown-item" href="cars.html?car=CR16">
           CR16
          </a>
          <a class="dropdown-item" href="cars.html?car=CR18">
            CR18
          </a>
          <a class="dropdown-item" href="cars.html?car=CRX">
            CRX
          </a>
           </div>
        </li>
        <li class="nav-item">
          <a class="nav-link header-link" href="team.html"><span>Our Team</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link header-link" href="#contact"><span>Contact Us</span></a>
        </li>
      </ul>
    </div>
  </nav>`;

const footer = `
  <footer class="camber-footer container-fluid" id="contact">
    <div class="footer-main text-center mb-2">
      <div class="footer-col content ">
        <h5 class="ml-mr-auto">Camber Racing</h5>
        <div class="social-media-icon footer-nav-links">
          <a href="https://www.facebook.com/camberracing/" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/camberracing/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UC_UDIR7rodwCFUY5iEZ8F7A" target="_blank"><i class="fab fa-youtube" ></i></a>
          <a href="#" target="_blank"><i class="fab fa-linkedin" ></i></a>
        </div>
      </div>
      <div class=></div>
      <div class="footer-contact-us text-left ">
      <div>
        <h6 class="heading pl-3">Address</h6>
        <h6 class="pl-3">Camber Racing</h6>
        <div class="mb-3 pr-8 pl-3">
          <p>
            Department of Automobile Engineering SRM Institute of Science &
            Technology, Kattankulathur Tamil Nadu - 603203
          </p>
        </div>
      </div>
      <div>
        <h6 class="heading mb-3 pl-3">Contact Us</h6>
        <h6 class="pl-3">Athul Jebi</h6>
        <div class="pl-3">
          <ul>
            <li><span>Mail: captain.camberracing@gmail.com </span></li>
            <li><span>Mob: +91 90618 19327</span></li>
          </ul>
      </div>
        </div>
      </div>

      <div class="input-section ">
        <h6 class="heading mb-3  pl-3">GET IN TOUCH</h6>
        <form action="https://formspree.io/f/mwkaajzv" method="POST">
          <input class="my-3 ml-2 py-1 pl-3" type="text" placeholder="Name" />
          <input class="my-3 ml-2 py-1 pl-3" type="email" placeholder="Email Address" name="_replyto" />
          <input class="my-3 ml-2 py-1 pl-3" type="text" placeholder="Company Name" />
          <textarea class="my-3 ml-2 py-4 pl-3 text-height-1" placeholder="Message" rows="4" cols="50" name="message"></textarea>
          <div class="ml-2 footer-send-button">
          <div class=" py-2 align-items-center justify-content-center">
            <button type="submit" style="background-color:transparent; outline:none; border:none">
              <h6>Send</h6>
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>

    <hr class="mx-5" />
    <div class="row hr-below mx-5">
      <div class="col-lg 8 col-md-7 col-sm-7 copyright">
        <small>&copy;Copyright Camber Racing SRMIST | 2020</small>
      </div>
      <div class="col-lg-4 col-md-5 col-sm-5 brand-mark">
        <small>Made with <span>&hearts;</span> from
          <a href="https://srmkzilla.net" target="_blank"><span>SRMKZILLA</span></a></small>
      </div>
    </div>
  </footer>`;

// go-to-top button
const goToTop = document.createElement("a");
goToTop.classList.add("go-to-top");
goToTop.href = "#";

const iconTop = document.createElement("i");
iconTop.classList.add("fas");
iconTop.classList.add("fa-arrow-up");
goToTop.appendChild(iconTop);

const headerEle = document.querySelector("header");
const footerEle = document.querySelector("footer");
const body = document.querySelector("body");

window.onload = function () {
  if ($(window).width() >= 768) {
    $(".dropdown").hover(function () {
      $(".dropdown-toggle", this).trigger("click");
    });
  }
};

headerEle.innerHTML = header;
footerEle.innerHTML = footer;
body.appendChild(goToTop);

// Navbar glass effect on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});





/* ---------------------------
   Create and insert fade layer
   --------------------------- */
(function createNavFade() {
  // only create once
  if (!document.querySelector(".nav-fade")) {
    const fade = document.createElement("div");
    fade.className = "nav-fade";
    document.body.appendChild(fade);
  }
})();

/* ---------------------------
   Scroll handler: toggle scrolled class and hide fade
   --------------------------- */
const handleNavOnScroll = () => {
  const navbar = document.querySelector(".navbar");
  const fade = document.querySelector(".nav-fade");
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    if (fade) fade.classList.add("hidden");
  } else {
    navbar.classList.remove("scrolled");
    if (fade) fade.classList.remove("hidden");
  }
};

// run on load and on scroll
window.addEventListener("scroll", handleNavOnScroll);
window.addEventListener("load", handleNavOnScroll);
handleNavOnScroll();


