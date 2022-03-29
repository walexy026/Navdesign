function myFunction() {
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