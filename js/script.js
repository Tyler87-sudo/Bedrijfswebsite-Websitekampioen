function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function openHeader() {
      let x = document.getElementById("top-nav")
    if (x.className === "top-nav") {
        x.className = "responsive"
    } else {
        x.className = "top-nav"
    }
  }