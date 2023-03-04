function toggleNavbars() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
      navbar.className += " mobile";
    } else {
      navbar.className = "navbar";
    }
  }