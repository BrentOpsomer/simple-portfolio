function insertNavigationMenu() {
    const navigationMenu = `
      <nav>
        <ul class="menu">
          <div class="logo">
          <p class="naam">SIMPLE SITE</p>
          </div>
          <li class="item"><a href="index">OVER MIJ</a></li>
          <li class="item"><a href="#foot">CONTACT</a></li>
          <button class="navKnop" aria-controls="navigatie">
            <svg class="toggle" fill="var(--button-color)" viewBox="0 0 100 100" width="50">
              <rect class="lijntje boven" width="80" height="10" x="10" y="25" rx="5"></rect>
              <rect class="lijntje midden" width="80" height="10" x="10" y="45" rx="5"></rect>
              <rect class="lijntje beneden" width="80" height="10" x="10" y="65" rx="5"></rect>
            </svg>
          </button>
        </ul>
      </nav>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    `;
  
    const headerElement = document.getElementById('navigation-placeholder');
  
    if (headerElement) {
      headerElement.innerHTML = navigationMenu;
    }
  }
  
  function includeFooterMenu() {
    const footerMenu = `
      <footer class="footer" id="foot">
        <div class="container">
          <div class="row">
            <div class="footerKolom">
              <h4>Navigatie</h4>
              <ul>
                <li><a href="index">Over mij</a></li>
                <li><a href="index#specs">Contact</a></li>
              </ul>
            </div>
            <div class="footerKolom">
            
            </div>
            <div class="footerKolom">
              <div class="iconen">
                <a href="tel:0471/02-46-13"><i class="fa fa-phone"></i></a>
              </div>
              <ul>
                <li><a class="contact" href="tel:">0471 02 46 13</a></li>
              </ul>
              <ul>
                <div class="iconen">
                  <a href="https://www.google.be/maps/place/Bakker+Sam/@50.8099459,3.621678,17z/data=!3m1!4b1!4m6!3m5!1s0x47c30fd21fa3bd83:0x176555f3000d2185!8m2!3d50.8099459!4d3.6242529!16s%2Fg%2F11fwxcgm82?hl=nl&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"><i class="fa fa-map-marker"></i></a>
                </div>
                <li><a class="contact"
                    href="https://www.google.be/maps/place/Bakker+Sam/@50.8099459,3.621678,17z/data=!3m1!4b1!4m6!3m5!1s0x47c30fd21fa3bd83:0x176555f3000d2185!8m2!3d50.8099459!4d3.6242529!16s%2Fg%2F11fwxcgm82?hl=nl&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank">Nederholbeekstraat 17</a></li>
              </ul>
              <ul>
                <div class="iconen">
                  <a href="mailto:"><i class="fa fa-envelope"></i></a>
                </div>
                <li><a class="contact" href="mailto:">simple.site@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div class="copyR">
      <p class="footerNaam">Simple site</p>
        <li class="copyright"><a>&copy; 2024 - simplesite.be</a></li>
      </div>
    `;
  
    const footerElement = document.getElementById('footer-placeholder');
  
    if (footerElement) {
      footerElement.innerHTML = footerMenu;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    insertNavigationMenu();
    includeFooterMenu();
  });

  // header.js

function setupNavigationInteractions() {
    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    const items = document.querySelectorAll(".item");
  
    function toggleMenu() {
      menu.classList.toggle("active");
    }
  
    function toggleItem() {
      if (this.classList.contains("has-submenu")) {
        this.classList.toggle("submenu-active");
      }
    }
  
    function closeSubmenu(e) {
      if (menu.querySelector(".submenu-active") && !menu.contains(e.target)) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  
    toggle.addEventListener("click", toggleMenu);
    for (let item of items) {
      item.addEventListener("click", toggleItem);
      item.addEventListener("keypress", toggleItem);
    }
    document.addEventListener("click", closeSubmenu);
  
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const currentState = button.getAttribute("data-state");
  
        if (!currentState || currentState === "closed") {
          button.setAttribute("data-state", "opened");
          button.setAttribute("uitgebreid", "true");
        } else {
          button.setAttribute("data-state", "closed");
          button.setAttribute("uitgebreid", "false");
        }
      });
    });
  }

window.addEventListener("load", setupNavigationInteractions);
  
  