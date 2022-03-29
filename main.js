/* function myFunction() {
    var x = document.getElementById("navbar");
    var i = document.getElementById("ba")
    
    if (x.className === "nav") {
        x.className += " responsive";
        i.classList.remove("fa-bars")
        i.classList.add("fa-times")

    } else {
      x.className = "topnav";
      i.classList.remove("fa-times")
    i.classList.add("fa-bars")
    }
  }
  */

  document.getElementById('hamburger').onclick = function() {
      document.getElementById("hamburger").classList.toggle("fa-times")
      document.getElementById('nav').classList.toggle("show")
  }